"use client";

import {
  useEffect,
  useRef,
  useState,
  type TouchEvent as ReactTouchEvent,
} from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";

/* ---------------------------------------------
 * Types & Data
 * -------------------------------------------*/
type Tile = { src: string; alt: string };

type ShutterType = {
  key:
    | "acrylic"
    | "aluminiumFrame"
    | "fabricCaneRattan"
    | "glass"
    | "laminate"
    | "louvered"
    | "profile"
    | "puLacquered"
    | "veneer";
  label: string;
};

const SHUTTER_TYPES: ShutterType[] = [
  { key: "acrylic", label: "Acrylic" },
  { key: "aluminiumFrame", label: "Aluminium Frame Shutter" },
  { key: "fabricCaneRattan", label: "Fabric cane rattan" },
  { key: "glass", label: "glass shutters" },
  { key: "laminate", label: "Laminate Shutters" },
  { key: "louvered", label: "Louvered shutters" },
  { key: "profile", label: "Profile shutters" },
  { key: "puLacquered", label: "PU Lacquered shutters" },
  { key: "veneer", label: "Veneer Shutters" },
];

/* ---------------------------------------------
 * Page
 * -------------------------------------------*/
export default function ShuttersPage() {
  return (
    <div
      style={{ backgroundColor: "#0a1526" }}
      className="min-h-screen relative"
    >
      <TopRightMenu />
      <Hero />
      <TypesNav />
      <TypesSections />
      <Footer />
    </div>
  );
}

/* ---------------------------------------------
 * Top-right menu
 * -------------------------------------------*/
function TopRightMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-5 right-5 z-[80]">
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative px-4 py-2 rounded-full border border-white/20 text-white/90 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition"
        aria-label="Open menu"
      >
        <span className="inline-flex items-center gap-2">
          <span aria-hidden>☰</span>
        </span>
      </button>

      {open && (
        <nav className="mt-2 w-56 rounded-2xl overflow-hidden border border-white/15 bg-[#0a1526]/95 backdrop-blur-md shadow-xl">
          {[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}

/* ---------------------------------------------
 * Hero
 * -------------------------------------------*/
function Hero() {
  return (
    <section className="min-h-[48vh] md:min-h-[58vh] relative overflow-hidden flex items-center">
      <div className="absolute -top-24 -left-28 w-[28rem] h-[28rem] rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.12),rgba(255,255,255,0)_60%)]" />
      <div className="absolute -bottom-28 -right-24 w-[34rem] h-[34rem] rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.10),rgba(255,255,255,0)_60%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-thin text-white tracking-tight">
            <span className="text-transparent bg-gradient-to-r from-amber-400 via-amber-40 to-amber-400 bg-clip-text">
              Shutters
            </span>
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent my-6" />
          <p className="text-lg md:text-xl text-white/75 leading-relaxed">
            For light, privacy, and presence.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------
 * Types button row — click scrolls to sections
 * -------------------------------------------*/
function TypesNav() {
  const handleJump = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap gap-3 md:gap-4 py-6 md:py-8">
          {SHUTTER_TYPES.map((item) => (
            <button
              key={item.key}
              onClick={() => handleJump(`type-${item.key}`)}
              className="group px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-white/20 text-white/90
                         bg-white/5 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm transition
                         text-sm md:text-base"
            >
              <span className="align-middle">{item.label}</span>
              <span
                aria-hidden
                className="ml-2 inline-block transition-transform group-hover:translate-x-1"
              ></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------
 * Sections per type — each = FULL-SCREEN framed slideshow
 * -------------------------------------------*/
function TypesSections() {
  // Drop 6 images for each type into /public/images using the exact filenames below
  const ACRYLIC: Tile[] = [
    {
      src: "/images/acrys1.png",
      alt: "High-gloss acrylic shutter, seamless finish",
    },
    {
      src: "/images/acrys2.png",
      alt: "Acrylic shutters with integrated handles",
    },
    {
      src: "/images/acrys3.png",
      alt: "Mirror-like acrylic, modern kitchen",
    },
    {
      src: "/images/acrys4.png",
      alt: "Acrylic fronts with soft edges",
    },
    {
      src: "/images/acrys5.png",
      alt: "Two-tone acrylic shutter composition",
    },
    {
      src: "/images/acrys6.png",
      alt: "Matte acrylic variant, muted palette",
    },
  ];

  const ALUMINIUM_FRAME: Tile[] = [
    {
      src: "/images/aluf1.png",
      alt: "Aluminium frame shutter with glass infill",
    },
    {
      src: "/images/aluf2.png",
      alt: "Slim brushed aluminium profile shutters",
    },
    {
      src: "/images/aluf3.png",
      alt: "Dark anodized aluminium frame shutters",
    },
    {
      src: "/images/aluf4.png",
      alt: "Aluminium frame with frosted panel",
    },
    {
      src: "/images/aluf5.png",
      alt: "Wide-span aluminium shutter doors",
    },
    {
      src: "/images/aluf6.png",
      alt: "Aluminium frame with textured insert",
    },
  ];

  const FABRIC_CANe_RATTAN: Tile[] = [
    {
      src: "/images/fcr1.png",
      alt: "Cane/rattan shutter panel, airy weave",
    },
    {
      src: "/images/fcr2.png",
      alt: "Fabric-backed rattan shutters",
    },
    {
      src: "/images/fcr3.png",
      alt: "Warm cane weave in timber frame",
    },
    {
      src: "/images/fcr4.png",
      alt: "Rattan shutters with brass pulls",
    },
    {
      src: "/images/fcr5.png",
      alt: "Natural rattan, soft tropical style",
    },
    {
      src: "/images/fcr6.png",
      alt: "Fine-weave cane shutters, vintage look",
    },
  ];

  const GLASS: Tile[] = [
    {
      src: "/images/gsh1.png",
      alt: "Clear glass shutter with slim profiles",
    },
    { src: "/images/gsh2.png", alt: "Tinted glass shutter fronts" },
    {
      src: "/images/gsh3.png",
      alt: "Fluted glass shutter, soft diffusion",
    },
    {
      src: "/images/gsh4.png",
      alt: "Frosted glass shutter in black frame",
    },
    {
      src: "/images/gsh5.png",
      alt: "Ribbed glass with bronze accents",
    },
    {
      src: "/images/gsh6.png",
      alt: "Smoked glass shutters, luxe feel",
    },
  ];

  const LAMINATE: Tile[] = [
    {
      src: "/images/lash1.png",
      alt: "Textured laminate shutter, oak tone",
    },
    {
      src: "/images/lash2.png",
      alt: "Matte laminate, handle-less groove",
    },
    {
      src: "/images/lash3.png",
      alt: "High-pressure laminate, durable finish",
    },
    {
      src: "/images/lash4.png",
      alt: "Stone-look laminate shutters",
    },
    {
      src: "/images/lash5.png",
      alt: "Warm walnut laminate, vertical grain",
    },
    {
      src: "/images/lash6.png",
      alt: "Monotone laminate with sleek lines",
    },
  ];

  const LOUVERED: Tile[] = [
    {
      src: "/images/loush1.png",
      alt: "Classic louvered shutter panels",
    },
    {
      src: "/images/loush2.png",
      alt: "Wide louver shutters, coastal vibe",
    },
    { src: "/images/loush3.png", alt: "Painted louvered shutters" },
    {
      src: "/images/loush4.png",
      alt: "Timber louvered shutters, warm tone",
    },
    {
      src: "/images/loush5.png",
      alt: "Adjustable louvers for light control",
    },
    {
      src: "/images/loush6.png",
      alt: "Tall louvered doors, airy feel",
    },
  ];

  const PROFILE: Tile[] = [
    {
      src: "/images/prosh1.png",
      alt: "Profile shutters with shaker detailing",
    },
    {
      src: "/images/prosh2.png",
      alt: "Slim profile shutters, minimal routes",
    },
    {
      src: "/images/prosh3.png",
      alt: "Raised profile, classic kitchen style",
    },
    {
      src: "/images/prosh4.png",
      alt: "Deep-profile shutters, traditional look",
    },
    {
      src: "/images/prosh5.png",
      alt: "Contemporary profiled fronts",
    },
    {
      src: "/images/prosh6.png",
      alt: "Fine-profile shutters in muted hues",
    },
  ];

  const PU_LACQUERED: Tile[] = [
    {
      src: "/images/pul1.png",
      alt: "PU lacquered shutters, piano gloss",
    },
    { src: "/images/pul2.png", alt: "Soft-touch PU lacquer, matte" },
    {
      src: "/images/pul3.png",
      alt: "Lacquered fronts with metallic tint",
    },
    {
      src: "/images/pul4.png",
      alt: "PU lacquer with integrated profile",
    },
    { src: "/images/pul5.png", alt: "Durable PU lacquer, deep color" },
    {
      src: "/images/pul6.png",
      alt: "PU lacquered doors, seamless array",
    },
  ];

  const VENEER: Tile[] = [
    {
      src: "/images/vens1.png",
      alt: "Natural veneer shutters, rich grain",
    },
    {
      src: "/images/vens2.png",
      alt: "Chevron veneer pattern, premium",
    },
    {
      src: "/images/vens3.png",
      alt: "Quarter-cut veneer, refined look",
    },
    {
      src: "/images/vens4.png",
      alt: "Dark-stain veneer with brass",
    },
    {
      src: "/images/vens5.png",
      alt: "Light oak veneer, Scandinavian feel",
    },
    { src: "/images/vens6.png", alt: "Book-matched veneer fronts" },
  ];

  return (
    <>
      <TypeBlock id="type-acrylic" title="Acrylic" images={ACRYLIC} />
      <TypeBlock
        id="type-aluminiumFrame"
        title="Aluminium Frame Shutter"
        images={ALUMINIUM_FRAME}
      />
      <TypeBlock
        id="type-fabricCaneRattan"
        title="Fabric cane rattan"
        images={FABRIC_CANe_RATTAN}
      />
      <TypeBlock id="type-glass" title="glass shutters" images={GLASS} />
      <TypeBlock
        id="type-laminate"
        title="Laminate Shutters"
        images={LAMINATE}
      />
      <TypeBlock
        id="type-louvered"
        title="Louvered shutters"
        images={LOUVERED}
      />
      <TypeBlock id="type-profile" title="Profile shutters" images={PROFILE} />
      <TypeBlock
        id="type-puLacquered"
        title="PU Lacquered shutters"
        images={PU_LACQUERED}
      />
      <TypeBlock id="type-veneer" title="Veneer Shutters" images={VENEER} />
    </>
  );
}

function TypeBlock({
  id,
  title,
  images,
}: {
  id: string;
  title: string;
  images: Tile[];
}) {
  return (
    <section id={id} className="relative h-[100svh] w-[100vw]">
      <FullscreenWoodFrame title={title} images={images} />
    </section>
  );
}

/* ---------------------------------------------
 * FullscreenWoodFrame (single textured brown frame)
 * -------------------------------------------*/
function FullscreenWoodFrame({
  title,
  images,
  intervalMs = 5000,
}: {
  title: string;
  images: Tile[];
  intervalMs?: number;
}) {
  const FRAME = "clamp(18px, 3vw, 36px)"; // responsive frame thickness

  return (
    <div
      className="relative h-[100svh] w-[100vw] overflow-hidden"
      style={{
        background: [
          "linear-gradient(135deg, #553318, #2b170a)",
          "repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 2px, rgba(0,0,0,0.08) 2px 4px)",
          "radial-gradient(120% 160% at 0% 0%, rgba(255,255,255,0.06), transparent 55%)",
          "radial-gradient(130% 170% at 100% 100%, rgba(0,0,0,0.35), transparent 55%)",
        ].join(","),
        backgroundBlendMode: "overlay, multiply, normal, normal",
        boxShadow:
          "inset 0 2px 0 rgba(255,255,255,0.12), inset 0 -2px 0 rgba(0,0,0,0.45), 0 40px 120px rgba(0,0,0,0.55)",
        padding: FRAME,
      }}
    >
      {/* Frame sheen / vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ boxShadow: "inset 0 0 60px rgba(0,0,0,0.35)" }}
      />

      {/* Title badge */}
      <div className="absolute top-4 left-6 z-20">
        <span className="px-3 py-1 rounded-full text-xs tracking-wide uppercase text-white/80 bg-white/10 border border-white/20 backdrop-blur-sm">
          {title}
        </span>
      </div>

      {/* Slideshow stage */}
      <div className="relative h-full w-full rounded-[10px] overflow-hidden ring-1 ring-black/20 bg-black/20">
        <SlideshowCore images={images} intervalMs={intervalMs} />
      </div>
    </div>
  );
}

/* ---------------------------------------------
 * SlideshowCore — autoplay, arrows, dots, keyboard, swipe
 * -------------------------------------------*/
function SlideshowCore({
  images,
  intervalMs = 5000,
}: {
  images: Tile[];
  intervalMs?: number;
}) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const next = () => setIdx((i) => (i + 1) % images.length);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const goto = (i: number) => setIdx(i);

  // Autoplay
  useEffect(() => {
    if (!images.length || paused) return;
    timerRef.current = window.setInterval(next, intervalMs);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [images.length, paused, intervalMs]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!images?.length) return null;

  // Swipe
  const onTouchStart = (e: ReactTouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: ReactTouchEvent<HTMLDivElement>) => {
    const start = touchStartX.current;
    if (start == null) return;
    const dx = e.changedTouches[0]?.clientX - start;
    if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {images.map((img, i) => {
          const active = i === idx;
          return (
            <div
              key={img.src + i}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                active ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={!active}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="100vw"
                priority={active}
                className={`object-cover will-change-transform ${
                  active ? "scale-100" : "scale-105"
                }`}
                draggable={false}
              />
              {/* Vignettes */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                <p className="text-white/90 text-sm md:text-base drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                  {img.alt}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 border border-white/20
                   text-white/90 hover:bg-white/20 transition flex items-center justify-center z-10"
      >
        ←
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 border border-white/20
                   text-white/90 hover:bg-white/20 transition flex items-center justify-center z-10"
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={`dot-${i}`}
            onClick={() => goto(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === idx
                ? "w-8 bg-white/90"
                : "w-2.5 bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
