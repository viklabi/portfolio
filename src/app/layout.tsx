import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Victor Owolabi — Electronic & Electrical Engineer',
  description:
    'Victor Owolabi builds intelligent systems at the intersection of software, electronics and healthcare. Electronic & Electrical Engineering student at Obafemi Awolowo University, and frontend developer.',
  keywords: [
    'Victor Owolabi',
    'Electronic and Electrical Engineering',
    'Frontend Developer',
    'IoT',
    'AI',
    'Embedded Systems',
    'ESP32',
    'Arduino',
    'Obafemi Awolowo University',
  ],
  authors: [{ name: 'Victor Owolabi' }],
  openGraph: {
    title: 'Victor Owolabi — Electronic & Electrical Engineer',
    description:
      'Building intelligent systems at the intersection of software, electronics and healthcare.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Victor Owolabi — Electronic & Electrical Engineer',
    description:
      'Building intelligent systems at the intersection of software, electronics and healthcare.',
  },
};

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ `${inter.variable} ${display.variable} ${mono.variable}` }>
      <body className="font-sans antialiased">{ children }</body>
    </html>
  );
}