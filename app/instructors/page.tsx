import { InstructorCard } from '@/components/InstructorCard';
import { instructors } from '@/lib/data';

export default function InstructorsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <section className="space-y-6">
        <div className="rounded-3xl bg-violet-700 px-8 py-10 text-white shadow-2xl shadow-violet-500/20">
          <h1 className="text-4xl font-semibold">Find your cultural mentor</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-violet-100">Connect with Indian women who teach language, home traditions, festivals, recipes, and more in live 1:1 sessions.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
      </section>
    </main>
  );
}
