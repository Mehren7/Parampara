import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Parampara — how we collect, use and protect your data.",
};

const sections = [
  {
    id: "information-collected",
    title: "Information We Collect",
    icon: "📋",
    content:
      "We collect information you provide directly: name, email address, and profile details when you register. We also collect usage data such as pages visited, session bookings made, and interactions with instructor profiles. Payment information is handled entirely by our third-party payment processors (Razorpay/Stripe) and is never stored on our servers.",
  },
  {
    id: "how-we-use",
    title: "How We Use Your Data",
    icon: "⚙️",
    content:
      "We use your data to provide and improve the Parampara platform, process session bookings, send booking confirmations and reminders, display your profile to relevant instructors or learners, and improve our recommendation algorithms. We do not use your data for advertising purposes.",
  },
  {
    id: "data-sharing",
    title: "Data Sharing",
    icon: "🤝",
    content:
      "We do not sell your personal data to third parties. We share data only with: instructors when you book their session (name and contact for coordination), payment processors to complete transactions, and service providers who help us operate the platform under strict confidentiality agreements.",
  },
  {
    id: "cookies",
    title: "Cookies",
    icon: "🍪",
    content:
      "Parampara uses essential cookies to keep you logged in and remember your preferences. We may use analytics cookies to understand how users navigate the platform and improve the experience. You can disable cookies in your browser settings, though some platform features may not work correctly without them.",
  },
  {
    id: "your-rights",
    title: "Your Rights",
    icon: "✊",
    content:
      "You have the right to access the personal data we hold about you, request correction of inaccurate data, request deletion of your account and associated data, withdraw consent for data processing at any time, and lodge a complaint with a data protection authority. To exercise these rights, contact us via GitHub.",
  },
  {
    id: "data-security",
    title: "Data Security",
    icon: "🛡️",
    content:
      "We implement industry-standard security measures to protect your data including HTTPS encryption for all data in transit, secure password hashing, and regular security audits. However, no system is 100% secure and we encourage you to use a strong, unique password for your Parampara account.",
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    icon: "👶",
    content:
      "Parampara is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately and we will delete it promptly.",
  },
  {
    id: "policy-changes",
    title: "Changes to This Policy",
    icon: "🔄",
    content:
      "We may update this Privacy Policy from time to time. When we do, we will update the 'Last updated' date at the top of this page. We encourage you to review this page periodically. Continued use of Parampara after any changes constitutes acceptance of the updated policy.",
  },
  {
    id: "contact",
    title: "Contact Us",
    icon: "💬",
    content:
      "If you have questions about this Privacy Policy or how we handle your data, please reach out via our GitHub repository. We are committed to addressing privacy concerns transparently and promptly.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      {/* Hero */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6 text-sm text-slate-500">
          <Link href="/" className="hover:text-violet-700 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">Privacy Policy</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <p className="inline-flex rounded-full bg-violet-50 px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-violet-700 mb-4">
              Legal
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl mb-3">
              Privacy Policy
            </h1>
            <p className="text-slate-600">
              Last updated: <strong>April 2026</strong> · Effective immediately
            </p>
          </div>
          <Link
            href="/terms"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50 whitespace-nowrap"
          >
            View Terms of Service →
          </Link>
        </div>
      </section>

      {/* Intro Banner */}
      <section className="mb-12">
        <div className="rounded-[2rem] bg-violet-900 px-8 py-10 text-white shadow-2xl shadow-violet-600/20">
          <div className="flex gap-4 items-start">
            <span className="text-3xl shrink-0">🔒</span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-300 mb-2">
                Your Privacy Matters
              </p>
              <p className="text-lg leading-8 text-violet-200 max-w-3xl">
                At Parampara, your privacy is deeply important to us. This
                policy explains what data we collect, how we use it, and your
                rights as a user of our cultural learning platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout — Sidebar + Content */}
      <section className="flex flex-col lg:flex-row gap-10">
        {/* Sticky Sidebar */}
        <aside className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-700 mb-4">
              On this page
            </p>
            <ul className="flex flex-col gap-1">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-violet-700 transition-colors py-1"
                  >
                    <span className="text-slate-300 text-xs font-mono w-5 shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Sections */}
        <div className="flex-1 min-w-0 flex flex-col gap-0">
          {sections.map((section, index) => (
            <article
              key={section.id}
              id={section.id}
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm mb-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-violet-50 text-violet-700 text-sm font-bold shrink-0">
                  {index + 1}
                </span>
                <span className="text-xl">{section.icon}</span>
                <h2 className="text-xl font-semibold text-slate-900">
                  {section.title}
                </h2>
              </div>
              <p className="text-slate-600 leading-8 pl-12">
                {section.content}
              </p>
            </article>
          ))}

          {/* Bottom Note */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center mt-4">
            <p className="text-slate-600">
              This Privacy Policy was last reviewed in{" "}
              <strong className="text-slate-900">April 2026</strong>. Parampara
              is open-source under the{" "}
              <strong className="text-slate-900">Apache 2.0 License</strong>.
              Questions? Reach us on{" "}
              <a
                href="https://github.com/Mehren7/Parampara"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-700 hover:underline font-semibold"
              >
                GitHub ↗
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-12">
        <div className="flex items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Ready to begin?
            </h2>
            <p className="mt-2 text-slate-600">
              Browse instructors and start your cultural learning journey rooted
              in authentic Indian heritage.
            </p>
          </div>
          <Link
            href="/instructors"
            className="rounded-full bg-violet-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-800 whitespace-nowrap"
          >
            Browse classes
          </Link>
        </div>
      </section>
    </main>
  );
}
