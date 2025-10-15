"use client";

import Link from "next/link";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export default function Footer() {
  const buttonClass =
    "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm tracking-wide " +
    "text-white bg-white/10 border border-white/25 backdrop-blur-[2px] " +
    "hover:bg-white/20 hover:border-white/35 transition";

  return (
    <footer
      className={`relative ${playfair.variable} font-[var(--font-playfair)]`}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/footer2.png"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* subtle vignette for readability */}
        <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_50%,rgba(0,0,0,0.25),rgba(0,0,0,0.65))]" />
      </div>

      {/* Centered content box */}
      <div className="relative z-10 min-h-[60vh] flex items-center justify-center px-6 py-16 text-center">
        <div className="max-w-3xl w-full space-y-10">
          {/* Brand image */}
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/images/footerlo1.png"
              alt="LUSSO — Luxury Simplified"
              width={280}
              height={56}
              sizes="(max-width: 640px) 200px, 280px"
              className="h-22 md:h-14 w-auto object-contain drop-shadow-[0_0_8px_rgba(0,0,0,0.35)] max-w-full"
              priority
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <Link href="/products" className={buttonClass}>
              Products
            </Link>
            <Link href="/contact" className={buttonClass}>
              Contact Us
            </Link>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-5">
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@Lussoxsh"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-90 hover:opacity-100 transition"
              title="YouTube"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <rect
                  x="3"
                  y="6"
                  width="18"
                  height="12"
                  rx="3"
                  stroke="white"
                  strokeOpacity="0.85"
                />
                <path d="M11 15V9l5 3-5 3z" fill="white" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/lussoxsh/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-90 hover:opacity-100 transition"
              title="Instagram"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  stroke="white"
                  strokeOpacity="0.85"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="white"
                  strokeOpacity="0.9"
                />
                <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/lusso-interiors-pvt-ltd/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-90 hover:opacity-100 transition"
              title="LinkedIn"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="2"
                  stroke="white"
                  strokeOpacity="0.85"
                />
                <rect x="6.5" y="10" width="2.5" height="7" fill="white" />
                <rect x="6.5" y="7" width="2.5" height="2.2" fill="white" />
                <path
                  d="M11 17v-4.2c0-1.7 1-2.7 2.6-2.7 1.5 0 2.4.9 2.4 2.6V17h-2.6v-3.8c0-.7-.3-1.1-.9-1.1-.6 0-1 .4-1 .9V17H11z"
                  fill="white"
                />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/lussoxsh/"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-90 hover:opacity-100 transition"
              title="Facebook"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="4"
                  stroke="white"
                  strokeOpacity="0.85"
                />
                <path
                  d="M13 10h2V8h-2c-1.7 0-3 1.3-3 3v1H8v2h2v5h2v-5h2l.5-2H12v-1c0-.6.4-1 1-1z"
                  fill="white"
                />
              </svg>
            </a>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/25 w-24 mx-auto" />

          {/* Address & Contact */}
          <div className="grid grid-cols-1 gap-6 text-sm md:text-base text-white/90">
            <div className="space-y-1">
              <p className="text-white/70">Address</p>
              <p>
                Second Floor, NVR Square, 8-2-682, Plot No 2, Road No. 12,
                <br />
                Banjara Hills, Hyderabad, Telangana 500028
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-white/70">Contact</p>
              <a
                href="tel:+919888781999"
                className="underline decoration-transparent hover:decoration-white/60 transition"
              >
                +91 98887 81999 — LUSSO
              </a>
              <br />
              <a
                href="mailto:info@lussointeriors.in"
                className="underline decoration-transparent hover:decoration-white/60 transition"
              >
                info@lussointeriors.in
              </a>
            </div>

            <div className="pt-2 text-xs text-white/60">
              © {new Date().getFullYear()} Lusso. All rights reserved.
            </div>

            {/* Legal links row */}
            <div className="pt-1 text-xs text-white/60 flex items-center justify-center gap-3">
              <Link
                href="/terms"
                className="underline decoration-transparent hover:decoration-white/60 transition"
                aria-label="Terms & Conditions"
              >
                Terms & Conditions
              </Link>
              <span aria-hidden>•</span>
              <Link
                href="/privacy"
                className="underline decoration-transparent hover:decoration-white/60 transition"
                aria-label="Privacy Policy"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
