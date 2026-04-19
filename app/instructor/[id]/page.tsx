import Link from 'next/link';
import { instructors } from '@/lib/data';

type PageProps = {
  params: { id: string };
};

export default function InstructorProfilePage({ params }: PageProps) {
  const instructor = instructors.find((item) => item.id === params.id);

  if (!instructor) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <p className="text-center text-xl font-semibold text-slate-800">Instructor not found.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-700">{instructor.location}</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-900">{instructor.name}</h1>
            <p className="mt-3 text-lg text-slate-600">{instructor.expertise}</p>
          </div>
          <div className="rounded-3xl bg-violet-50 px-4 py-3 text-right text-sm font-semibold text-violet-700">
            ${instructor.ratePerHour} / hour
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">About this mentor</h2>
              <p className="text-slate-600 leading-8">{instructor.description}</p>
            </section>

            <section className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold text-slate-900">What you will learn</h3>
              <ul className="space-y-3 text-slate-600">
                {instructor.specialties.map((specialty) => (
                  <li key={specialty} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    {specialty}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Session details</h3>
              <p className="mt-3 text-slate-600">Book a 1:1 learning session tailored to your heritage goals. Sessions are ideal for diaspora families, children, and cultural learners.</p>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">Languages</p>
              <p className="mt-2 font-semibold text-slate-900">{instructor.languages.join(', ')}</p>
            </div>
            <Link href="/instructors" className="inline-flex w-full items-center justify-center rounded-full bg-violet-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-800">
              Book a session
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}
