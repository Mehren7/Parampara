import Link from 'next/link';
import { instructors } from '@/lib/data';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <p className="inline-flex rounded-full bg-violet-50 dark:bg-violet-900/30 px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-violet-700 dark:text-violet-300">
            Parampara
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-5xl">
            Reconnect diaspora learners with Indian heritage, one hourly session at a time.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Learn mother tongue, customs, recipes, and stories from verified Indian women instructors while they earn stable income through meaningful cultural teaching.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/instructors" className="inline-flex items-center justify-center rounded-full bg-violet-700 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-800">
              Browse classes
            </Link>
            <Link href="#impact" className="inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-6 py-3 text-base font-semibold text-slate-700 dark:text-slate-300 transition hover:bg-slate-50 dark:hover:bg-slate-800">
              Learn more
            </Link>
          </div>
        </div>
        <div className="rounded-[2rem] bg-gradient-to-br from-violet-700 to-fuchsia-500 p-1 shadow-2xl shadow-violet-500/20">
          <div className="rounded-[2rem] bg-white dark:bg-slate-900 p-8 transition-colors duration-300">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-700 dark:text-violet-400">Featured instructors</p>
            <div className="mt-6 space-y-4">
              {instructors.slice(0, 3).map((instructor) => (
                <div key={instructor.id} className="rounded-3xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-4 transition-colors duration-300">
                  <p className="text-base font-semibold text-slate-900 dark:text-slate-100">{instructor.name}</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{instructor.expertise}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 grid gap-8 lg:grid-cols-3">
        <article className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm transition-colors duration-300">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">For learners</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">Discover a trusted cultural space for your child, family member, or yourself to relearn language, festivals, and home traditions.</p>
        </article>
        <article className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm transition-colors duration-300">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">For women instructors</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">Offer private teaching sessions on your schedule, share your skills, and earn hourly income from a global audience.</p>
        </article>
        <article className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm transition-colors duration-300">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Real cultural bridge</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">Build meaningful relationships that preserve heritage while creating economic independence for Indian women.</p>
        </article>
      </section>

      <section id="impact" className="mt-24 rounded-[2rem] bg-violet-900 px-8 py-14 text-white shadow-2xl shadow-violet-600/20">
        <div className="max-w-4xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-300">Meaningful impact</p>
          <h2 className="text-3xl font-semibold tracking-tight">A platform that centers culture and income together.</h2>
          <p className="max-w-3xl text-lg leading-8 text-violet-200">Parampara supports Indian housewives and women educators to teach the intangible culture of language, rituals, and daily life in a trusted, one-on-one format.</p>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-3xl font-semibold">1:1</p>
              <p className="mt-3 text-sm text-violet-100">Private lessons shaped around learner goals and instructor expertise.</p>
            </div>
            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-3xl font-semibold">Hourly pay</p>
              <p className="mt-3 text-sm text-violet-100">Flexible earnings for women educators through each live session.</p>
            </div>
            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-3xl font-semibold">Heritage</p>
              <p className="mt-3 text-sm text-violet-100">Teaching mother tongue, festivals, cooking, and family traditions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24 mb-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm transition-colors duration-300">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Ready to begin?</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">Browse instructors, choose a time, and start a learning journey rooted in authentic Indian heritage.</p>
          </div>
          <Link href="/instructors" className="whitespace-nowrap rounded-full bg-violet-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-800">
            Explore instructors
          </Link>
        </div>
      </section>
    </main>
  );
}