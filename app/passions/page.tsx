'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Music, Stethoscope, Target, Clock, Sparkles } from 'lucide-react';
import FadeInUp from '@/components/FadeInUp';
import GoldDivider from '@/components/GoldDivider';

/* ── PIANO SVG ─────────────────────────────────────────────────────── */
function PianoSVG() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' });

  const whiteKeys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const blackKeyPattern = [1, 1, 0, 1, 1, 1, 0];
  const blackKeys: number[] = [];
  let wIdx = 0;
  whiteKeys.forEach((_, i) => {
    const pat = blackKeyPattern[i % 7];
    if (pat && i < whiteKeys.length - 1) blackKeys.push(i);
  });

  const highlightedWhite = [0, 4, 7, 11];
  const highlightedBlack = [1, 5];

  return (
    <svg
      ref={ref}
      viewBox="0 0 560 200"
      width="100%"
      style={{ maxWidth: '560px', display: 'block' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="whiteKeyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0EAD6" />
          <stop offset="100%" stopColor="#D8CFA8" />
        </linearGradient>
        <linearGradient id="whiteKeyHighlight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5E070" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
        <linearGradient id="blackKeyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A1A1A" />
          <stop offset="100%" stopColor="#0A0A0A" />
        </linearGradient>
        <linearGradient id="blackKeyHighlight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8A6B1A" />
        </linearGradient>
        <filter id="pianoGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* keyboard body shadow */}
      <rect x="2" y="12" width="556" height="186" rx="4" fill="rgba(0,0,0,0.5)" />
      {/* keyboard body */}
      <rect x="0" y="10" width="556" height="184" rx="4" fill="#111827" />

      {/* white keys */}
      {whiteKeys.map((_, i) => {
        const x = 4 + i * 39;
        const isHighlighted = highlightedWhite.includes(i);
        return (
          <motion.rect
            key={`w${i}`}
            x={x}
            y="16"
            width="37"
            height="168"
            rx="2"
            fill={isHighlighted ? 'url(#whiteKeyHighlight)' : 'url(#whiteKeyGrad)'}
            stroke="#8A7A5A"
            strokeWidth="0.5"
            initial={{ opacity: isHighlighted ? 0.4 : 1 }}
            animate={isInView ? { opacity: 1 } : { opacity: isHighlighted ? 0.4 : 1 }}
            transition={{ delay: isHighlighted ? i * 0.12 : 0, duration: 0.4 }}
            style={{ filter: isHighlighted ? 'url(#pianoGlow)' : undefined }}
          />
        );
      })}

      {/* black keys */}
      {blackKeys.map((wKeyIdx, i) => {
        const x = 4 + wKeyIdx * 39 + 24;
        const isHighlighted = highlightedBlack.includes(i);
        return (
          <motion.rect
            key={`b${i}`}
            x={x}
            y="16"
            width="26"
            height="110"
            rx="2"
            fill={isHighlighted ? 'url(#blackKeyHighlight)' : 'url(#blackKeyGrad)'}
            initial={{ opacity: isHighlighted ? 0.3 : 1 }}
            animate={isInView ? { opacity: 1 } : { opacity: isHighlighted ? 0.3 : 1 }}
            transition={{ delay: isHighlighted ? wKeyIdx * 0.15 + 0.3 : 0, duration: 0.4 }}
          />
        );
      })}
    </svg>
  );
}

/* ── PHILOSOPHY COLUMN ─────────────────────────────────────────────── */
function PhilosophyColumn({
  icon: Icon,
  title,
  body,
  delay,
}: {
  icon: React.ComponentType<{ size?: number | string; color?: string }>;
  title: string;
  body: string;
  delay: number;
}) {
  return (
    <FadeInUp delay={delay}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '2.5rem 2rem',
          flex: 1,
          minWidth: '220px',
        }}
      >
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'rgba(212,175,55,0.08)',
            border: '1px solid rgba(212,175,55,0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem',
          }}
        >
          <Icon size={28} color="#D4AF37" />
        </div>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#F5F7FA',
            marginBottom: '0.875rem',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.9rem',
            color: '#B8C5D6',
            lineHeight: 1.8,
          }}
        >
          {body}
        </p>
      </div>
    </FadeInUp>
  );
}

