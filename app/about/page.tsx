import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      {/* Hero Section */}
      <section className="rounded-[2rem] bg-gradient-to-br from-violet-50 via-violet-50 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 p-8 mb-12 transition-colors duration-300 border border-transparent dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-slate-50 mb-4 leading-tight">
            About <span className="text-violet-600 dark:text-violet-400">Parampara</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A living bridge between tradition and technology — enabling culture
            to thrive across borders, while creating real economic opportunity
            for Indian women.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="mb-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-slate-100 mb-2">
            The Problem We're Solving
          </h2>
          <p className="text-gray-500 dark:text-slate-400 text-sm max-w-xl mx-auto">
            Millions of Indians abroad are losing touch with their roots. At the
            same time, skilled women in India lack platforms to reach a global
            audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "🌍",
              title: "Cultural Disconnect",
              desc: "Second and third generation diaspora struggle to stay connected with their language, traditions, and heritage.",
            },
            {
              icon: "📚",
              title: "No Authentic Platform",
              desc: "There is no dedicated, accessible platform for authentic Indian cultural learning from verified instructors.",
            },
            {
              icon: "💼",
              title: "Limited Opportunities",
              desc: "Skilled Indian women — in cooking, arts, crafts, language — lack global reach and sustainable income sources.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-violet-50 dark:bg-slate-800/50 border border-violet-100 dark:border-slate-700 rounded-3xl p-6 transition-colors duration-300"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-gray-900 dark:text-slate-100 mb-2 text-lg">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Solution Section */}
      <section className="mb-12 rounded-3xl bg-violet-50 dark:bg-slate-800/30 border border-violet-100 dark:border-slate-800 p-8 transition-colors duration-300">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-slate-100 mb-2">
            Our Solution
          </h2>
          <p className="text-gray-500 dark:text-slate-400 text-sm max-w-xl mx-auto">
            Parampara is a digital marketplace that connects verified women
            instructors from India with global learners seeking real cultural
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: "👩‍🏫",
              title: "Verified Women Instructors",
              desc: "Every instructor goes through a verification process ensuring quality, authenticity, and safety for learners.",
            },
            {
              icon: "📅",
              title: "Live 1:1 & Group Sessions",
              desc: "Book flexible live sessions in language, cooking, dance, crafts, storytelling, and more.",
            },
            {
              icon: "💳",
              title: "Secure Payments",
              desc: "Transparent and secure payment processing via Razorpay/Stripe — instructors get paid fairly.",
            },
            {
              icon: "⭐",
              title: "Ratings & Reviews",
              desc: "A trust-based system where learners can rate sessions, helping the best instructors rise to the top.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex gap-4 bg-white dark:bg-slate-900 rounded-3xl p-5 border border-violet-100 dark:border-slate-700 shadow-sm transition-colors duration-300"
            >
              <div className="text-3xl shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-slate-100 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Vision Section */}
      <section className="mb-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-slate-100 mb-4">
            🌱 Our Impact Vision
          </h2>
          <p className="text-gray-500 dark:text-slate-400 text-sm max-w-xl mx-auto mb-10">
            We measure success not just in users, but in lives changed and
            cultures preserved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              stat: "💰",
              label: "Sustainable Income",
              desc: "Flexible, dignified income for Indian women from the comfort of their homes.",
            },
            {
              stat: "🎭",
              label: "Cultural Preservation",
              desc: "Traditional skills — dance, language, crafts — kept alive and shared globally.",
            },
            {
              stat: "🤝",
              label: "Belonging & Identity",
              desc: "Diaspora generations reconnect with their roots and build a stronger sense of identity.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-gradient-to-b from-violet-50 to-white dark:from-slate-800 dark:to-slate-900 border border-violet-100 dark:border-slate-700 rounded-3xl p-6 transition-colors duration-300"
            >
              <div className="text-4xl mb-3">{item.stat}</div>
              <h3 className="font-semibold text-gray-900 dark:text-slate-100 mb-2">{item.label}</h3>
              <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Vision Quote */}
        <div className="bg-violet-600 dark:bg-violet-900 text-white rounded-3xl px-8 py-8 text-center shadow-lg transition-colors duration-300">
          <p className="text-lg md:text-xl font-medium leading-relaxed italic mb-4">
            "Parampara is not just a platform — it's a living bridge between
            tradition and technology, enabling culture to thrive across
            borders."
          </p>
          <cite className="text-violet-200 dark:text-violet-300 text-sm not-italic font-medium">
            — Parampara Vision Statement
          </cite>
        </div>
      </section>

      {/* Join Our Community Section */}
      <section className="rounded-3xl bg-violet-50 dark:bg-slate-800/30 border border-violet-100 dark:border-slate-800 p-8 transition-colors duration-300">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-slate-100 mb-2">
            🌟 Join the Parampara Community
          </h2>
          <p className="text-gray-500 dark:text-slate-400 text-sm max-w-xl mx-auto">
            Whether you're looking to reconnect with your roots or share your
            cultural expertise, Parampara welcomes you to our growing community
            of learners and instructors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-violet-100 dark:border-slate-700 shadow-sm transition-colors duration-300">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-2">
              For Learners
            </h3>
            <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
              Discover authentic Indian culture through live sessions with
              verified women instructors. Learn language, cooking, dance, and
              traditions from the comfort of your home.
            </p>
            <Link
              href="/instructors"
              className="inline-block bg-violet-600 dark:bg-violet-700 text-white font-semibold px-4 py-2 rounded-full hover:bg-violet-700 dark:hover:bg-violet-600 transition-colors text-sm"
            >
              Find Instructors
            </Link>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-violet-100 dark:border-slate-700 shadow-sm transition-colors duration-300">
            <div className="text-4xl mb-4">👩‍🏫</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-2">
              For Instructors
            </h3>
            <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
              Share your cultural knowledge and skills with a global audience.
              Earn flexible income while preserving and teaching traditional
              Indian arts and wisdom.
            </p>
            <Link
              href="#contact"
              className="inline-block bg-violet-600 dark:bg-violet-700 text-white font-semibold px-4 py-2 rounded-full hover:bg-violet-700 dark:hover:bg-violet-600 transition-colors text-sm"
            >
              Become an Instructor
            </Link>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 dark:text-slate-400 text-sm mb-4">
            Ready to start your cultural journey?
          </p>
          <Link
            href="/instructors"
            className="inline-block bg-violet-600 dark:bg-violet-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-violet-700 dark:hover:bg-violet-600 transition-colors duration-200 shadow-sm"
          >
            Explore Classes →
          </Link>
        </div>
      </section>
    </main>
  );
}