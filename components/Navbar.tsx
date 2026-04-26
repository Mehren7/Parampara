"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "../lib/core/theme_provider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/instructors", label: "Instructors" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { themeMode, toggleTheme } = useTheme();

  return (
    /* Added bg-white dark:bg-gray-900 and border colors */
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
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
                /* Added dark:text-gray-300 and hover states */
                className={`text-sm font-medium transition-colors duration-200 hover:text-orange-600 dark:hover:text-orange-400 ${
                  pathname === link.href
                    ? "text-orange-600 border-b-2 border-orange-600 pb-0.5"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button — Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            /* Styling for the toggle button itself */
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-transparent dark:border-gray-700"
            aria-label="Toggle Theme"
          >
            {themeMode === "light" ? "🌙" : "☀️"}
          </button>
  
          <Link
            href="/instructors"
            className="bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200"
          >
            Find an Instructor
          </Link>
        </div>
        

        {/* Hamburger Button — Mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {/* Added dark:bg-gray-200 to mobile lines */}
          <span
            className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-200 transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-200 transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-200 transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        /* Added dark:bg-gray-900 and dark:border-gray-800 */
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  /* Added dark:hover:bg-gray-800 */
                  className={`block text-sm font-medium py-2 px-3 rounded-md transition-colors duration-200 ${
                    pathname === link.href
                      ? "bg-orange-50 dark:bg-orange-900/20 text-orange-600 font-semibold"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-orange-600"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="flex flex-col gap-3">
              <Link
                href="/instructors"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200"
              >
                Find an Instructor
              </Link>
  
              {/* Mobile Theme Toggle */}
              <button
                onClick={() => {
                  toggleTheme();
                  setMenuOpen(false);
                }}
                /* Added dark styles for mobile toggle */
                className="flex items-center justify-center gap-2 text-sm font-medium py-2 px-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-transparent dark:border-gray-700"
              >
                {themeMode === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}