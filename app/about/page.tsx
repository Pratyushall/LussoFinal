"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/footer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function AboutLussoPage() {
  return (
    <div
      style={{ backgroundColor: "#0a1526" }}
      className="min-h-screen relative"
    >
      <TopRightMenu />
      <AboutHero />
      <OurStorySection />
      <TeamSection />
      <Footer />
    </div>
  );
}

function TopRightMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-5 right-5 z-[80]">
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative px-4 py-2 rounded-full border border-white/20 text-white/90 backdrop-blur-sm
                   bg-white/5 hover:bg-white/10 transition"
        aria-label="Open menu"
      >
        <span className="inline-flex items-center gap-2">
          <span aria-hidden>☰</span>
        </span>
      </button>

      {open && (
        <nav className="mt-2 w-56 rounded-2xl overflow-hidden border border-white/15 bg-[#0a1526]/95 backdrop-blur-md shadow-xl">
          {[
            {
              label: "Home",
              href: "/",
            },
            { label: "Products", href: "/products" },
            { label: "About", href: "/about" },
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

function AboutHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden flex items-center justify-center pt-20"
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
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
            <span className="text-transparent bg-gradient-to-r from-amber-400 via-amber-600 to-amber-800 bg-clip-text">
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
                Founded in 2008, LUSSO began as a vision to redefine luxury
                interior design. Our journey started with a simple belief: every
                space has the potential to become extraordinary.
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
                src="/images/abt1.png"
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

function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [selectedMember, setSelectedMember] = useState<(typeof team)[0] | null>(
    null
  );

  const team = [
    {
      name: "Pranav Kondabathini",
      title: "Founder & Creative Director",
      image: "/images/prnv.jpg",
      description:
        "With over 15 years of experience in luxury interior design, Pranav founded LUSSO with a vision to create spaces that transcend ordinary living. His innovative approach combines classical elegance with contemporary aesthetics, earning him recognition across the industry.",
    },
    {
      name: "Shiva Pranav",
      title: "Head of Design",
      image: "/images/prnv.jpg",
      description:
        "Shiva leads our design team with a keen eye for detail and a passion for sustainable luxury. Her portfolio includes award-winning residential and commercial projects that seamlessly blend functionality with artistic expression.",
    },
    {
      name: "Pranav Kumar",
      title: "Project Director",
      image: "/images/prnv.jpg",
      description:
        "As Project Director, Pranav ensures every LUSSO project is executed flawlessly from concept to completion. His expertise in project management and client relations has been instrumental in delivering exceptional results on time and within budget.",
    },
    {
      name: "Ananya Sharma",
      title: "Senior Interior Architect",
      image: "/images/prnv.jpg",
      description:
        "Ananya brings a unique perspective to spatial design, specializing in creating harmonious environments that reflect each client's personality. Her architectural background enables her to transform challenging spaces into stunning masterpieces.",
    },
    {
      name: "Rohan Mehta",
      title: "Materials & Finishes Specialist",
      image: "/images/prnv.jpg",
      description:
        "Rohan's extensive knowledge of luxury materials and finishes ensures that every LUSSO project features the finest quality elements. He travels globally to source exclusive materials that add distinctive character to our designs.",
    },
    {
      name: "Priya Desai",
      title: "Lighting Design Consultant",
      image: "/images/prnv.jpg",
      description:
        "Priya's expertise in lighting design transforms spaces through carefully curated illumination schemes. She believes that lighting is the soul of interior design, and her work creates ambiance that enhances every architectural detail.",
    },
    {
      name: "Arjun Patel",
      title: "3D Visualization Lead",
      image: "/images/prnv.jpg",
      description:
        "Arjun heads our visualization team, bringing designs to life through photorealistic renderings. His technical prowess and artistic vision help clients visualize their dream spaces before construction begins.",
    },
    {
      name: "Kavya Reddy",
      title: "Client Relations Manager",
      image: "/images/prnv.jpg",
      description:
        "Kavya ensures that every client's journey with LUSSO is seamless and enjoyable. Her dedication to understanding client needs and maintaining clear communication has built lasting relationships and trust.",
    },
    {
      name: "Vikram Singh",
      title: "Furniture & Decor Curator",
      image: "/images/prnv.jpg",
      description:
        "Vikram curates bespoke furniture and decor pieces that complement our interior designs perfectly. His connections with artisans and luxury brands worldwide enable him to source unique pieces that make each project truly one-of-a-kind.",
    },
    {
      name: "Neha Kapoor",
      title: "Sustainability Advisor",
      image: "/images/prnv.jpg",
      description:
        "Neha champions sustainable luxury at LUSSO, integrating eco-friendly practices without compromising on elegance. Her innovative approach to green design has positioned LUSSO as a leader in environmentally conscious luxury interiors.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-light text-white mb-6">Our Team</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-amber-400/40 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-amber-500/10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1526]/90 via-[#0a1526]/20 to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full border-2 border-amber-400/80 bg-amber-400/10 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-amber-400 text-xl">+</span>
                    </div>
                  </div>
                </div>

                <div className="relative p-4 text-center">
                  <h3 className="text-sm font-light text-white mb-1 tracking-wide leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs text-amber-400/80 font-light tracking-wider uppercase leading-tight">
                    {member.title}
                  </p>
                </div>

                <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-amber-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <Dialog
          open={!!selectedMember}
          onOpenChange={() => setSelectedMember(null)}
        >
          <DialogContent className="max-w-2xl bg-[#0a1526] border-white/20 text-white">
            {selectedMember && (
              <div className="space-y-6">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-light text-white">
                    {selectedMember.name}
                  </DialogTitle>
                  <p className="text-amber-400 text-sm uppercase tracking-wider font-light">
                    {selectedMember.title}
                  </p>
                </DialogHeader>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative aspect-square rounded-xl overflow-hidden border border-white/10">
                    <img
                      src={selectedMember.image || "/placeholder.svg"}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="w-16 h-px bg-gradient-to-r from-amber-400 to-transparent mb-4" />
                    <p className="text-white/80 leading-relaxed">
                      {selectedMember.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
