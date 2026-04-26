import { ThemeProvider } from "../lib/core/theme_provider";
import Navbar from "../components/Navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* 1. bg-white dark:bg-gray-950 handles the background 
          2. text-gray-900 dark:text-gray-100 handles the text color 
      */}
      <body className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}