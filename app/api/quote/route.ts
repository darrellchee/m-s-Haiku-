import { NextRequest, NextResponse } from "next/server";
import { QuoteFormData } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    const body: QuoteFormData = await request.json();

    // Basic validation
    if (!body.name || !body.phone || !body.suburb || !body.serviceType || !body.propertySize || !body.datePreference) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In production, you'd:
    // 1. Send to your backend/CRM (Pipedrive, HubSpot, etc.)
    // 2. Send confirmation email to customer
    // 3. Send notification to business
    // For now, we log to console
    console.log("Quote Request Received:", {
      timestamp: new Date().toISOString(),
      ...body,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Quote request received. We'll contact you shortly!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Quote API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
