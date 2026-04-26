"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 text-center">
      <div className="text-6xl mb-6">⚠️</div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Something went wrong
      </h2>
      <p className="text-gray-500 mb-8 max-w-md mx-auto">
        {error.message || "An unexpected error occurred. Please try again."}
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-orange-700"
      >
        Try again
      </button>
    </main>
  );
}
