"use client";

import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";
import { ScrollToTop } from "./ScrollToTop";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextTopLoader
        color="#7c3aed"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        zIndex={1600}
      />
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
            borderRadius: "0.375rem",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          },
          success: {
            duration: 3000,
          },
        }}
      />
      <ScrollToTop />
      {children}
    </>
  );
}
