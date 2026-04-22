import type { Metadata } from 'next';
import { Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import GoldCursor from '@/components/GoldCursor';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jamshad-taslimi-2026.netlify.app'),
  title: 'Jamshad Taslimi, MD — Physician, Educator, Pianist',
  description:
    'Jamshad Taslimi is a physician, medical educator, and classical pianist whose interdisciplinary life bridges the rigorous science of medicine with the artistry of performance. Gold Olympiad medalist, Dubai-based clinician, and dedicated teacher.',
  keywords: [
    'Jamshad Taslimi',
    'physician Dubai',
    'medical doctor UAE',
    'classical pianist',
    'medical educator',
    'Olympiad gold medal',
    'Jumeirah Village Circle',
  ],
  openGraph: {
    title: 'Jamshad Taslimi, MD — Physician, Educator, Pianist',
    description:
      'A physician, medical educator, and classical pianist whose interdisciplinary life bridges science and artistry.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}
      style={{ backgroundColor: '#0A1A2F' }}
    >
      <body style={{ backgroundColor: '#0A1A2F', margin: 0, padding: 0 }}>
        <ScrollProgress />
        <GoldCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
