"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type Brand = { name: string; logo: string };

const BRANDS: Brand[] = [
  { name: "Blum", logo: "/images/blum.png" },
  { name: "Aristo", logo: "/images/aristo.png" },
  { name: "Casantro", logo: "/images/casantro.jpeg" },
  { name: "Häfele", logo: "/images/hafele.png" },
  { name: "Hettich", logo: "/images/hettich.png" },
  { name: "Kesseböhmer", logo: "/images/kessebohmer.png" },
  { name: "Indoline", logo: "/images/indoline.png" },
  { name: "Liebherr", logo: "/images/liebherr.png" },
  { name: "Makwana", logo: "/images/makwana.png" },
  { name: "Navaki", logo: "/images/navaki.png" },
  { name: "Quantra Quartz", logo: "/images/quantra.png" },
  { name: "Salice", logo: "/images/salice.png" },
  { name: "Bosch", logo: "/images/bosch.png" },
  { name: "Siemens", logo: "/images/siemens.png" },
  { name: "Grayzo", logo: "/images/grayzo.png" },
  { name: "Forever", logo: "/images/forever.png" },
  { name: "Dyson", logo: "/images/dyson.png" },
  { name: "ceasertone", logo: "/images/ceaserstone.png" }, // ensure filename is correct
  { name: "Wesmark", logo: "/images/wesmark.png" },
];

export default function BrandsCollaborationSection() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  // duplicate for seamless loop
  const lane = useMemo(() => [...BRANDS, ...BRANDS], []);

  return (
    <section
      aria-label="Key Collaborations"
      className="relative py-10 md:py-14"
      style={{ backgroundColor: "#0a1526" }}
    >
      <div className="text-center px-4 mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-light text-white">
          Key Collaborations
        </h2>
        <div className="w-16 h-px bg-amber-400/70 mx-auto mt-3" />
      </div>

      {/* FULL-BLEED WHITE RIBBON */}
      <div className="w-screen max-w-[100vw] mx-[calc(50%-50vw)] relative">
        {/* Ribbon (taller to accommodate bigger logos) */}
        <div className="relative h-[280px] md:h-[320px] bg-white">
          {/* soft lift */}
          <div className="pointer-events-none absolute inset-x-0 -top-4 h-4 bg-gradient-to-b from-black/15 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 -bottom-4 h-4 bg-gradient-to-t from-black/15 to-transparent" />

          {/* Lanes (above ribbon) */}
          <div className="absolute inset-0 overflow-hidden z-10">
            {/* Lane 1: left -> right */}
            <div className="absolute top-[28%] -translate-y-1/2 left-0 right-0">
              <div
                className="flex items-center gap-7 md:gap-10 w-[200%]"
                style={{
                  transform: "translateX(0)",
                  animation: reduced
                    ? undefined
                    : "reel-left 48s linear infinite",
                }}
              >
                {lane.map((b, i) => (
                  <LogoPill
                    key={`l1-${b.name}-${i}`}
                    name={b.name}
                    logo={b.logo}
                    priority={i < 8}
                  />
                ))}
              </div>
            </div>

            {/* Lane 2: right -> left */}
            <div className="absolute bottom-[28%] translate-y-1/2 left-0 right-0">
              <div
                className="flex items-center gap-7 md:gap-10 w-[200%] justify-end"
                style={{
                  transform: "translateX(-50%)",
                  animation: reduced
                    ? undefined
                    : "reel-right 50s linear infinite",
                }}
              >
                {lane.map((b, i) => (
                  <LogoPill
                    key={`l2-${b.name}-${i}`}
                    name={b.name}
                    logo={b.logo}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-white/70 text-xl md:text-base px-10">
        Partnerships that ensure precision, durability, and quiet luxury.
      </p>

      {/* Global keyframes */}
      <style jsx global>{`
        @keyframes reel-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes reel-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}

function LogoPill({
  name,
  logo,
  priority,
}: {
  name: string;
  logo: string;
  priority?: boolean;
}) {
  return (
    <div className="h-[140px] md:h-[160px] flex items-center justify-center">
      <div
        className="
          flex items-center justify-center
          h-[120px] md:h-[140px] min-w-[220px] md:min-w-[260px]
          px-8 md:px-10
          rounded-2xl
          bg-[#edeef0]
          border border-black/5
          shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)]
        "
      >
        <Image
          src={logo}
          alt={`${name} logo`}
          height={360}
          width={360}
          className="
            object-contain h-24 md:h-28 w-auto
            opacity-95
            drop-shadow-[0_0_1px_rgba(0,0,0,0.25)]
            contrast-125
          "
          sizes="(max-width: 768px) 40vw, (max-width: 1280px) 24vw, 18vw"
          priority={priority}
        />
      </div>
    </div>
  );
}
