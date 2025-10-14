import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_FROM = process.env.CONTACT_FROM!;
const CONTACT_TO = process.env.CONTACT_TO!;

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  try {
    const {
      name = "",
      email = "",
      phone = "",
      message = "",
      website = "",
    } = await req.json().catch(() => ({}));

    // honeypot
    if (website) return NextResponse.json({ ok: true });

    if (!name || !message || !isEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "invalid_input" },
        { status: 400 }
      );
    }

    const subject = `New enquiry from ${name} — Lusso website`;
    const text = [
      `From: ${name} <${email}>`,
      phone ? `Phone: ${phone}` : "",
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    await resend.emails.send({
      from: CONTACT_FROM, // e.g., "Lusso Website <website@lussointeriors.in>"
      to: CONTACT_TO, // your current inbox
      replyTo: email, // you can reply straight to the sender
      subject,
      text,
      // (optional) html,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { ok: false, error: "send_failed" },
      { status: 500 }
    );
  }
}
