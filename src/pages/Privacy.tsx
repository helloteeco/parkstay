import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 md:py-20">
        <div className="container max-w-3xl">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-[#2b2823] mb-2">Privacy Policy</h1>
          <p className="text-sm text-[#787060] mb-10">Last updated: April 6, 2026</p>

          <div className="prose prose-sm max-w-none text-[#2b2823] space-y-8">
            <section>
              <h2 className="font-serif text-xl font-semibold text-[#2b2823] mb-3">1. Information We Collect</h2>
              <p className="text-[#4a4640] leading-relaxed mb-3">
                ParkStay, operated by Teeco LLC, collects the following types of information:
              </p>
              <ul className="list-disc pl-6 text-[#4a4640] space-y-2 leading-relaxed">
                <li><strong>Account information:</strong> Name, email address, and login credentials when you create an account.</li>
                <li><strong>Host information:</strong> Property location (city, state), nearest national park, number of properties, and current platform usage.</li>
                <li><strong>Guest information:</strong> Search preferences, selected parks, travel dates, and guest count.</li>
                <li><strong>Technical information:</strong> IP address, device type, browser type, operating system, and referring URLs.</li>
                <li><strong>Cookies:</strong> We use cookies and similar technologies to improve your experience. See Section 6 below.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[#2b2823] mb-3">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-[#4a4640] space-y-2 leading-relaxed">
                <li>To operate and manage the waitlist and notify you when ParkStay launches in your area.</li>
                <li>To communicate with you about ParkStay updates, features, and services.</li>
                <li>To improve the platform, analyze usage patterns, and develop new features.</li>
                <li>To process bookings and payments when the booking engine launches.</li>
                <li>To comply with legal obligations and enforce our Terms of Service.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[#2b2823] mb-3">3. Third-Party Services</h2>
              <p className="text-[#4a4640] leading-relaxed">
                We may share limited information with the following categories of third-party service providers:
              </p>
              <ul className="list-disc pl-6 text-[#4a4640] space-y-2 leading-relaxed mt-3">
                <li><strong>Hosting provider:</strong> For storing and serving the platform.</li>
                <li><strong>Analytics:</strong> To understand how users interact with the platform (e.g., page views, feature usage).</li>
                <li><strong>Payment processor:</strong> Stripe (when booking functionality launches) for processing payments securely.</li>
                <li><strong>Email service:</strong> For sending waitlist notifications and platform updates.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[#2b2823] mb-3">4. We Do Not Sell Your Data</h2>
              <p className="text-[#4a4640] leading-relaxed">
                ParkStay does not sell, rent, or trade your personal information to third parties for their marketing purposes. We only share data with service providers who help us operate the platform, and only to the extent necessary for them to perform their services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[#2b2823] mb-3">5. California Residents (CCPA)</h2>
              <p className="text-[#4a4640] leading-relaxed mb-3">
                If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-6 text-[#4a4640] space-y-2 leading-relaxed">
                <li><strong>Right to know:</strong> You can request information about the categories and specific pieces of personal information we have collected about you.</li>
                <li><strong>Right to delete:</strong> You can request that we delete your personal information, subject to certain exceptions.</li>
                <li><strong>Right to opt out:</strong> You can opt out of the sale of your personal information. Note: ParkStay does not sell personal information.</li>
                <li><strong>Right to non-discrimination:</strong> We will not discriminate against you for exercising your CCPA rights.</li>
              </ul>
              <p className="text-[#4a4640] leading-relaxed mt-3">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:hello@teeco.co" className="text-[#3d5a3e] underline">hello@teeco.co</a>.
                We will respond to verifiable requests within 45 days.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[#2b2823] mb-3">6. Cookies</h2>
              <p className="text-[#4a4640] leading-relaxed mb-3">
                ParkStay uses cookies and similar technologies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-[#4a4640] space-y-2 leading-relaxed">
                <li><strong>Essential cookies:</strong> Required for the platform to function (e.g., session management, cookie consent preferences).</li>
                <li><strong>Analytics cookies:</strong> Help us understand how users interact with the platform. These are only loaded if you accept non-essential cookies.</li>
              </ul>
              <p className="text-[#4a4640] leading-relaxed mt-3">
                You can manage your cookie preferences at any time through the cookie consent banner or by adjusting your browser settings.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[#2b2823] mb-3">7. Data Security</h2>
              <p className="text-[#4a4640] leading-relaxed">
                We use TLS (Transport Layer Security) encryption for all data transmitted between your browser and our servers. We implement reasonable administrative, technical, and physical safeguards to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[#2b2823] mb-3">8. Data Retention</h2>
              <p className="text-[#4a4640] leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required by law. Waitlist data will be retained until the platform launches and you either create an account or request deletion.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[#2b2823] mb-3">9. Changes to This Policy</h2>
              <p className="text-[#4a4640] leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on the platform with a revised "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[#2b2823] mb-3">10. Contact</h2>
              <p className="text-[#4a4640] leading-relaxed">
                For questions about this Privacy Policy or to exercise your data rights, please contact us at{' '}
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
