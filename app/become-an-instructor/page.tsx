"use client";
import { useState } from "react";
import Link from "next/link"; 

export default function BecomeAnInstructor() {
    const [submitted, setSubmitted] = useState(false);
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
  {/* Hero Section */}
  <section className="rounded-[2rem] bg-gradient-to-br from-violet-50 via-violet-50 to-white p-8 mb-12 text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      Become an <span className="text-violet-600">Instructor</span>
    </h1>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      Share your culture, language, and traditions with diaspora learners worldwide and earn flexible income doing what you love.
    </p>
  </section>
  {submitted ? (
  <div className="bg-violet-50 border border-violet-200 rounded-3xl p-8 text-center">
    <div className="text-5xl mb-4"></div>
    <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
    <p className="text-gray-600">Thank you for applying. We'll review your application and get back to you soon.</p>
  </div>
) : (
   <form className="flex flex-col gap-4" onSubmit={(e) => {e.preventDefault();setSubmitted(true);}}>
        <input type="text" placeholder="Full Name" className="border border-gray-200 p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-violet-400 text-sm" required />
        <input type="text" placeholder="City, State" className="border border-gray-200 p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-violet-400 text-sm" required />
        <input type="text" placeholder="Languages Spoken" className="border border-gray-200 p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-violet-400 text-sm" required />
        <input type="text" placeholder="Teaching Specialties (e.g. cooking, crafts)" className="border border-gray-200 p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-violet-400 text-sm" required />
        <input type="number" placeholder="Hourly Rate" className="border border-gray-200 p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-violet-400 text-sm" required />
        <textarea placeholder="Short Bio" className="border border-gray-200 p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-violet-400 text-sm" rows={4} required />
        <input type="email" placeholder="Contact Email" className="border border-gray-200 p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-violet-400 text-sm" required />
        <button type="submit" className="bg-violet-600 text-white py-3 rounded-xl font-semibold hover:bg-violet-700 transition-colors">
          Submit Application
        </button>
      </form>
)}
  
     
      <Link href="/" className="text-purple-600 mt-6 inline-block">← Back to Home</Link>
    </main>
  );
}