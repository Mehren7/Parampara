import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Parampara — the cultural learning marketplace connecting diaspora with Indian women instructors.",
};

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    icon: "✅",
    content:
      "By accessing or using Parampara, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this platform. These terms apply to all users including learners, instructors, and visitors.",
  },
  {
    id: "use-of-platform",
    title: "Use of Platform",
    icon: "🌐",
    content:
      "Parampara is a cultural learning marketplace that facilitates live sessions between learners and instructors. You agree to use the platform only for lawful purposes. You must not misuse the platform by introducing malicious content, attempting unauthorized access, or engaging in any activity that disrupts the service for other users.",
  },
  {
    id: "instructor-responsibilities",
    title: "Instructor Responsibilities",
    icon: "👩‍🏫",
    content:
      "Instructors on Parampara are independent individuals, not employees of Parampara. Instructors are responsible for the accuracy of their profile information, the quality of sessions they conduct, maintaining a respectful and professional environment, and complying with all applicable local laws regarding income and taxation.",
  },
  {
    id: "learner-responsibilities",
    title: "Learner Responsibilities",
    icon: "📚",
    content:
      "Learners are responsible for attending booked sessions on time, treating instructors with respect, providing honest and constructive feedback, and not recording or redistributing session content without the instructor's explicit consent.",
  },
  {
    id: "payments",
    title: "Payments & Refunds",
    icon: "💳",
    content:
      "All payments on Parampara are processed securely via third-party payment gateways (Razorpay/Stripe). Refunds may be issued if a session is cancelled by the instructor or if a technical failure prevents the session from taking place. Refund requests must be raised within 48 hours of the scheduled session. Parampara reserves the right to modify its pricing and refund policies at any time.",
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    icon: "🔐",
    content:
      "All content on Parampara — including the platform design, logos, and written content — is the property of Parampara and protected under applicable intellectual property laws. Session content shared by instructors remains their intellectual property. Users may not reproduce or distribute platform content without prior written permission.",
  },
  {
    id: "termination",
    title: "Termination",
    icon: "🚫",
    content:
      "Parampara reserves the right to suspend or terminate any user account at its discretion if a user is found to be in violation of these Terms of Service, engaged in fraudulent activity, or behaving in a manner harmful to other users or the platform's reputation.",
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    icon: "⚖️",
    content:
      "Parampara is provided on an 'as is' basis. We do not guarantee uninterrupted or error-free service. To the fullest extent permitted by law, Parampara shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform, including but not limited to loss of data, revenue, or goodwill.",
  },
  {
    id: "changes",
    title: "Changes to Terms",
    icon: "🔄",
    content:
      "Parampara reserves the right to update these Terms of Service at any time. Changes will be effective immediately upon posting to the platform. Continued use of the platform after any changes constitutes your acceptance of the new terms. We encourage users to review this page periodically.",
  },
  {
    id: "contact",
    title: "Contact Us",
    icon: "💬",
    content:
      "If you have any questions about these Terms of Service, please reach out to us through the platform. We are committed to resolving any concerns in a fair and timely manner.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-white py-14 px-4 border-b border-orange-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Link
              href="/"
              className="text-sm text-gray-400 hover:text-orange-600 transition-colors"
            >
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-sm text-orange-600 font-medium">
              Terms of Service
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-orange-200 mb-4">
                📜 Legal Document
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Terms of Service
              </h1>
              <p className="text-gray-500 text-sm">
                Last updated: <strong>April 2026</strong> · Effective
                immediately upon use
              </p>
            </div>
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 border border-orange-200 bg-white px-4 py-2 rounded-xl hover:bg-orange-50 transition-colors whitespace-nowrap"
            >
              🔒 View Privacy Policy →
            </Link>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Sticky Sidebar — Table of Contents */}
          <aside className="hidden md:block w-60 shrink-0">
            <div className="sticky top-24 bg-orange-50 border border-orange-100 rounded-2xl p-5">
              <p className="text-xs font-semibold text-orange-700 uppercase tracking-wider mb-4">
                On this page
              </p>
              <ul className="flex flex-col gap-2">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="flex items-center gap-2 text-sm text-gray-500 hover:text-orange-600 transition-colors py-0.5"
                    >
                      <span className="text-gray-300 text-xs font-mono w-4">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Intro Banner */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 rounded-2xl p-6 mb-10">
              <div className="flex gap-3">
                <span className="text-2xl shrink-0">🌏</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Welcome to Parampara
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Please read these terms carefully before using the platform.
                    By using Parampara, you agree to these terms in full. These
                    terms govern your relationship with Parampara as a learner,
                    instructor, or visitor.
                  </p>
                </div>
              </div>
            </div>

            {/* Sections */}
            <div className="flex flex-col gap-10">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24 group"
                >
                  {/* Section Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-orange-100 text-orange-700 text-xs font-bold rounded-full shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-lg mr-1">{section.icon}</span>
                    <h2 className="text-lg font-semibold text-gray-900">
                      {section.title}
                    </h2>
                  </div>

                  {/* Section Content */}
                  <div className="pl-11">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {section.content}
                    </p>
                  </div>

                  {/* Divider (not on last) */}
                  {index < sections.length - 1 && (
                    <div className="border-b border-gray-100 mt-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
