import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 text-center">
      <div className="text-6xl mb-6">🌏</div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-500 mb-8 max-w-md mx-auto">
        The page you were looking for could not be found. It may have been moved
        or doesn't exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-orange-700"
      >
        Go back home
      </Link>
    </main>
  );
}
