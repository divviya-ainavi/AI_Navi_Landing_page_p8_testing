import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// Verify ScoreApp webhook signature
function verifySignature(payload: string, signature: string, secret: string): boolean {
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}

// Add scorecard lead to Brevo
async function addScorecardLeadToBrevo(data: {
  email: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  phone?: string;
  totalScore?: number;
  maxScore?: number;
  scorePercentage?: number;
  categories?: Record<string, number>;
  completedAt?: string;
}): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_SCORECARD_LIST_ID || process.env.BREVO_LIST_ID;

  if (!apiKey || !listId) {
    console.error("Brevo API key or list ID not configured");
    return { success: false, error: "Missing Brevo configuration" };
  }

  const brevoPayload = {
    email: data.email,
    attributes: {
      FIRSTNAME: data.firstName || "",
      LASTNAME: data.lastName || "",
      COMPANY: data.company || "",
      SMS: data.phone || "",
      SCORECARD_TOTAL: data.totalScore || 0,
      SCORECARD_MAX: data.maxScore || 0,
      SCORECARD_PERCENTAGE: data.scorePercentage || 0,
      SCORECARD_CATEGORIES: data.categories ? JSON.stringify(data.categories) : "",
      SCORECARD_COMPLETED: data.completedAt || new Date().toISOString(),
      SOURCE: "AI Readiness Scorecard",
    },
    listIds: [parseInt(listId, 10)],
    updateEnabled: true,
  };

  console.log("Brevo scorecard payload:", JSON.stringify(brevoPayload, null, 2));

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
      return { success: false, error: JSON.stringify(responseData) };
    }

    // If contact exists (204), update attributes
    if (response.status === 204) {
      console.log("Contact exists, updating scorecard attributes...");

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
            attributes: brevoPayload.attributes,
          }),
        }
      );

      if (!updateResponse.ok) {
        const updateData = await updateResponse.json().catch(() => ({}));
        console.error("Failed to update contact:", updateData);
      }

      // Add to scorecard list
      await fetch(
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
    }

    return { success: true };
  } catch (err) {
    console.error("Brevo fetch error:", err);
    return { success: false, error: String(err) };
  }
}

export async function POST(req: NextRequest) {
  try {
    const payload = await req.text();
    const signature = req.headers.get("Scoreapp-Signature") || "";
    const secret = process.env.SCOREAPP_WEBHOOK_SECRET;

    // Verify signature if secret is configured
    // TODO: Re-enable after debugging
    if (secret && signature) {
      try {
        const isValid = verifySignature(payload, signature, secret);
        if (!isValid) {
          console.warn("Invalid ScoreApp webhook signature - continuing anyway for debugging");
          // Temporarily disabled for debugging
          // return NextResponse.json(
          //   { error: "Invalid signature" },
          //   { status: 401 }
          // );
        }
      } catch (err) {
        console.warn("Signature verification error - continuing anyway:", err);
        // Temporarily disabled for debugging
        // return NextResponse.json(
        //   { error: "Signature verification failed" },
        //   { status: 401 }
        // );
      }
    }

    const data = JSON.parse(payload);
    console.log("ScoreApp webhook received:", JSON.stringify(data, null, 2));

    // Extract lead data from ScoreApp payload
    // ScoreApp sends data in various formats depending on the event
    const lead = data.lead || data.contact || data.user || data;
    const results = data.results || data.scores || data.score || {};

    // Check multiple possible email field locations
    const email =
      lead.email ||
      lead.Email ||
      lead.email_address ||
      data.email ||
      data.Email ||
      data.respondent?.email ||
      "";

    // Handle test requests (ScoreApp test sends dummy data without email)
    if (!email) {
      console.log("No email in webhook payload - likely a test request");
      return NextResponse.json({
        success: true,
        message: "Webhook received successfully (no email to process - test mode)",
        received: data,
      });
    }

    // Calculate score percentage if available
    const totalScore = results.total_score || results.totalScore || results.score || 0;
    const maxScore = results.max_score || results.maxScore || 100;
    const scorePercentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;

    // Extract category scores if available
    const categories: Record<string, number> = {};
    if (results.categories || results.dimensions) {
      const cats = results.categories || results.dimensions;
      for (const [key, value] of Object.entries(cats)) {
        categories[key] = typeof value === "number" ? value : 0;
      }
    }

    // Add to Brevo
    const brevoResult = await addScorecardLeadToBrevo({
      email,
      firstName: lead.first_name || lead.firstName || lead.name?.split(" ")[0] || "",
      lastName: lead.last_name || lead.lastName || lead.name?.split(" ").slice(1).join(" ") || "",
      company: lead.company || lead.Company || lead.organization || "",
      phone: lead.phone || lead.Phone || "",
      totalScore,
      maxScore,
      scorePercentage,
      categories,
      completedAt: data.completed_at || data.completedAt || new Date().toISOString(),
    });

    console.log("Brevo result:", brevoResult);

    return NextResponse.json({
      success: true,
      brevo: brevoResult,
    });
  } catch (error) {
    console.error("ScoreApp webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}

// Handle GET requests (for webhook URL verification if needed)
export async function GET() {
  return NextResponse.json({ status: "ScoreApp webhook endpoint active" });
}
