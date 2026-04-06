import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 md:py-20">
        <div className="container max-w-3xl">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-[#2b2823] mb-2">Terms of Service</h1>
          <p className="text-sm text-[#787060] mb-10">Last updated: April 6, 2026</p>

          <div className="prose prose-sm max-w-none text-[#2b2823] space-y-8">
            <section>
              <h2 className="font-serif text-xl font-semibold text-[#2b2823] mb-3">1. Platform Overview</h2>
              <p className="text-[#4a4640] leading-relaxed">
                ParkStay ("ParkStay," "we," "us," or "our") is a technology platform operated by Teeco LLC that connects property owners ("Hosts") with travelers ("Guests") seeking vacation rental accommodations near national parks, monuments, forests, and other public lands. ParkStay does not own, manage, inspect, or control any listed properties. We provide a marketplace for Hosts and Guests to connect.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[#2b2823] mb-3">2. Host Responsibilities</h2>
              <p className="text-[#4a4640] leading-relaxed">
                Hosts are independent operators, not employees, contractors, or agents of ParkStay. Hosts are solely responsible for the accuracy of their listings, the condition and safety of their properties, compliance with all applicable local, state, and federal laws (including zoning, short-term rental regulations, tax obligations, and safety codes), and the fulfillment of bookings made through the platform.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[#2b2823] mb-3">3. Limitation of Liability</h2>
              <p className="text-[#4a4640] leading-relaxed">
                ParkStay is not liable for the condition, safety, legality, or suitability of any property listed on the platform. To the maximum extent permitted by law, ParkStay's total liability to any user for any claims arising out of or related to the use of the platform shall not exceed the total fees paid by that user to ParkStay in the twelve (12) months preceding the claim. ParkStay is not responsible for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of the platform.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[#2b2823] mb-3">4. User Obligations</h2>
              <p className="text-[#4a4640] leading-relaxed">
                Users agree to provide accurate, current, and complete information when using ParkStay, including during registration, listing creation, and booking. Users shall not use the platform for any unlawful purpose or in any way that could damage, disable, or impair the platform. ParkStay reserves the right to remove content, suspend, or terminate user accounts at its sole discretion, with or without notice.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[#2b2823] mb-3">5. Fees</h2>
              <p className="text-[#4a4640] leading-relaxed">
                ParkStay charges a platform fee on completed bookings. Current fee structures are displayed on the platform and may be updated from time to time. Standard payment processing fees (charged by the payment processor, not ParkStay) apply separately. Users will be notified of any material changes to the fee structure.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[#2b2823] mb-3">6. Indemnification</h2>
              <p className="text-[#4a4640] leading-relaxed">
                Users agree to indemnify, defend, and hold harmless ParkStay, Teeco LLC, and their officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or related to the user's use of the platform, violation of these Terms, or infringement of any third-party rights.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[#2b2823] mb-3">7. Content and Intellectual Property</h2>
              <p className="text-[#4a4640] leading-relaxed">
                Users retain ownership of content they submit to ParkStay but grant ParkStay a non-exclusive, worldwide, royalty-free license to use, display, and distribute such content in connection with the platform. Hosts represent and warrant that they have the right to all content they upload, including any content imported from other platforms.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[#2b2823] mb-3">8. External Links</h2>
              <p className="text-[#4a4640] leading-relaxed">
                ParkStay may contain links to third-party websites or services that are not owned or controlled by ParkStay. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that ParkStay shall not be responsible or liable for any damage or loss caused by the use of any such third-party content, goods, or services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[#2b2823] mb-3">9. Modifications</h2>
              <p className="text-[#4a4640] leading-relaxed">
                ParkStay reserves the right to modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on the platform with a revised "Last updated" date. Continued use of the platform after such changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[#2b2823] mb-3">10. Governing Law</h2>
              <p className="text-[#4a4640] leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the state or federal courts located in the State of California.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[#2b2823] mb-3">11. Contact</h2>
              <p className="text-[#4a4640] leading-relaxed">
                For questions about these Terms, please contact us at{' '}
                <a href="mailto:hello@teeco.co" className="text-[#3d5a3e] underline">hello@teeco.co</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
