"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRouter } from "next/navigation";

export default function JourneySection() {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const voidScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      return () => section.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const journeySteps = [
    {
      number: "01",
      title: "Let's Connect",
      description:
        "Fill out a quick form or give us a call — tell us about your dream kitchen or wardrobe.",
      icon: "",
      color: "from-amber-500 to-orange-500",
      voidColor: "rgba(59, 130, 246, 0.3)",
    },
    {
      number: "02",
      title: "Design Consultation",
      description:
        "Our experts get in touch to understand your space, style, and budget. We co-create the perfect design, just for you.",
      icon: "",
      color: "from-amber-500 to-orange-500",
      voidColor: "rgba(147, 51, 234, 0.3)",
    },
    {
      number: "03",
      title: "Experience It Live",
      description:
        "Visit our Experience Center to explore materials, finishes, and modular layouts in person.",
      icon: "",
      color: "from-amber-500 to-orange-500",
      voidColor: "rgba(16, 185, 129, 0.3)",
    },
    {
      number: "04",
      title: "Final Touches & Quote",
      description:
        "We finalize the design, share a transparent quote, and lock in timelines.",
      icon: "",
      color: "from-amber-500 to-orange-500",
      voidColor: "rgba(245, 158, 11, 0.3)",
    },
    {
      number: "05",
      title: "Installation Begins",
      description:
        "Sit back and relax — our team handles delivery and installation with care and precision.",
      icon: "",
      color: "from-amber-500 to-orange-500",
      voidColor: "rgba(239, 68, 68, 0.3)",
    },
    {
      number: "06",
      title: "Aftercare & Support",
      description:
        "Even after the work is done, we're just a call away for maintenance or upgrades.",
      icon: "",
      color: "from-amber-500 to-amber-500",
      voidColor: "rgba(99, 102, 241, 0.3)",
    },
  ];

  const handleStepClick = (index: number) => setOpenModal(index);
  const closeModal = () => setOpenModal(null);

  const renderModalContent = (stepIndex: number) => {
    const step = journeySteps[stepIndex];

    switch (stepIndex) {
      case 0: // Let's Connect - Contact Form
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-light text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-white/70">
                Tell us about your dream project and we'll get back to you
                within 24 hours.
              </p>
            </div>

            {/* This form is illustrative; CTA routes to /contact */}
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                router.push("/contact");
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 text-sm font-light mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-light mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/80 text-sm font-light mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-light mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300"
                  placeholder="9192457683"
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-light mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 bg-[#1f2737] text-white border border-white/20 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all duration-300">
                  <option value="">Select your project type</option>
                  <option value="kitchen">Kitchen Design</option>
                  <option value="wardrobe">Wardrobe Design</option>
                  <option value="shutters">Window Shutters</option>
                  <option value="partitions">Room Partitions</option>
                  <option value="complete">Complete Home Interior</option>
                </select>
              </div>

              <div>
                <label className="block text-white/80 text-sm font-light mb-2">
                  Budget Range
                </label>
                <select className="w-full px-4 py-3 bg-[#1f2737] text-white border border-white/20 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all duration-300">
                  <option value="">Select your budget range</option>
                  <option value="50k-100k">Rs.50,000 - Rs.100,000</option>
                  <option value="100k-250k">Rs.100,000 - Rs.250,000</option>
                  <option value="250k-500k">Rs.250,000 - Rs.500,000</option>
                  <option value="500k+">Rs.500,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-white/80 text-sm font-light mb-2">
                  Tell us about your dream project
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300 resize-none"
                  placeholder="Describe your vision, style preferences, timeline, and any specific requirements..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-800 text-white rounded-xl font-light tracking-wide hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        );

      case 1: // Design Consultation
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-light text-white mb-4">
                Design Consultation Process
              </h3>
              <p className="text-white/70">
                Our comprehensive consultation ensures every detail is perfect.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* ...content unchanged... */}
            </div>

            <div className="text-center pt-6">
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-xl font-light tracking-wide"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/contact")}
              >
                Schedule Consultation
              </motion.button>
            </div>
          </div>
        );

      case 2: // Experience It Live
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-light text-white mb-4">
                Experience Center
              </h3>
              <p className="text-white/70">
                Visit our state-of-the-art showroom and touch, feel, and
                experience luxury.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* ...content unchanged... */}
            </div>

            <div className="text-center pt-6">
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-white rounded-xl font-light tracking-wide"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/contact")}
              >
                Book Experience Center Visit
              </motion.button>
            </div>
          </div>
        );

      case 3: // Final Touches & Quote
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-light text-white mb-4">
                Final Touches & Quote
              </h3>
              <p className="text-white/70">
                Transparent pricing with detailed breakdown and timeline
                confirmation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* ...content unchanged... */}
            </div>

            <div className="text-center pt-6">
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-light tracking-wide"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/contact")}
              >
                Request Detailed Quote
              </motion.button>
            </div>
          </div>
        );

      case 4: // Installation Begins
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-light text-white mb-4">
                Installation Process
              </h3>
              <p className="text-white/70">
                Our expert team ensures flawless installation with minimal
                disruption.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* ...content unchanged... */}
            </div>

            <div className="text-center pt-6">
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-light tracking-wide"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/contact")}
              >
                Track Installation Progress
              </motion.button>
            </div>
          </div>
        );

      case 5: // Aftercare & Support
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-light text-white mb-4">
                Aftercare & Support
              </h3>
              <p className="text-white/70">
                Lifetime relationship with comprehensive support and maintenance
                services.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* ...content unchanged... */}
            </div>

            <div className="text-center pt-6">
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-xl font-light tracking-wide"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/contact")}
              >
                Contact Support Team
              </motion.button>
            </div>
          </div>
        );

      default:
        return <div>Content not available</div>;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: "#0a1526" }}
    >
      {/* background/void effects unchanged ... */}

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* header unchanged ... */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer relative"
              initial={{ opacity: 0, y: 60, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              onHoverStart={() => setActiveStep(index)}
              onHoverEnd={() => setActiveStep(null)}
              onClick={() => handleStepClick(index)}
              style={{ perspective: "1000px" }}
            >
              {/* card content unchanged ... */}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {openModal !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh] bg-slate-800/90 backdrop-blur-md rounded-3xl border border-white/20 overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-slate-800/95 backdrop-blur-md border-b border-white/10 p-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <motion.div
                    className={`w-10 h-10 rounded-full bg-gradient-to-r ${journeySteps[openModal].color} flex items-center justify-center text-white text-sm font-light`}
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    {journeySteps[openModal].number}
                  </motion.div>
                  <div>
                    <h2 className="text-2xl font-light text-white">
                      {journeySteps[openModal].title}
                    </h2>
                    <p className="text-white/60 text-sm">
                      Step {Number.parseInt(journeySteps[openModal].number)} of
                      6
                    </p>
                  </div>
                </div>
                <motion.button
                  onClick={closeModal}
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>
              </div>

              <div className="overflow-y-auto max-h-[calc(90vh-100px)] p-8">
                {renderModalContent(openModal)}
              </div>

              <motion.div
                className={`absolute inset-0 rounded-3xl border-2 bg-gradient-to-r ${journeySteps[openModal].color} opacity-20 pointer-events-none`}
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
