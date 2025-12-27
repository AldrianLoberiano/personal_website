import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aldrian Loberiano - Full Stack Developer',
  description: 'Personal website and portfolio',
  icons: {
    icon: '/favicon2.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
