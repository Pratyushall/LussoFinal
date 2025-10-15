import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, audience } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Format the email content
    const emailContent = `
New Contact Form Submission

From: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Type: ${audience === "partner" ? "Partnership Inquiry" : "Homeowner Inquiry"}

Message:
${message}
    `.trim();

    // Send email using Resend
    // Replace 'info@lussointeriors.in' with your verified sender email in Resend
    const data = await resend.emails.send({
      from: "LUSSO Contact Form <onboarding@resend.dev>", // Use your verified domain
      to: ["info@lussointeriors.in"], // Your receiving email
      replyTo: email, // User's email for easy replies
      subject: `New ${
        audience === "partner" ? "Partnership" : "Contact"
      } Inquiry from ${name}`,
      text: emailContent,
    });

    console.log("[v0] Email sent successfully:", data);

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("[v0] Error sending email:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
