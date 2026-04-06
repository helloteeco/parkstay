import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DoNotSell() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 md:py-20">
        <div className="container max-w-3xl">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-[#2b2823] mb-2">
            Do Not Sell or Share My Personal Information
          </h1>
          <p className="text-sm text-[#787060] mb-10">Last updated: April 6, 2026</p>

          <div className="prose prose-sm max-w-none space-y-6">
            <p className="text-[#4a4640] leading-relaxed text-base">
              ParkStay, operated by Teeco LLC, does not sell or share your personal information with third parties for their marketing purposes. This has been our practice since the platform's inception, and we are committed to maintaining it.
            </p>

            <p className="text-[#4a4640] leading-relaxed text-base">
              Under the California Consumer Privacy Act (CCPA), California residents have the right to opt out of the "sale" or "sharing" of their personal information. Because ParkStay does not engage in the sale or sharing of personal information as defined by the CCPA, there is no sale or sharing to opt out of.
            </p>

            <div className="bg-[#f5f4f0] rounded-xl p-6 border border-[#e5e3da]">
              <h2 className="font-serif text-lg font-semibold text-[#2b2823] mb-3">Your Data Rights</h2>
              <p className="text-[#4a4640] leading-relaxed mb-4">
                Regardless of your location, you may contact us at any time to:
              </p>
              <ul className="list-disc pl-6 text-[#4a4640] space-y-2 leading-relaxed">
                <li>Request a copy of the personal information we hold about you</li>
                <li>Request deletion of your personal information</li>
                <li>Ask questions about our data practices</li>
                <li>Update or correct your personal information</li>
              </ul>
            </div>

            <p className="text-[#4a4640] leading-relaxed text-base">
              To submit a data request, please email us at{' '}
              <a href="mailto:hello@teeco.co" className="text-[#3d5a3e] underline">hello@teeco.co</a>{' '}
              with the subject line "Data Request." We will respond to verifiable requests within 45 days.
            </p>

            <p className="text-[#4a4640] leading-relaxed text-base">
              For more information about how we collect, use, and protect your data, please review our{' '}
              <a href="/privacy" className="text-[#3d5a3e] underline">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
