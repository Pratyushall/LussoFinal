"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a1526] text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-blue-200"
          >
            Effective Date: 01.01.2024
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <p className="text-blue-100 leading-relaxed mb-12">
              Lusso ("we," "our," "us") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website. Please read
              this policy carefully. By using our website, you consent to the
              practices described herein.
            </p>

            {/* Section 1 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-sm">
                  1
                </span>
                <h2 className="text-2xl font-bold text-white m-0">
                  Information We Collect
                </h2>
              </div>
              <div className="ml-14">
                <p className="text-blue-100 leading-relaxed mb-4">
                  We may collect the following types of information:
                </p>
                <ul className="space-y-3 text-blue-100">
                  <li>
                    <strong className="text-white">
                      Personal Information:
                    </strong>{" "}
                    Includes your name, email address, phone number, billing
                    address, shipping address, and other information you provide
                    when you register, place an order, or contact us.
                  </li>
                  <li>
                    <strong className="text-white">
                      Non-Personal Information:
                    </strong>{" "}
                    Includes data such as your IP address, browser type,
                    operating system, and browsing behavior, collected
                    automatically through cookies and similar technologies.
                  </li>
                </ul>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-12" />

            {/* Section 2 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-sm">
                  2
                </span>
                <h2 className="text-2xl font-bold text-white m-0">
                  How We Use Your Information
                </h2>
              </div>
              <div className="ml-14">
                <p className="text-blue-100 leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="space-y-2 text-blue-100">
                  <li>
                    To provide, operate, and maintain our website and services.
                  </li>
                  <li>To process transactions and fulfill your orders.</li>
                  <li>
                    To send you administrative information, such as order
                    confirmations and updates.
                  </li>
                  <li>
                    To respond to your inquiries and provide customer support.
                  </li>
                  <li>
                    To personalize your experience and improve our website.
                  </li>
                  <li>
                    To send promotional communications, with your consent.
                  </li>
                  <li>
                    To comply with legal obligations and prevent fraudulent
                    activity.
                  </li>
                </ul>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-12" />

            {/* Section 3 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-sm">
                  3
                </span>
                <h2 className="text-2xl font-bold text-white m-0">
                  Sharing Your Information
                </h2>
              </div>
              <div className="ml-14">
                <p className="text-blue-100 leading-relaxed mb-4">
                  We do not sell or rent your personal information to third
                  parties. However, we may share your information with:
                </p>
                <ul className="space-y-3 text-blue-100">
                  <li>
                    <strong className="text-white">Service Providers:</strong>{" "}
                    Third parties who assist us with operations, such as payment
                    processing, order fulfillment, and website hosting.
                  </li>
                  <li>
                    <strong className="text-white">Legal Requirements:</strong>{" "}
                    When required by law or to protect our legal rights.
                  </li>
                  <li>
                    <strong className="text-white">Business Transfers:</strong>{" "}
                    In connection with a merger, sale, or acquisition of all or
                    part of our business.
                  </li>
                </ul>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-12" />

            {/* Section 4 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-sm">
                  4
                </span>
                <h2 className="text-2xl font-bold text-white m-0">
                  Cookies and Tracking Technologies
                </h2>
              </div>
              <div className="ml-14">
                <p className="text-blue-100 leading-relaxed">
                  We use cookies and similar technologies to enhance your
                  experience on our website. Cookies help us understand how you
                  interact with our site, remember your preferences, and deliver
                  targeted advertisements. You can manage your cookie
                  preferences through your browser settings.
                </p>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-12" />

            {/* Section 5 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-sm">
                  5
                </span>
                <h2 className="text-2xl font-bold text-white m-0">
                  Data Security
                </h2>
              </div>
              <div className="ml-14">
                <p className="text-blue-100 leading-relaxed">
                  We implement reasonable administrative, technical, and
                  physical measures to protect your information from
                  unauthorized access, disclosure, or destruction. However, no
                  security system is foolproof, and we cannot guarantee the
                  absolute security of your data.
                </p>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-12" />

            {/* Section 6 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-sm">
                  6
                </span>
                <h2 className="text-2xl font-bold text-white m-0">
                  Your Rights
                </h2>
              </div>
              <div className="ml-14">
                <p className="text-blue-100 leading-relaxed mb-4">
                  Depending on your jurisdiction, you may have the following
                  rights:
                </p>
                <ul className="space-y-2 text-blue-100">
                  <li>Access, update, or delete your personal information.</li>
                  <li>
                    Withdraw consent for data processing where consent is
                    required.
                  </li>
                  <li>
                    Object to the processing of your data for direct marketing
                    purposes.
                  </li>
                  <li>Lodge a complaint with a data protection authority.</li>
                </ul>
                <p className="text-blue-100 leading-relaxed mt-4">
                  To exercise your rights, please contact us using the
                  information provided below.
                </p>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-12" />

            {/* Section 7 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-sm">
                  7
                </span>
                <h2 className="text-2xl font-bold text-white m-0">
                  Third-Party Links
                </h2>
              </div>
              <div className="ml-14">
                <p className="text-blue-100 leading-relaxed">
                  Our website may contain links to third-party websites. We are
                  not responsible for the privacy practices or content of such
                  sites. We encourage you to review their privacy policies.
                </p>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-12" />

            {/* Section 8 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-sm">
                  8
                </span>
                <h2 className="text-2xl font-bold text-white m-0">
                  Children's Privacy
                </h2>
              </div>
              <div className="ml-14">
                <p className="text-blue-100 leading-relaxed">
                  Our website is not intended for individuals under the age of
                  13. We do not knowingly collect personal information from
                  children. If we learn that we have collected data from a child
                  without parental consent, we will delete it.
                </p>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-12" />

            {/* Section 9 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-sm">
                  9
                </span>
                <h2 className="text-2xl font-bold text-white m-0">
                  Changes to This Privacy Policy
                </h2>
              </div>
              <div className="ml-14">
                <p className="text-blue-100 leading-relaxed">
                  We may update this Privacy Policy from time to time. Any
                  changes will be posted on this page with an updated "Effective
                  Date." Your continued use of our website constitutes
                  acceptance of the revised policy.
                </p>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-12" />

            {/* Section 10 - Contact */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-sm">
                  10
                </span>
                <h2 className="text-2xl font-bold text-white m-0">
                  Contact Us
                </h2>
              </div>
              <div className="ml-14">
                <p className="text-blue-100 leading-relaxed mb-4">
                  If you have any questions or concerns about this Privacy
                  Policy, please contact us:
                </p>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
                  <p className="text-white font-semibold mb-2">Lusso</p>
                  <p className="text-blue-200">info@lussointeriors.in</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
