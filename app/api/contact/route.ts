// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(req: Request) {
  const data = await req.json().catch(() => ({}));
  const { name = "", email = "", message = "" } = data;
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "invalid_input" },
      { status: 400 }
    );
  }
  if (!resend)
    return NextResponse.json(
      { ok: false, error: "missing_api_key" },
      { status: 500 }
    );
  if (!process.env.CONTACT_FROM || !process.env.CONTACT_TO) {
    return NextResponse.json(
      { ok: false, error: "missing_from_or_to" },
      { status: 500 }
    );
  }

  const result = await resend.emails.send({
    from: process.env.CONTACT_FROM!,
    to: process.env.CONTACT_TO!,
    replyTo: email,
    subject: `New enquiry from ${name} — Lusso website`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if ((result as any)?.error) {
    return NextResponse.json(
      { ok: false, error: (result as any).error?.message || "send_failed" },
      { status: 502 }
    );
  }
  return NextResponse.json({ ok: true });
}
