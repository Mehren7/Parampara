import Link from 'next/link';
import { instructors } from '@/lib/data';

type PageProps = {
  params: { id: string };
};

export default function InstructorProfilePage({ params }: { params: { id: string } }) {
  const instructor = instructors.find((item) => item.id === params.id);

  const backButtonClasses = "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition-all hover:bg-slate-50 hover:text-violet-700 hover:border-violet-200";

  if (!instructor) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <Link href="/instructors" className={backButtonClasses}>
          <span className="text-lg">←</span> Back to Instructors
        </Link>
        <p className="mt-8 text-center text-xl font-semibold text-slate-800">Instructor not found.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
      <div className="mb-8">
        <Link href="/instructors" className={backButtonClasses}>
          <span className="text-lg">←</span> Back to all mentors
        </Link>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            {/* Added dark:text-violet-400 */}
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-700 dark:text-violet-400">
              {instructor.location}
            </p>
            {/* Added dark:text-white */}
            <h1 className="mt-4 text-4xl font-semibold text-slate-900 dark:text-white">
              {instructor.name}
            </h1>
            {/* Added dark:text-slate-400 */}
            <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
              {instructor.expertise}
            </p>
          </div>
          {/* Rate Badge: Added dark:bg-violet-900/30 dark:text-violet-300 */}
          <div className="rounded-3xl bg-violet-50 dark:bg-violet-900/30 px-4 py-3 text-right text-sm font-semibold text-violet-700 dark:text-violet-300">
            ${instructor.ratePerHour} / hour
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <section className="space-y-4">
              {/* Added dark:text-white */}
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">About this mentor</h2>
              {/* Added dark:text-slate-400 */}
              <p className="text-slate-600 dark:text-slate-400 leading-8">
                {instructor.description}
              </p>
            </section>

            <section className="mt-8 space-y-4">
              {/* Added dark:text-white */}
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">What you will learn</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                {instructor.specialties.map((specialty) => (
                  /* List Item: Added dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 */
                  <li key={specialty} className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 transition-colors">
                    {specialty}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar: Added dark:border-slate-700 dark:bg-slate-800/50 */}
          <aside className="space-y-6 rounded-3xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-6 transition-colors">
            <div>
              {/* Added dark:text-white */}
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Session details</h3>
              {/* Added dark:text-slate-400 */}
              <p className="mt-3 text-slate-600 dark:text-slate-400">
                Book a 1:1 learning session tailored to your heritage goals. Sessions are ideal for diaspora families, children, and cultural learners.
              </p>
            </div>
            {/* Language Box: Added dark:bg-slate-900 dark:shadow-none */}
            <div className="rounded-3xl bg-white dark:bg-slate-900 p-5 shadow-sm transition-colors">
              <p className="text-sm text-slate-500">Languages</p>
              {/* Added dark:text-slate-200 */}
              <p className="mt-2 font-semibold text-slate-900 dark:text-slate-200">
                {instructor.languages.join(', ')}
              </p>
            </div>
            <Link href="/instructors" className="inline-flex w-full items-center justify-center rounded-full bg-violet-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-800 shadow-lg shadow-violet-500/20">
              Book a session
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}