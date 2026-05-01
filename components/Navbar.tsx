"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/instructors", label: "Instructors" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect ensures the theme logic only runs on the client to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-orange-600 tracking-tight">
            🌏 Parampara
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-orange-600 ${
                  pathname === link.href
                    ? "text-orange-600 border-b-2 border-orange-600 pb-0.5"
                    : "text-gray-600 dark:text-slate-300 dark:hover:text-orange-500"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Actions: Theme Toggle & CTA */}
        <div className="hidden md:flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors focus:outline-none"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          )}

          <Link
            href="/instructors"
            className="bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200"
          >
            Find an Instructor
          </Link>
        </div>

        {/* Mobile Controls: Theme Toggle & Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors focus:outline-none"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          )}
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-700 dark:bg-slate-200 transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-700 dark:bg-slate-200 transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-700 dark:bg-slate-200 transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 px-4 pb-4 transition-colors duration-300">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-sm font-medium py-2 px-3 rounded-md transition-colors duration-200 ${
                    pathname === link.href
                      ? "bg-orange-50 dark:bg-orange-900/20 text-orange-600 font-semibold"
                      : "text-gray-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-orange-600 dark:hover:text-orange-500"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/instructors"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200"
              >
                Find an Instructor
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}