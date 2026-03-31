import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

async function addToBrevoList(data: {
  email: string;
  fullName: string;
  companyName: string;
  jobTitle: string;
  revenue: string;
  message: string;
  hearAbout: string;
}): Promise<{
  success: boolean;
  error?: string;
  contactId?: number;
  status?: number;
  updateStatus?: number;
  updateError?: unknown;
}> {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID;

  console.log(
    "Brevo config check - API Key exists:",
    !!apiKey,
    "List ID:",
    listId,
  );

  if (!apiKey || !listId) {
    console.error("Brevo API key or list ID not configured");
    return { success: false, error: "Missing Brevo configuration" };
  }

  // Split full name into first and last name
  const nameParts = data.fullName.trim().split(" ");
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  const brevoPayload = {
    email: data.email,
    attributes: {
      FIRSTNAME: firstName,
      LASTNAME: lastName,
      COMPANY: data.companyName,
      POSITION: data.jobTitle,
      REVENUE: data.revenue,
      MESSAGE: data.message,
      SOURCE: data.hearAbout || "Not specified",
    },
    listIds: [parseInt(listId, 10)],
    updateEnabled: true,
  };

  console.log("Brevo payload:", JSON.stringify(brevoPayload, null, 2));

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(brevoPayload),
    });

    const responseData = await response.json().catch(() => ({}));
    console.log("Brevo API response:", response.status, responseData);

    if (!response.ok) {
      console.error("Brevo API error:", response.status, responseData);
      return {
        success: false,
        error: JSON.stringify(responseData),
        status: response.status,
      };
    }

    // 204 = contact already exists, need to update attributes and add to list
    if (response.status === 204) {
      console.log("Contact exists, updating attributes and adding to list...");

      // Update contact attributes
      const updateResponse = await fetch(
        `https://api.brevo.com/v3/contacts/${encodeURIComponent(data.email)}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "api-key": apiKey,
          },
          body: JSON.stringify({
            attributes: {
              FIRSTNAME: firstName,
              LASTNAME: lastName,
              COMPANY: data.companyName,
              POSITION: data.jobTitle,
              REVENUE: data.revenue,
              MESSAGE: data.message,
              SOURCE: data.hearAbout || "Not specified",
            },
          }),
        },
      );

      const updateData = await updateResponse.json().catch(() => ({}));
      console.log(
        "Update contact response:",
        updateResponse.status,
        updateData,
      );

      if (!updateResponse.ok) {
        console.error(
          "Failed to update contact attributes:",
          updateResponse.status,
          updateData,
        );
      }

      // Add to list
      const addToListResponse = await fetch(
        `https://api.brevo.com/v3/contacts/lists/${listId}/contacts/add`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "api-key": apiKey,
          },
          body: JSON.stringify({ emails: [data.email] }),
        },
      );

      const addToListData = await addToListResponse.json().catch(() => ({}));
      console.log(
        "Add to list response:",
        addToListResponse.status,
        addToListData,
      );

      if (!addToListResponse.ok) {
        console.error("Failed to add contact to list:", addToListData);
        return {
          success: false,
          error: JSON.stringify(addToListData),
          status: addToListResponse.status,
        };
      }

      return {
        success: true,
        status: 204,
        updateStatus: updateResponse.status,
        updateError: !updateResponse.ok ? updateData : undefined,
      };
    }

    // 201 = created new contact (already added to list)
    return {
      success: true,
      contactId: responseData.id,
      status: response.status,
    };
  } catch (err) {
    console.error("Brevo fetch error:", err);
    return { success: false, error: String(err) };
  }
}

export async function POST(req: NextRequest) {
  try {
    const {
      fullName,
      companyName,
      jobTitle,
      workEmail,
      revenue,
      message,
      hearAbout,
      captchaToken,
    } = await req.json();

    // Verify Google reCAPTCHA
    if (!captchaToken) {
      return NextResponse.json(
        { error: "Please complete the captcha" },
        { status: 400 },
      );
    }

    const recaptchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `response=${captchaToken}&secret=${process.env.RECAPTCHA_SECRET_KEY}`,
      },
    );

    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success) {
      console.error("reCAPTCHA verification failed:", recaptchaData);
      return NextResponse.json(
        { error: "Captcha verification failed" },
        { status: 400 },
      );
    }

    // Send email via Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    console.log("Resend API Key exists:", !!process.env.RESEND_API_KEY);

    const emailResult = await resend.emails.send({
      from: "website@ainavi.co.uk",
      to: "hello@ainavi.co.uk",
      subject: `New enquiry: ${fullName} at ${companyName}`,
      text: `Name: ${fullName}
Company: ${companyName}
Title: ${jobTitle}
Email: ${workEmail}
Revenue: ${revenue}
Source: ${hearAbout || "Not specified"}

Message:
${message}`,
    });

    console.log("Resend result:", emailResult);

    // Add contact to Brevo list
    const brevoResult = await addToBrevoList({
      email: workEmail,
      fullName,
      companyName,
      jobTitle,
      revenue,
      message,
      hearAbout,
    });

    console.log("Brevo result:", brevoResult);

    return NextResponse.json({
      success: true,
      email: emailResult,
      brevo: brevoResult,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
