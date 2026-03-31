import { NextRequest, NextResponse } from "next/server";

async function addToBrevoList(data: {
  email: string;
  fullName: string;
}): Promise<{
  success: boolean;
  error?: string;
  contactId?: number;
  status?: number;
}> {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_FUNDING_KIT_LIST_ID;

  if (!apiKey || !listId) {
    console.error("Brevo API key or funding kit list ID not configured");
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
      SOURCE: "AI Funding Guide - Action Kit Download",
    },
    listIds: [parseInt(listId, 10)],
    updateEnabled: true,
  };

  console.log("Brevo funding kit payload:", JSON.stringify(brevoPayload, null, 2));

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

    if (!response.ok && response.status !== 204) {
      console.error("Brevo API error:", response.status, responseData);
      return {
        success: false,
        error: JSON.stringify(responseData),
        status: response.status,
      };
    }

    // 204 = contact already exists, need to add to list
    if (response.status === 204) {
      console.log("Contact exists, adding to funding kit list...");

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
        }
      );

      const addToListData = await addToListResponse.json().catch(() => ({}));
      console.log("Add to list response:", addToListResponse.status, addToListData);

      // 400 with "Contact already in list" is actually a success - contact is already subscribed
      if (!addToListResponse.ok) {
        const isAlreadyInList = addToListData?.message?.includes("already in list");
        if (isAlreadyInList) {
          console.log("Contact already in funding kit list - treating as success");
          return { success: true, status: 200 };
        }

        console.error("Failed to add contact to list:", addToListData);
        return {
          success: false,
          error: JSON.stringify(addToListData),
          status: addToListResponse.status,
        };
      }

      return { success: true, status: 204 };
    }

    // 201 = created new contact
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
    const { fullName, email } = await req.json();

    if (!fullName || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Add contact to Brevo list
    const brevoResult = await addToBrevoList({
      email,
      fullName,
    });

    console.log("Brevo result:", brevoResult);

    if (!brevoResult.success) {
      return NextResponse.json(
        { error: "Failed to process request" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      brevo: brevoResult,
    });
  } catch (error) {
    console.error("Funding kit form error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
