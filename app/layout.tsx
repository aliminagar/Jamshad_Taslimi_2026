import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import GoldCursor from '@/components/GoldCursor';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
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
    <html lang="en" style={{ backgroundColor: '#0A1A2F' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ backgroundColor: '#0A1A2F', margin: 0, padding: 0 }}>
        <ScrollProgress />
        <GoldCursor />
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
