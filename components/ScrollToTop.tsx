"use client";

import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-violet-700 text-white shadow-md transition-all hover:bg-violet-800 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
      aria-label="Scroll to top"
    >
      <span className="text-xl leading-none">↑</span>
    </button>
  );
}