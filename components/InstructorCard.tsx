import Link from 'next/link';
import type { Instructor } from '@/lib/data';

export function InstructorCard({ instructor }: { instructor: Instructor }) {
  return (
    /* Added dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-violet-900/20 */
    <article className="rounded-3xl border border-violet-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-violet-900/20">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          {/* Added dark:text-violet-400 */}
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-700 dark:text-violet-400">
            {instructor.location}
          </p>
          {/* Added dark:text-white */}
          <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
            {instructor.name}
          </h3>
        </div>
        {/* Added dark:bg-violet-900/30 dark:text-violet-300 */}
        <span className="rounded-full bg-violet-50 dark:bg-violet-900/30 px-3 py-1 text-sm font-medium text-violet-700 dark:text-violet-300">
          ${instructor.ratePerHour}/hr
        </span>
      </div>
      
      {/* Added dark:text-slate-400 */}
      <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
        {instructor.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {instructor.specialties.map((tag) => (
          /* Added dark:bg-slate-800 dark:text-slate-300 */
          <span key={tag} className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        {/* Added dark:text-slate-500 (kept slightly dim) */}
        <p className="text-sm text-slate-500 dark:text-slate-500">
          {instructor.languages.join(' • ')}
        </p>
        <Link href={`/instructor/${instructor.id}`} className="rounded-full bg-violet-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-800">
          View profile
        </Link>
      </div>
    </article>
  );
}