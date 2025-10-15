export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a1526] text-white">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold">Lusso</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-12">
          {/* Title Section */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">
              Terms & Conditions
            </h1>
            <p className="text-lg text-white/60">Effective Date: 01.01.2024</p>
            <p className="text-white/80 leading-relaxed">
              Welcome to Lusso! By accessing or using our website, you agree to
              comply with and be bound by the following terms and conditions.
              Please read them carefully.
            </p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-10">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
              <p className="text-white/80 leading-relaxed">
                By using our website, you agree to these Terms and Conditions
                and any applicable laws and regulations. If you disagree, please
                refrain from using the site.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold">2. Changes to Terms</h2>
              <p className="text-white/80 leading-relaxed">
                Lusso reserves the right to update or modify these Terms at any
                time without prior notice. Your continued use of the website
                constitutes acceptance of the revised terms.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold">3. Use of the Website</h2>
              <ul className="space-y-2 text-white/80 leading-relaxed list-disc list-inside">
                <li>You must be at least 18 years old to use this website.</li>
                <li>
                  You agree to use the website only for lawful purposes and in a
                  way that does not infringe the rights of others or restrict
                  their use and enjoyment.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold">
                4. Intellectual Property
              </h2>
              <p className="text-white/80 leading-relaxed">
                All content on this website, including text, images, logos, and
                designs, is the property of Lusso unless otherwise stated.
                Unauthorized use, reproduction, or distribution is prohibited.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold">5. User Accounts</h2>
              <p className="text-white/80 leading-relaxed">
                If you create an account on our website:
              </p>
              <ul className="space-y-2 text-white/80 leading-relaxed list-disc list-inside">
                <li>
                  You are responsible for maintaining the confidentiality of
                  your account and password.
                </li>
                <li>
                  You agree to notify us immediately of any unauthorized use.
                </li>
                <li>
                  Lusso is not liable for any loss or damage arising from your
                  failure to comply with this obligation.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold">6. Privacy Policy</h2>
              <p className="text-white/80 leading-relaxed">
                Your use of our website is also governed by our Privacy Policy,
                which explains how we collect, use, and protect your personal
                information.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold">
                7. Product and Service Descriptions
              </h2>
              <p className="text-white/80 leading-relaxed">
                We strive to ensure accuracy in product and service
                descriptions. However, we do not guarantee that descriptions or
                other content are error-free, complete, or current. Prices and
                availability are subject to change without notice.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold">
                8. Limitation of Liability
              </h2>
              <p className="text-white/80 leading-relaxed">
                Lusso is not liable for any direct, indirect, incidental,
                consequential, or punitive damages arising from your use of the
                website or services.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold">
                9. Links to Third-Party Websites
              </h2>
              <p className="text-white/80 leading-relaxed">
                Our website may contain links to third-party sites. Lusso is not
                responsible for the content, accuracy, or practices of such
                sites. Accessing third-party sites is at your own risk.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold">10. Termination</h2>
              <p className="text-white/80 leading-relaxed">
                We reserve the right to terminate or suspend your access to the
                website at our sole discretion, without notice, for conduct that
                violates these Terms or is otherwise harmful to our interests.
              </p>
            </section>

            {/* Section 11 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold">11. Governing Law</h2>
              <p className="text-white/80 leading-relaxed">
                These Terms are governed by the laws of Hyderabad, Telangana.
                Any disputes arising under these Terms shall be resolved
                exclusively in the courts of Hyderabad, Telangana.
              </p>
            </section>

            {/* Section 12 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold">12. Contact Us</h2>
              <p className="text-white/80 leading-relaxed">
                If you have any questions about these Terms and Conditions,
                please contact us at:
              </p>
              <div className="text-white/80 leading-relaxed">
                <p className="font-semibold">Lusso</p>
                <a
                  href="mailto:info@lussointeriors.in"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  info@lussointeriors.in
                </a>
              </div>
            </section>

            {/* Section 13 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold">13. Refund Policy</h2>
              <p className="text-white/80 leading-relaxed">
                All payments made to Lusso are non-refundable. Once a payment is
                completed, no refunds will be issued under any circumstances.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 mt-20">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-white/60 text-sm">
            © {new Date().getFullYear()} Lusso. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