/* ── MINI CARD ─────────────────────────────────────────────────────── */
function MiniCard({ title, detail }: { title: string; detail: string }) {
  return (
    <div
      style={{
        backgroundColor: 'rgba(212,175,55,0.06)',
        border: '1px solid rgba(212,175,55,0.18)',
        borderLeft: '3px solid #D4AF37',
        padding: '1.1rem 1.4rem',
        marginBottom: '0.875rem',
      }}
    >
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '0.95rem',
          fontWeight: 700,
          color: '#F5F7FA',
          marginBottom: '0.3rem',
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.78rem',
          color: '#B8C5D6',
          lineHeight: 1.6,
          letterSpacing: '0.01em',
        }}
      >
        {detail}
      </div>
    </div>
  );
}

/* ── EDITORIAL CREDENTIAL CARD ─────────────────────────────────────── */
function EditorialCredentialCard() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  const stats = [
    { num: '1.5 YRS', label: 'Rotating Clinical Internship' },
    { num: '6', label: 'Specialty Rotations Completed' },
    { num: '2025', label: 'MD, Tehran University of Medical Sciences' },
  ];

  return (
    <motion.div ref={ref} style={{ y, position: 'relative', width: '100%', aspectRatio: '4/5', maxHeight: '540px' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          border: '1px solid rgba(212,175,55,0.35)',
          transform: 'translate(10px, 10px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(ellipse at top left, #152C4D 0%, #081527 100%)',
          border: '2px solid #D4AF37',
          boxShadow: '0 0 60px rgba(212,175,55,0.15)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '40px',
        }}
      >
        {/* Corner accents */}
        {[
          { top: 0, left: 0, borderTop: '2px solid #D4AF37', borderLeft: '2px solid #D4AF37' },
          { top: 0, right: 0, borderTop: '2px solid #D4AF37', borderRight: '2px solid #D4AF37' },
          { bottom: 0, left: 0, borderBottom: '2px solid #D4AF37', borderLeft: '2px solid #D4AF37' },
          { bottom: 0, right: 0, borderBottom: '2px solid #D4AF37', borderRight: '2px solid #D4AF37' },
        ].map((style, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '16px',
              height: '16px',
              ...style,
            }}
          />
        ))}

        {/* Decorative background "R" */}
        <div
          style={{
            position: 'absolute',
            bottom: '-40px',
            right: '-20px',
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: '320px',
            lineHeight: 1,
            color: '#D4AF37',
            opacity: 0.06,
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        >
          R
        </div>

        {/* TOP THIRD */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#D4AF37',
              marginBottom: '16px',
            }}
          >
            // 2018 — 2025
          </div>
          <div style={{ width: '40px', height: '1px', backgroundColor: '#D4AF37', opacity: 0.6 }} />
        </div>

        {/* MIDDLE THIRD */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(18px, 2vw, 26px)',
              color: '#F5F7FA',
              lineHeight: 1.4,
              margin: '0 0 20px 0',
            }}
          >
            "The operating theater does not ask who you are. It asks only whether you are prepared."
          </p>
          <div style={{ width: '30px', height: '1px', backgroundColor: '#D4AF37', opacity: 0.6, marginBottom: '12px' }} />
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#B8C5D6',
            }}
          >
            — A Resident's Creed
          </div>
        </div>

        {/* BOTTOM THIRD */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {stats.map((stat, i) => (
            <div key={i} style={{ marginBottom: i < stats.length - 1 ? '12px' : 0 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px' }}>
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '24px',
                    color: '#D4AF37',
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  {stat.num}
                </span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '10px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#B8C5D6',
                    lineHeight: 1.3,
                  }}
                >
                  {stat.label}
                </span>
              </div>
              {i < stats.length - 1 && (
                <div style={{ width: '100%', height: '0.5px', backgroundColor: '#D4AF37', opacity: 0.2 }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── PIANO PHOTO ───────────────────────────────────────────────────── */
function PianoPhoto() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
      }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1 / 1',
          padding: '6px',
          backgroundColor: '#081527',
          border: '2px solid #D4AF37',
          boxShadow: hovered
            ? '0 0 80px rgba(212,175,55,0.25)'
            : '0 0 80px rgba(212,175,55,0.12)',
          transition: 'box-shadow 400ms ease',
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            src="/Jamshad_Taslimi_Playing_Piano.jpg"
            alt="Jamshad Taslimi performing at a Feurich grand piano"
            fill
            sizes="(max-width: 860px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      </div>

      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '11px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'rgba(212,175,55,0.65)',
          textAlign: 'center',
        }}
      >
        Performing · Feurich Grand · Tehran
      </div>

      <blockquote style={{ margin: 0, padding: '0 1rem', textAlign: 'center' }}>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: '1rem',
            color: '#D4AF37',
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          "The piano teaches what chemistry cannot — that feeling and structure are not opposites."
        </p>
      </blockquote>
    </div>
  );
}

/* ── PAGE ──────────────────────────────────────────────────────────── */
export default function PassionsPage() {
  return (
    <div style={{ backgroundColor: '#0A1A2F', minHeight: '100vh', paddingTop: '72px' }}>

      {/* ── PAGE HEADER ─────────────────────────────────────────────── */}
      <section
        style={{
          padding: '5rem 2rem 4.5rem',
          borderBottom: '1px solid rgba(212,175,55,0.1)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 80% at 80% 0%, rgba(212,175,55,0.05) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              color: '#D4AF37',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span style={{ opacity: 0.5 }}>//</span> Beyond the Curriculum
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.75rem, 5.5vw, 4.75rem)',
              fontWeight: 800,
              color: '#F5F7FA',
              lineHeight: 1.05,
              marginBottom: '1rem',
            }}
          >
            Two Hands.
            <br />
            Two Callings.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ transformOrigin: 'left', marginBottom: '1.25rem' }}
          >
            <GoldDivider width="72px" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
              color: '#B8C5D6',
              maxWidth: '480px',
              lineHeight: 1.6,
            }}
          >
            Where surgical precision meets musical expression.
          </motion.p>
        </div>
      </section>

      {/* ── SPLIT HERO ──────────────────────────────────────────────── */}
      <section
        className="split-hero"
        style={{
          position: 'relative',
          width: '100%',
          height: '60vh',
          minHeight: '480px',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 0,
        }}
      >
        {/* LEFT PANEL — The Clinic */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="clinic-panel"
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRight: '1px solid rgba(212,175,55,0.25)',
          }}
        >
          {/* Animated background image layer */}
          <div
            className="clinic-bg"
            style={{
              position: 'absolute',
              inset: '-6%',
              backgroundImage: "url('/Image_1_Stethescope.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: '65% center',
              backgroundRepeat: 'no-repeat',
              animation: 'slowZoom 24s ease-in-out alternate infinite',
              animationDelay: '0s',
              willChange: 'transform',
            }}
          />
          {/* Navy overlay — heavy on left (text), lightens toward right (lamp glow) */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              background: 'linear-gradient(to right, rgba(8,21,39,0.85) 0%, rgba(8,21,39,0.70) 45%, rgba(8,21,39,0.50) 100%)',
              pointerEvents: 'none',
            }}
          />
          {/* Content */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              padding: '48px',
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              style={{ filter: 'drop-shadow(0 0 16px rgba(212,175,55,0.4))' }}
            >
              <Stethoscope size={56} color="#D4AF37" />
            </motion.div>
            <div style={{ height: '24px' }} />
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 600,
                color: '#F5F7FA',
                letterSpacing: '-0.02em',
                textAlign: 'center',
                margin: 0,
                lineHeight: 1.1,
                textShadow: '0 2px 24px rgba(0,0,0,0.7)',
              }}
            >
              The Clinic
            </h2>
            <div style={{ height: '12px' }} />
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1rem',
                fontStyle: 'italic',
                color: '#B8C5D6',
                textAlign: 'center',
                margin: 0,
                textShadow: '0 1px 12px rgba(0,0,0,0.6)',
              }}
            >
              Medicine as vocation
            </p>
            <div style={{ height: '20px' }} />
            <div style={{ width: '40px', height: '1px', backgroundColor: '#D4AF37', opacity: 0.6 }} />
          </div>
        </motion.div>

        {/* RIGHT PANEL — The Keys */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="keys-panel"
          style={{
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Animated background image layer */}
          <div
            className="keys-bg"
            style={{
              position: 'absolute',
              inset: '-6%',
              backgroundImage: "url('/Piano_keys_2.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: '35% center',
              backgroundRepeat: 'no-repeat',
              animation: 'slowZoom 24s ease-in-out alternate infinite',
              animationDelay: '-12s',
              willChange: 'transform',
            }}
          />
          {/* Navy overlay — heavy on right (text), lightens toward left (piano key glow) */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              background: 'linear-gradient(to left, rgba(8,21,39,0.85) 0%, rgba(8,21,39,0.70) 45%, rgba(8,21,39,0.50) 100%)',
              pointerEvents: 'none',
            }}
          />
          {/* Content */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              padding: '48px',
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              style={{ filter: 'drop-shadow(0 0 16px rgba(212,175,55,0.4))' }}
            >
              <Music size={56} color="#D4AF37" />
            </motion.div>
            <div style={{ height: '24px' }} />
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 600,
                color: '#F5F7FA',
                letterSpacing: '-0.02em',
                textAlign: 'center',
                margin: 0,
                lineHeight: 1.1,
                textShadow: '0 2px 24px rgba(0,0,0,0.7)',
              }}
            >
              The Keys
            </h2>
            <div style={{ height: '12px' }} />
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1rem',
                fontStyle: 'italic',
                color: '#B8C5D6',
                textAlign: 'center',
                margin: 0,
                textShadow: '0 1px 12px rgba(0,0,0,0.6)',
              }}
            >
              Music as language
            </p>
            <div style={{ height: '20px' }} />
            <div style={{ width: '40px', height: '1px', backgroundColor: '#D4AF37', opacity: 0.6 }} />
          </div>
        </motion.div>

      </section>

      {/* ── SURGERY SECTION ─────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#0A1A2F',
          padding: '7rem 2rem',
          borderTop: '1px solid rgba(212,175,55,0.1)',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <FadeInUp>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                color: '#D4AF37',
                textTransform: 'uppercase',
                marginBottom: '3.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span style={{ opacity: 0.5 }}>//</span> 01 · A Surgical Aspiration
            </div>
          </FadeInUp>

          <div
            className="two-col"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '5rem',
              alignItems: 'start',
            }}
          >
            {/* LEFT: editorial credential card */}
            <FadeInUp delay={0.05}>
              <EditorialCredentialCard />
            </FadeInUp>

            {/* RIGHT: content */}
            <div>
              <FadeInUp delay={0.1}>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                    fontWeight: 700,
                    color: '#F5F7FA',
                    lineHeight: 1.15,
                    marginBottom: '1.25rem',
                  }}
                >
                  A Discipline of Precision
                </h2>
              </FadeInUp>

              <FadeInUp delay={0.12}>
                <GoldDivider width="50px" />
              </FadeInUp>

              <FadeInUp delay={0.15}>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.975rem',
                    color: '#B8C5D6',
                    lineHeight: 1.85,
                    margin: '1.5rem 0 2rem',
                  }}
                >
                  During a comprehensive rotating internship at Tehran University of Medical Sciences
                  — spanning internal medicine, surgery, pediatrics, obstetrics & gynecology,
                  emergency medicine, and psychiatry — surgery emerged as a discipline of uncommon
                  focus. The operating theater demands what chemistry and music also demand: absolute
                  concentration, disciplined hands, and an unwavering commitment to the outcome.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.18}>
                <div style={{ marginBottom: '2rem' }}>
                  {[
                    'Rotated through general surgery during the MD internship under specialist supervision',
                    'Clinical reasoning developed in high-volume, high-pressure hospital environments',
                    'Observed and assisted across six specialties — internal medicine, surgery, pediatrics, OB-GYN, emergency, psychiatry',
                    'A committed aspirant pursuing future surgical training',
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.85rem',
                        marginBottom: '0.875rem',
                      }}
                    >
                      <div
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(212,175,55,0.12)',
                          border: '1px solid rgba(212,175,55,0.4)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '2px',
                        }}
                      >
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                          <path d="M1 3L3 5L7 1" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.88rem',
                          color: '#B8C5D6',
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeInUp>

              <FadeInUp delay={0.22}>
                <blockquote
                  style={{
                    borderLeft: '2px solid #D4AF37',
                    paddingLeft: '1.25rem',
                    margin: 0,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: 'italic',
                      fontSize: '1.1rem',
                      color: '#D4AF37',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    "Every incision is a sentence. Every suture, a punctuation mark."
                  </p>
                </blockquote>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── MUSIC SECTION ───────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#0F2340',
          padding: '7rem 2rem',
          borderTop: '1px solid rgba(212,175,55,0.1)',
          borderBottom: '1px solid rgba(212,175,55,0.1)',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <FadeInUp>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                color: '#D4AF37',
                textTransform: 'uppercase',
                marginBottom: '3.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span style={{ opacity: 0.5 }}>//</span> 02 · The Art of the Piano
            </div>
          </FadeInUp>

          <div
            className="two-col-rev"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '5rem',
              alignItems: 'start',
            }}
          >
            {/* LEFT: content */}
            <div>
              <FadeInUp delay={0.05}>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                    fontWeight: 700,
                    color: '#F5F7FA',
                    lineHeight: 1.15,
                    marginBottom: '1.25rem',
                  }}
                >
                  A Life at the Keyboard
                </h2>
              </FadeInUp>

              <FadeInUp delay={0.08}>
                <GoldDivider width="50px" />
              </FadeInUp>

              <FadeInUp delay={0.12}>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.975rem',
                    color: '#B8C5D6',
                    lineHeight: 1.85,
                    margin: '1.5rem 0 2rem',
                  }}
                >
                  Music is not a hobby. It is a second language — studied with the same rigor as
                  medicine. Formal training through the British Columbia Conservatory of Music
                  produced two First Class Honours credentials: a Grade 9 Piano Certificate and a
                  Piano Pedagogy Certificate — the formal bridge between performance and teaching.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.16}>
                <div>
                  <MiniCard
                    title="Grade 9 Piano — Honours"
                    detail="Repertoire · Sight-reading · Ear training · Musical interpretation"
                  />
                  <MiniCard
                    title="Piano Pedagogy Certificate — First Class Honours"
                    detail="Modern methodology · Technique development · Student progression systems"
                  />
                  <MiniCard
                    title="Private Instruction · Dubai"
                    detail="Beginners to intermediate · Individualized curricula · Authorized to teach independently in the UAE"
                  />
                </div>
              </FadeInUp>
            </div>

            {/* RIGHT: piano photograph */}
            <FadeInUp delay={0.1}>
              <PianoPhoto />
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* ── SHARED PHILOSOPHY ───────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#0A1A2F',
          padding: '7rem 2rem',
          borderTop: '2px solid rgba(212,175,55,0.15)',
          borderBottom: '2px solid rgba(212,175,55,0.15)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,175,55,0.03) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          <FadeInUp>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 700,
                color: '#F5F7FA',
                textAlign: 'center',
                lineHeight: 1.15,
                marginBottom: '1rem',
              }}
            >
              Why Medicine and Piano?
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.08}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
              <GoldDivider width="60px" />
            </div>
          </FadeInUp>

          <div
            className="phil-cols"
            style={{
              display: 'flex',
              gap: '1px',
              background: 'rgba(212,175,55,0.1)',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ flex: 1, minWidth: '220px', backgroundColor: '#0A1A2F' }}>
              <PhilosophyColumn
                icon={Target}
                title="Precision"
                body="Both demand thousands of repetitions until the hand obeys the mind without translation."
                delay={0.1}
              />
            </div>
            <div style={{ flex: 1, minWidth: '220px', backgroundColor: '#0A1A2F' }}>
              <PhilosophyColumn
                icon={Clock}
                title="Presence"
                body="Both collapse time into the single moment of execution — there is only now, the note, the incision."
                delay={0.18}
              />
            </div>
            <div style={{ flex: 1, minWidth: '220px', backgroundColor: '#0A1A2F' }}>
              <PhilosophyColumn
                icon={Sparkles}
                title="Transformation"
                body="Both change the person who receives the work — a patient restored, a listener moved."
                delay={0.26}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING ─────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#0F2340',
          padding: '7rem 2rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
          <FadeInUp>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)',
                color: '#F5F7FA',
                lineHeight: 1.65,
                marginBottom: '2.5rem',
              }}
            >
              "To practice medicine is to listen. To practice music is also to listen. The rest is
              craft."
            </p>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
              <GoldDivider width="60px" />
            </div>
          </FadeInUp>

          <FadeInUp delay={0.18}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-block',
                  padding: '0.875rem 2.5rem',
                  backgroundColor: 'transparent',
                  border: '1px solid #D4AF37',
                  color: '#D4AF37',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.72rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'background-color 0.25s ease, color 0.25s ease',
                }}
                onHoverStart={(e) => {
                  const el = e.target as HTMLElement;
                  el.style.backgroundColor = '#D4AF37';
                  el.style.color = '#0A1A2F';
                }}
                onHoverEnd={(e) => {
                  const el = e.target as HTMLElement;
                  el.style.backgroundColor = 'transparent';
                  el.style.color = '#D4AF37';
                }}
              >
                Get in Touch
              </motion.div>
            </Link>
          </FadeInUp>
        </div>
      </section>

      <style jsx global>{`
        @keyframes slowZoom {
          0%   { transform: scale(1.00); }
          100% { transform: scale(1.06); }
        }
        @media (max-width: 860px) {
          .two-col,
          .two-col-rev {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .phil-cols {
            flex-direction: column !important;
          }
        }
        @media (max-width: 768px) {
          .split-hero {
            grid-template-columns: 1fr !important;
            grid-template-rows: 1fr 1fr !important;
            height: auto !important;
          }
          .clinic-panel,
          .keys-panel {
            min-height: 260px;
          }
          .clinic-panel {
            border-right: none !important;
            border-bottom: 1px solid rgba(212,175,55,0.25) !important;
          }
          .clinic-bg,
          .keys-bg {
            background-position: center center !important;
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
