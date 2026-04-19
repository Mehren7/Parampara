import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Parampara',
  description: 'Connect diaspora learners with Indian women instructors for language and culture sessions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
