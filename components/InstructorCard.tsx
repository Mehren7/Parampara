import Link from 'next/link';
import type { Instructor } from '@/lib/data';

export function InstructorCard({ instructor }: { instructor: Instructor }) {
  return (
    <article className="relative flex flex-col rounded-3xl border border-violet-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-within:ring-2 focus-within:ring-violet-500">
      
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-700 dark:text-violet-400">{instructor.location}</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">{instructor.name}</h3>
        </div>
        <span className="relative z-10 rounded-full bg-violet-50 dark:bg-violet-900/30 px-3 py-1 text-sm font-medium text-violet-700 dark:text-violet-300">
          ${instructor.ratePerHour}/hr
        </span>
      </div>

      <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">{instructor.description}</p>
      
      <div className="relative z-10 mt-5 flex flex-wrap gap-2">
        {instructor.specialties.map((tag) => (
          <span key={tag} className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors duration-300">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-6 flex items-center justify-between gap-4">
        <p className="text-sm text-slate-500 dark:text-slate-400">{instructor.languages.join(' • ')}</p>
        
        <Link 
          href={`/instructor/${instructor.id}`} 
          className="rounded-full bg-violet-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-800 dark:hover:bg-violet-600 after:absolute after:inset-0 focus:outline-none"
        >
          View profile
        </Link>
      </div>

    </article>
  );
}