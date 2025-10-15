"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutLussoPage() {
  return (
    <div style={{ backgroundColor: "#0a1526" }} className="min-h-screen">
      <AboutHero />
      <OurStorySection />
      <FounderSection />
    </div>
  );
}

function AboutHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden flex items-center justify-center pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-8xl font-thin text-white mb-8 tracking-tight"
            animate={{
              textShadow: [
                "0 0 30px rgba(255,255,255,0.1)",
                "0 0 60px rgba(255,255,255,0.2)",
                "0 0 30px rgba(255,255,255,0.1)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            About{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(
      to right,
      rgba(213, 175, 46, 0.9),   /* lighter gold */
      rgba(213, 175, 46, 1),     /* base gold */
      rgba(150, 120, 30, 1)      /* deeper gold */
    )`,
              }}
            >
              LUSSO
            </span>
          </motion.h1>

          <motion.div
            className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          <motion.p
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Where luxury meets innovation, and dreams become reality. Discover
            the story behind our passion for creating extraordinary spaces.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function OurStorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl font-light text-white mb-8">Our Story</h2>
            <div className="space-y-6 text-white/80 leading-relaxed">
              <p>
                Lusso, powered by Simplify Home was founded in 2015, LUSSO began
                as a vision to redefine luxury interior design. Our journey
                started with a simple belief: every space has the potential to
                become extraordinary.
              </p>
              <p>
                Over the years, we've transformed hundreds of homes, offices,
                and commercial spaces, each project reflecting our commitment to
                excellence, innovation, and timeless elegance.
              </p>
              <p>
                Today, LUSSO stands as a testament to the power of visionary
                design, bringing together the world's finest materials,
                cutting-edge technology, and unparalleled craftsmanship.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="/images/storry.jpg"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FounderSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="py-40 relative overflow-hidden">
      {/* Animated Luxury Background Elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-[600px] h-[600px] bg-gradient-to-br from-amber-500/5 via-pink-500/5 to-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 90, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-amber-400/5 to-pink-400/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-6xl font-thin text-white mb-6 tracking-wide"
            animate={{
              textShadow: [
                "0 0 20px rgba(213, 175, 46, 0.1)",
                "0 0 40px rgba(213, 175, 46, 0.3)",
                "0 0 20px rgba(213, 175, 46, 0.1)",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            The Visionary
          </motion.h2>
          <motion.div
            className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
          />
        </motion.div>

        {/* Founder Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          {/* Founder Image with Fancy Frame */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -100, rotateY: -15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            {/* Decorative Corner Elements */}
            <motion.div
              className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-amber-400/50"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-amber-400/50"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            />

            {/* Main Image Container */}
            <motion.div
              className="relative aspect-[3/4] rounded-3xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1526] via-transparent to-transparent z-10 opacity-60" />

              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 z-20"
                style={{
                  background: `linear-gradient(90deg, 
                    transparent 0%, 
                    rgba(213, 175, 46, 0.5) 50%, 
                    transparent 100%)`,
                }}
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  repeatDelay: 5,
                }}
              />

              <img
                src="/images/sairaj.jpg"
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Founder Text Content */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            {/* Name and Title */}
            <div>
              <motion.h3
                className="text-5xl font-light text-white mb-3 tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Sairaj{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  Kondabathini
                </span>
              </motion.h3>
              <motion.p
                className="text-xl text-amber-400/90 font-light tracking-widest uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Managing Director
              </motion.p>
            </div>

            {/* Decorative Divider */}
            <motion.div
              className="w-20 h-px bg-gradient-to-r from-amber-400 to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 1 }}
            />

            {/* Biography */}
            <motion.div
              className="space-y-6 text-white/80 leading-relaxed text-lg"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <p className="text-pretty">
                With over 10 years of experience, Sairaj leads the Modular
                Product Solutions division at Simplify Home, driving growth
                through smart design, material R&D, and sales strategy.
              </p>
              <p className="text-pretty">
                Starting his career in sales and finance, and gaining global
                exposure in the UAE, he returned to India with a clear mission —
                to build high-quality, customer-focused modular solutions.
              </p>
              <p className="text-pretty">
                His vision is to launch a brand that sets new standards in
                modular interiors, combining lasting quality with seamless
                experiences. Sairaj believes in growing together and leading
                with integrity, clarity, and a mindset of constant improvement.
              </p>
            </motion.div>

            {/* Signature */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <div className="text-4xl font-light text-amber-400/60 italic">
                Sairaj Kondabathini
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
