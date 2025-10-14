"use client";

import { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";

type Pillar = {
  key: "listening" | "design" | "excellence" | "trust";
  title: string;
  img: string;
  hover: string;
  body: string;
  index: string;
};

const PILLARS: Pillar[] = [
  {
    key: "listening",
    title: "Listening",
    img: "/images/ab1.jpg",
    hover: "Your rituals, light, and life.",
    body: "Every home begins with you. We map routines, study light and acoustics, and note the pieces that must stay. Private, judgment-free conversations turn taste into a clear brief—so the design reflects your life, not a template.",
    index: "",
  },
  {
    key: "design",
    title: "Design",
    img: "/images/ab2.jpg",
    hover: "Quiet luxury. Honest materials.",
    body: "We compose timeless lines, warm textures, and layered lighting that shifts from lively to calm. Palettes you can feel—grain, weave, sheen—are balanced with flow and ergonomics. Beauty serves use, every single day.",
    index: "",
  },
  {
    key: "excellence",
    title: "Excellence",
    img: "/images/ab3.jpg",
    hover: "Detail to the millimeter.",
    body: "Quality is our baseline. We specify proven finishes, resolve joinery to the millimeter, and pair with master craftspeople. Samples and mockups remove guesswork so what you approve is exactly what you receive—durable, comfortable, impeccably made.",
    index: "",
  },
  {
    key: "trust",
    title: "Trust",
    img: "/images/ab4.jpg",
    hover: "Clarity, discretion, aftercare.",
    body: "Premium service without drama: transparent scopes, realistic timelines, responsive updates, and full discretion. After handover, we remain available for fine-tuning and care—because a Lusso home should feel exceptional for years.",
    index: "",
  },
];

export default function AboutLussoPillars() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Pillar | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0.8]
  );
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onOpen = (p: Pillar) => {
    setActive(p);
    setOpen(true);
  };

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, scale }}
      className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-[#0a1526] via-[#0d1a2d] to-[#0a1526]"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative text-center px-4 mb-16 md:mb-24"
      >
        <div className="inline-block">
          <p className="text-xs md:text-sm tracking-[0.3em] text-amber-400/60 uppercase mb-4 font-light">
            Our Philosophy
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-white mb-6 tracking-tight">
            About{" "}
            <span className="inline-block relative">
              <span className="text-transparent bg-gradient-to-r from-amber-200 via-amber-300 to-orange-300 bg-clip-text">
                LUSSO
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
          </h2>
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent mx-auto mb-6" />
          <p className="text-sm md:text-base text-white/60 font-light tracking-wide max-w-xl mx-auto leading-relaxed">
            Listening • Design • Excellence • Trust.
          </p>
        </div>
      </motion.div>

      <div className="relative mt-12 md:mt-16 px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-[1600px] mx-auto">
          {PILLARS.map((p, idx) => (
            <motion.button
              key={p.key}
              onClick={() => onOpen(p)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden h-[60vh] sm:h-[65vh] lg:h-[75vh] text-left rounded-lg"
              aria-label={`${p.title}: open details`}
            >
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={p.img || "/placeholder.svg"}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 rounded-lg ring-1 ring-white/10 group-hover:ring-amber-400/40 transition-all duration-500" />
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_60px_rgba(251,191,36,0.1)]" />

              <div className="absolute top-6 right-6 md:top-8 md:right-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                  className="text-amber-400/40 group-hover:text-amber-400/70 text-xs md:text-sm font-light tracking-[0.2em] transition-colors duration-500"
                >
                  {p.index}
                </motion.div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.4 }}
                >
                  <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-serif font-light tracking-wide mb-3 group-hover:text-amber-50 transition-colors duration-500">
                    {p.title}
                  </h3>
                  <p className="text-white/75 group-hover:text-white/90 text-sm md:text-base font-light leading-relaxed mb-4 transition-colors duration-500 line-clamp-2">
                    {p.hover}
                  </p>

                  <div className="flex items-center gap-3">
                    <motion.div
                      className="h-[1px] bg-gradient-to-r from-amber-400/60 to-transparent"
                      initial={{ width: 40 }}
                      whileHover={{ width: 60 }}
                      transition={{ duration: 0.4 }}
                    />
                    <span className="text-amber-400/60 group-hover:text-amber-400 text-xs tracking-wider uppercase transition-colors duration-500">
                      Explore
                    </span>
                  </div>
                </motion.div>
              </div>

              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-white/0 group-hover:border-amber-400/30 transition-all duration-500 rounded-tl-lg" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-white/0 group-hover:border-amber-400/30 transition-all duration-500 rounded-br-lg" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${active.title} details`}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="relative z-10 w-full max-w-6xl"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50 bg-gradient-to-br from-[#0a1526] via-[#0d1a2d] to-[#0a1526]">
                {/* Ambient background effects */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />
                </div>

                <div className="relative grid md:grid-cols-2 gap-0">
                  {/* Left side - Featured Image */}
                  <div className="relative h-[40vh] md:h-[85vh] overflow-hidden">
                    <Image
                      src={active.img || "/placeholder.svg"}
                      alt={active.title}
                      fill
                      className="object-cover"
                      sizes="50vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60" />

                    {/* Decorative image element */}
                    <div className="absolute top-8 left-8">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400/40 shadow-lg shadow-amber-500/20">
                        <Image
                          src={active.img || "/placeholder.svg"}
                          alt=""
                          fill
                          className="object-cover opacity-60 blur-sm scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20" />
                      </div>
                    </div>

                    {/* Decorative corner frame */}
                    <div className="absolute top-6 left-6 w-20 h-20 border-t-2 border-l-2 border-amber-400/20" />
                    <div className="absolute bottom-6 right-6 w-20 h-20 border-b-2 border-r-2 border-amber-400/20" />

                    {/* Elegant pattern overlay */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-amber-400/30 rounded-full" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-amber-400/20 rounded-full" />
                    </div>
                  </div>

                  {/* Right side - Content */}
                  <div className="relative p-8 md:p-12 lg:p-16 flex flex-col justify-center max-h-[45vh] md:max-h-[85vh] overflow-y-auto">
                    {/* Close button */}
                    <button
                      onClick={() => setOpen(false)}
                      className="absolute top-6 right-6 md:top-8 md:right-8 text-white/60 hover:text-white rounded-full border border-white/20 hover:border-white/40 w-10 h-10 flex items-center justify-center transition-all duration-300 hover:bg-white/5 hover:rotate-90"
                      aria-label="Close dialog"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 4L4 12M4 4L12 12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>

                    {/* Label */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="inline-flex items-center gap-3 mb-6"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="text-amber-400/40"
                      >
                        <circle
                          cx="10"
                          cy="10"
                          r="8"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M10 6V10L13 13"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="w-8 h-[1px] bg-amber-400/40" />
                      <span className="text-amber-400/60 text-xs tracking-[0.3em] uppercase font-light">
                        Philosophy
                      </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white tracking-tight mb-4"
                    >
                      {active.title}
                    </motion.h3>

                    {/* Subtitle */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="relative mb-8"
                    >
                      <div className="absolute -left-4 top-0 text-amber-400/20 text-4xl font-serif leading-none">
                        "
                      </div>
                      <p className="text-amber-300/80 text-lg md:text-xl font-light italic leading-relaxed pl-4">
                        {active.hover}
                      </p>
                      <div className="absolute -right-2 bottom-0 text-amber-400/20 text-4xl font-serif leading-none">
                        "
                      </div>
                    </motion.div>

                    {/* Divider */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.25, duration: 0.6 }}
                      className="flex items-center gap-3 mb-8 origin-left"
                    >
                      <div className="h-[1px] w-16 bg-gradient-to-r from-amber-400/60 to-amber-400/30" />
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400/40" />
                      <div className="h-[1px] flex-1 bg-gradient-to-r from-amber-400/30 to-transparent" />
                    </motion.div>

                    {/* Body */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="relative pl-6 border-l-2 border-amber-400/20">
                        <p className="text-white/85 leading-relaxed text-base md:text-lg font-light">
                          {active.body}
                        </p>
                      </div>

                      <div className="relative mt-8 p-6 rounded-lg bg-white/[0.02] border border-white/5">
                        <div className="absolute top-4 left-4">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="text-amber-400/30"
                          >
                            <path
                              d="M10 8C10 5.79086 8.20914 4 6 4C3.79086 4 2 5.79086 2 8C2 10.2091 3.79086 12 6 12C6.55228 12 7 12.4477 7 13V14C7 15.6569 5.65685 17 4 17"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M22 8C22 5.79086 20.2091 4 18 4C15.7909 4 14 5.79086 14 8C14 10.2091 15.7909 12 18 12C18.5523 12 19 12.4477 19 13V14C19 15.6569 17.6569 17 16 17"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                        <p className="text-white/50 text-sm font-light italic leading-relaxed pl-8">
                          Listening. Design. Excellence. Trust. The Lusso way.
                        </p>
                      </div>
                    </motion.div>

                    {/* Bottom meta */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="mt-12 flex items-center gap-4"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-400/40" />
                        <div className="w-1 h-1 rounded-full bg-amber-400/30" />
                      </div>
                      <div className="h-[1px] flex-1 bg-gradient-to-r from-amber-400/20 to-transparent" />
                      <span className="text-white/30 text-xs tracking-wider uppercase font-light">
                        {active.key}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
