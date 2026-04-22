'use client';

import { motion, useInView, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Star, X } from 'lucide-react';
import SectionLabel from '@/components/SectionLabel';
import GoldDivider from '@/components/GoldDivider';
import FadeInUp from '@/components/FadeInUp';

/* ── MEDAL SVG ─────────────────────────────────────────────────────── */
function MedalSVG() {
  return (
    <motion.div
      style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      animate={{ rotateY: [0, 8, 0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg
        width="220"
        height="300"
        viewBox="0 0 220 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(0 12px 40px rgba(212,175,55,0.35))' }}
      >
        <defs>
          <linearGradient id="ribbonGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#B8001F" />
            <stop offset="50%" stopColor="#D4002A" />
            <stop offset="100%" stopColor="#8A0015" />
          </linearGradient>
          <linearGradient id="goldSheen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F5C542" />
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#E8C84A" />
            <stop offset="100%" stopColor="#A8831E" />
          </linearGradient>
          <linearGradient id="goldEdge" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F5E070" />
            <stop offset="40%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8A6B1A" />
          </linearGradient>
          <linearGradient id="goldInner" x1="0.2" y1="0.1" x2="0.8" y2="0.9">
            <stop offset="0%" stopColor="#FFF0A0" />
            <stop offset="30%" stopColor="#E8C84A" />
            <stop offset="60%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#A8831E" />
          </linearGradient>
          <radialGradient id="shimmer" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="rgba(255,245,180,0.55)" />
            <stop offset="60%" stopColor="rgba(212,175,55,0.1)" />
            <stop offset="100%" stopColor="rgba(168,131,30,0)" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ribbon left */}
        <rect x="80" y="0" width="24" height="100" rx="3" fill="url(#ribbonGrad)" />
        {/* ribbon right */}
        <rect x="116" y="0" width="24" height="100" rx="3" fill="url(#ribbonGrad)" />
        {/* ribbon overlap center */}
        <rect x="98" y="0" width="24" height="80" rx="3" fill="#D4002A" opacity="0.85" />

        {/* medal outer ring */}
        <circle cx="110" cy="190" r="100" fill="url(#goldEdge)" />
        {/* medal face */}
        <circle cx="110" cy="190" r="90" fill="url(#goldSheen)" />
        {/* medal inner ring */}
        <circle cx="110" cy="190" r="80" fill="none" stroke="url(#goldEdge)" strokeWidth="3.5" />
        {/* medal inner bg */}
        <circle cx="110" cy="190" r="76" fill="url(#goldInner)" />

        {/* laurel wreath left */}
        {[...Array(7)].map((_, i) => {
          const angle = -60 + i * 20;
          const rad = (angle * Math.PI) / 180;
          const cx = 110 + Math.cos(rad) * 60;
          const cy = 190 + Math.sin(rad) * 60;
          return (
            <ellipse
              key={`l${i}`}
              cx={cx}
              cy={cy}
              rx="9"
              ry="5"
              fill="#8A6B1A"
              opacity="0.7"
              transform={`rotate(${angle + 90}, ${cx}, ${cy})`}
            />
          );
        })}
        {/* laurel wreath right */}
        {[...Array(7)].map((_, i) => {
          const angle = -120 + i * -20;
          const rad = (angle * Math.PI) / 180;
          const cx = 110 + Math.cos(rad) * 60;
          const cy = 190 + Math.sin(rad) * 60;
          return (
            <ellipse
              key={`r${i}`}
              cx={cx}
              cy={cy}
              rx="9"
              ry="5"
              fill="#8A6B1A"
              opacity="0.7"
              transform={`rotate(${angle - 90}, ${cx}, ${cy})`}
            />
          );
        })}

        {/* №1 text */}
        <text
          x="110"
          y="178"
          textAnchor="middle"
          fontFamily="'Playfair Display', serif"
          fontSize="18"
          fontWeight="800"
          fill="#3A2800"
          letterSpacing="1"
        >
          №
        </text>
        <text
          x="110"
          y="212"
          textAnchor="middle"
          fontFamily="'Playfair Display', serif"
          fontSize="40"
          fontWeight="900"
          fill="#3A2800"
          letterSpacing="-1"
        >
          1
        </text>

        {/* shimmer overlay */}
        <circle cx="110" cy="190" r="90" fill="url(#shimmer)" />

        {/* top connector */}
        <rect x="98" y="88" width="24" height="18" rx="4" fill="url(#goldEdge)" />
      </svg>

      {/* rotating shimmer pulse */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          bottom: '12px',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background:
            'conic-gradient(from 0deg, transparent 0%, rgba(212,175,55,0.18) 20%, transparent 40%)',
          pointerEvents: 'none',
        }}
      />
    </motion.div>
  );
}

/* ── ANIMATED COUNTER ──────────────────────────────────────────────── */
function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [displayed, setDisplayed] = useState('0');

  useEffect(() => {
    if (!isInView) return;
    const num = parseInt(value.replace(/\D/g, ''));
    const suffix = value.replace(/[\d]/g, '');
    if (!num) { setDisplayed(value); return; }
    let start = 0;
    const step = Math.max(1, Math.floor(num / 40));
    const interval = setInterval(() => {
      start += step;
      if (start >= num) { setDisplayed(`${num}${suffix}`); clearInterval(interval); }
      else setDisplayed(`${start}${suffix}`);
    }, 30);
    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: '#152C4D',
        border: '1px solid rgba(212,175,55,0.15)',
        padding: '2.25rem 2rem',
        textAlign: 'center',
        flex: '1',
        minWidth: '0',
        transition: 'border-color 0.3s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)')}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(212,175,55,0.15)')}
    >
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
          fontWeight: 800,
          color: '#D4AF37',
          lineHeight: 1,
          marginBottom: '0.5rem',
        }}
      >
        {isInView ? displayed : '0'}
      </div>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.68rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#B8C5D6',
        }}
      >
        {label}
      </div>
    </div>
  );
}

/* ── TIMELINE ENTRY ────────────────────────────────────────────────── */
function TimelineEntry({
  date,
  title,
  institution,
  description,
  side,
  isApex,
  index,
}: {
  date: string;
  title: string;
  institution: string;
  description: string;
  side: 'left' | 'right';
  isApex?: boolean;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div
      ref={ref}
      className="timeline-entry"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 48px 1fr',
        gap: 0,
        minHeight: '120px',
        position: 'relative',
      }}
    >
      {/* LEFT CONTENT */}
      <div
        style={{
          padding: '0 2.5rem 2.5rem 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      >
        {side === 'left' && (
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              backgroundColor: '#0F2340',
              border: '1px solid rgba(212,175,55,0.15)',
              borderLeft: '3px solid #D4AF37',
              padding: '1.5rem 1.75rem',
              maxWidth: '420px',
              width: '100%',
              textAlign: 'right',
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                color: '#D4AF37',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
              }}
            >
              {date}
            </div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.15rem',
                fontWeight: 700,
                color: '#F5F7FA',
                marginBottom: '0.3rem',
                lineHeight: 1.25,
              }}
            >
              {title}
            </h3>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8rem',
                color: '#D4AF37',
                marginBottom: '0.75rem',
              }}
            >
              {institution}
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.83rem',
                color: '#B8C5D6',
                lineHeight: 1.7,
              }}
            >
              {description}
            </p>
          </motion.div>
        )}
        {side === 'right' && (
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.7rem',
              color: 'rgba(212,175,55,0.3)',
              letterSpacing: '0.1em',
            }}
          />
        )}
      </div>

      {/* CENTER — dot + line */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '1px',
            backgroundColor: 'rgba(212,175,55,0.2)',
          }}
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.08 + 0.1 }}
          style={{
            position: 'relative',
            zIndex: 1,
            marginTop: '1.5rem',
            width: isApex ? '20px' : '14px',
            height: isApex ? '20px' : '14px',
            borderRadius: '50%',
            backgroundColor: isApex ? '#D4AF37' : '#0A1A2F',
            border: `2px solid ${isApex ? '#F5C542' : '#D4AF37'}`,
            boxShadow: isApex ? '0 0 16px rgba(212,175,55,0.6)' : '0 0 8px rgba(212,175,55,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {isApex && <Star size={10} color="#0A1A2F" fill="#0A1A2F" />}
        </motion.div>
      </div>

      {/* RIGHT CONTENT */}
      <div
        style={{
          padding: '0 0 2.5rem 2.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        {side === 'right' && (
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              backgroundColor: '#0F2340',
              border: '1px solid rgba(212,175,55,0.15)',
              borderRight: '3px solid #D4AF37',
              padding: '1.5rem 1.75rem',
              maxWidth: '420px',
              width: '100%',
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                color: '#D4AF37',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
              }}
            >
              {date}
            </div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.15rem',
                fontWeight: 700,
                color: '#F5F7FA',
                marginBottom: '0.3rem',
                lineHeight: 1.25,
              }}
            >
              {title}
            </h3>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8rem',
                color: '#D4AF37',
                marginBottom: '0.75rem',
              }}
            >
              {institution}
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.83rem',
                color: '#B8C5D6',
                lineHeight: 1.7,
              }}
            >
              {description}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ── CERTIFICATE LIGHTBOX ──────────────────────────────────────────── */
function CertLightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(10,26,47,0.95)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5vh 5vw',
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Certificate full size view"
    >
      <button
        ref={closeRef}
        onClick={onClose}
        aria-label="Close certificate view"
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          background: 'none',
          border: '1px solid rgba(212,175,55,0.4)',
          borderRadius: '50%',
          width: '44px',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#D4AF37',
          cursor: 'pointer',
          transition: 'background 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(212,175,55,0.15)')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
      >
        <X size={20} />
      </button>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '90vw',
          maxHeight: '90vh',
          padding: '10px',
          backgroundColor: '#F5F2E8',
          border: '2px solid #D4AF37',
          boxShadow: '0 0 80px rgba(212,175,55,0.35)',
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{ display: 'block', maxWidth: '100%', maxHeight: 'calc(90vh - 20px)', objectFit: 'contain' }}
        />
      </motion.div>
    </motion.div>
  );
}

/* ── CERT FRAME ────────────────────────────────────────────────────── */
function CertFrame({
  src,
  alt,
  caption,
  date,
  shine,
  onOpen,
}: {
  src: string;
  alt: string;
  caption: string;
  date: string;
  shine: boolean;
  onOpen: () => void;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      <div style={{ position: 'relative', width: '100%' }}>
        {shine && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 2,
              background: 'linear-gradient(105deg, transparent 25%, rgba(212,175,55,0.4) 50%, transparent 75%)',
              animation: 'certShine 1.5s ease-out forwards',
              pointerEvents: 'none',
              borderRadius: '2px',
            }}
          />
        )}
        <button
          onClick={onOpen}
          aria-label="View certificate at full size"
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 60px rgba(212,175,55,0.32)')}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 0 60px rgba(212,175,55,0.18)')}
          style={{
            display: 'block',
            width: '100%',
            border: '2px solid #D4AF37',
            padding: '10px',
            backgroundColor: '#F5F2E8',
            cursor: 'zoom-in',
            outline: 'none',
            boxShadow: '0 0 60px rgba(212,175,55,0.18)',
            transition: 'box-shadow 400ms',
            position: 'relative',
          }}
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: '4/3', objectFit: 'cover' }}
          />
        </button>
      </div>

      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.6875rem',
          letterSpacing: '0.15em',
          color: '#D4AF37',
          textTransform: 'uppercase',
          textAlign: 'center',
        }}
      >
        {caption}
      </div>
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: 'italic',
          fontSize: '0.8125rem',
          color: '#B8C5D6',
          textAlign: 'center',
        }}
      >
        {date}
      </div>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.625rem',
          letterSpacing: '0.1em',
          color: 'rgba(184,197,214,0.7)',
          textTransform: 'uppercase',
          textAlign: 'center',
        }}
      >
        Click to Enlarge
      </div>
    </div>
  );
}

/* ── MUSIC CREDENTIALS CARD ────────────────────────────────────────── */
function MusicCredentialsCard({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [lightbox, setLightbox] = useState<null | 'grade9' | 'pedagogy'>(null);
  const [frameShine, setFrameShine] = useState(false);

  useEffect(() => {
    if (isInView && !frameShine) {
      const t = setTimeout(() => setFrameShine(true), 300);
      return () => clearTimeout(t);
    }
  }, [isInView, frameShine]);

  return (
    <>
      <div ref={ref} style={{ display: 'grid', gridTemplateColumns: '1fr 48px 1fr', gap: 0, minHeight: '120px', position: 'relative' }}>
        {/* LEFT spacer */}
        <div style={{ padding: '0 2.5rem 2.5rem 0' }} />

        {/* CENTER dot + line */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, bottom: 0, width: '1px', backgroundColor: 'rgba(212,175,55,0.2)' }} />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.08 + 0.1 }}
            style={{
              position: 'relative',
              zIndex: 1,
              marginTop: '1.5rem',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              backgroundColor: '#0A1A2F',
              border: '2px solid #D4AF37',
              boxShadow: '0 0 8px rgba(212,175,55,0.3)',
            }}
          />
        </div>

        {/* RIGHT — expanded card */}
        <div style={{ padding: '0 0 2.5rem 2.5rem' }}>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              backgroundColor: '#0F2340',
              border: '1px solid rgba(212,175,55,0.25)',
              borderRight: '3px solid #D4AF37',
              borderRadius: '4px',
              padding: '40px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              transition: 'border-color 400ms',
              width: '180%',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,175,55,0.4)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,175,55,0.25)')}
          >
            {/* ROW 1 — Dual certificate display */}
            <div className="cert-dual-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'start' }}>
              {/* Certificate A — Grade 9 */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 + 0.1 }}
              >
                <CertFrame
                  src="/Jamshad_Taslimi_-_Grade_9_Certificate.jpg"
                  alt="Grade 9 Piano Certificate with Honours, awarded to Jamshad Taslimi by the British Columbia Conservatory of Music, August 28, 2025"
                  caption="Grade 9 Piano · Honours"
                  date="August 28, 2025"
                  shine={frameShine}
                  onOpen={() => setLightbox('grade9')}
                />
              </motion.div>

              {/* Certificate B — Piano Pedagogy */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 + 0.3 }}
              >
                <CertFrame
                  src="/Jamshad_Taslimi_-_Piano_Pedagogy_Certificate.jpg"
                  alt="Piano Pedagogy Certificate with First Class Honours, awarded to Jamshad Taslimi by the British Columbia Conservatory of Music, November 6, 2025"
                  caption="Piano Pedagogy · First Class Honours"
                  date="November 6, 2025"
                  shine={frameShine}
                  onOpen={() => setLightbox('pedagogy')}
                />
              </motion.div>
            </div>

            {/* ROW 2 — Unified credential block */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 + 0.5 }}
              className="cert-cred-block"
              style={{
                display: 'flex',
                gap: '32px',
                alignItems: 'flex-start',
                borderTop: '1px solid rgba(212,175,55,0.12)',
                paddingTop: '28px',
              }}
            >
              {/* Left — label + heading */}
              <div className="cert-cred-left" style={{ flexShrink: 0, width: '35%' }}>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    color: '#D4AF37',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                  }}
                >
                  // Verified Credentials
                </div>
                <div style={{ width: '30px', height: '1px', backgroundColor: '#D4AF37', marginBottom: '14px' }} />
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#F5F7FA',
                    margin: '0 0 6px',
                    lineHeight: 1.15,
                  }}
                >
                  Music Credentials
                </h3>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: 'italic',
                    fontSize: '1.125rem',
                    color: '#D4AF37',
                    margin: '0 0 12px',
                  }}
                >
                  Performer &amp; Pedagogue
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#B8C5D6', margin: '0 0 4px' }}>
                  British Columbia Conservatory of Music
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontStyle: 'italic', fontSize: '0.75rem', color: '#B8C5D6', margin: 0, lineHeight: 1.5 }}>
                  Accredited by the B.C. Ministry of Education, Province of British Columbia, Canada
                </p>
              </div>

              {/* Right — description + tags */}
              <div className="cert-cred-right" style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9375rem',
                    color: '#B8C5D6',
                    lineHeight: 1.6,
                    margin: '0 0 16px',
                  }}
                >
                  Two formal credentials from the British Columbia Conservatory of Music — one certifying
                  advanced performance ability through the Grade 9 examination, the other certifying
                  pedagogical command of modern piano teaching methodology. Together they form the dual
                  foundation behind every lesson he now delivers: the musician who has done the work,
                  and the teacher who knows how to transmit it.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['Performer', 'Teacher', 'First Class', 'Honours', 'BCCM Certified'].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '6px 12px',
                        border: '1px solid rgba(212,175,55,0.4)',
                        borderRadius: '2px',
                        backgroundColor: 'transparent',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.625rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#D4AF37',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Lightboxes */}
      {lightbox === 'grade9' && (
        <CertLightbox
          src="/Jamshad_Taslimi_-_Grade_9_Certificate.jpg"
          alt="Grade 9 Piano Certificate with Honours, awarded to Jamshad Taslimi by the British Columbia Conservatory of Music, August 28, 2025"
          onClose={() => setLightbox(null)}
        />
      )}
      {lightbox === 'pedagogy' && (
        <CertLightbox
          src="/Jamshad_Taslimi_-_Piano_Pedagogy_Certificate.jpg"
          alt="Piano Pedagogy Certificate with First Class Honours, awarded to Jamshad Taslimi by the British Columbia Conservatory of Music, November 6, 2025"
          onClose={() => setLightbox(null)}
        />
      )}

      <style jsx global>{`
        @keyframes certShine {
          0%   { background-position: 200% 0; opacity: 1; }
          100% { background-position: -200% 0; opacity: 0; }
        }
        @media (max-width: 768px) {
          .cert-dual-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .cert-cred-block {
            flex-direction: column !important;
            gap: 20px !important;
          }
          .cert-cred-left {
            width: 100% !important;
          }
        }
      `}</style>
    </>
  );
}

/* ── TIMELINE DATA ─────────────────────────────────────────────────── */
const timelineEntries = [
  {
    date: '2018 – 2025',
    title: 'Doctor of Medicine (MD)',
    institution: 'Tehran University of Medical Sciences',
    description:
      '7 years of rigorous academic and clinical training across internal medicine, surgery, pediatrics, OB-GYN, emergency medicine, and psychiatry. One of the most competitive medical programs in the region.',
    side: 'left' as const,
    isApex: false,
  },
  {
    date: '2024 – 2025',
    title: 'Piano Pedagogy Certificate — First Class Honours',
    institution: 'British Columbia Conservatory of Music',
    description:
      'Formal training in modern piano teaching methodologies, technique development, structured student progression systems, and assessment frameworks for beginner through advanced learners.',
    side: 'right' as const,
    isApex: false,
  },
  {
    date: '2017 – 2025',
    title: 'Chemistry Olympiad Coach',
    institution: 'Allameh Helli School & Leading Institutes',
    description:
      'Mentored numerous students to gold and silver medals in national and international Chemistry Olympiads. Specialized in conceptual depth, analytical reasoning, and structured problem-solving curricula.',
    side: 'right' as const,
    isApex: false,
  },
  {
    date: 'National Achievement',
    title: 'National Rank 1 — Iranian Chemistry Olympiad',
    institution: 'Gold Medal · Top 0.01% Nationally',
    description:
      'The apex of academic competition — selected as the top student in Iran across all chemistry disciplines through a rigorous multi-stage national examination process.',
    side: 'left' as const,
    isApex: true,
  },
];

/* ── PAGE ──────────────────────────────────────────────────────────── */
export default function AchievementsPage() {
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
            top: 0,
            right: 0,
            width: '50%',
            height: '100%',
            background: 'radial-gradient(ellipse at top right, rgba(212,175,55,0.05) 0%, transparent 65%)',
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
            <span style={{ opacity: 0.5 }}>//</span> Distinctions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.75rem, 5vw, 4.5rem)',
              fontWeight: 800,
              color: '#F5F7FA',
              lineHeight: 1.05,
              marginBottom: '1rem',
            }}
          >
            A Record of Excellence
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
              fontSize: 'clamp(1rem, 1.6vw, 1.25rem)',
              color: '#D4AF37',
              maxWidth: '560px',
              lineHeight: 1.55,
            }}
          >
            "From Olympiad gold to mentoring the next generation of medalists."
          </motion.p>
        </div>
      </section>

      {/* ── HERO ACHIEVEMENT ────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#0A1A2F', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <FadeInUp>
            <div
              style={{
                backgroundColor: '#0F2340',
                borderTop: '2px solid #D4AF37',
                borderBottom: '2px solid #D4AF37',
                border: '1px solid rgba(212,175,55,0.2)',
                borderTopWidth: '2px',
                borderBottomWidth: '2px',
                padding: '3.5rem',
                display: 'grid',
                gridTemplateColumns: '280px 1fr',
                gap: '4rem',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
              className="hero-achievement"
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'radial-gradient(ellipse 60% 80% at 10% 50%, rgba(212,175,55,0.05) 0%, transparent 60%)',
                  pointerEvents: 'none',
                }}
              />

              {/* medal */}
              <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                <MedalSVG />
              </div>

              {/* content */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.65rem',
                    letterSpacing: '0.22em',
                    color: '#D4AF37',
                    textTransform: 'uppercase',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: '#D4AF37',
                      borderRadius: '50%',
                      boxShadow: '0 0 8px rgba(212,175,55,0.8)',
                    }}
                  />
                  National Rank 1 · Iran
                </div>

                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(2.5rem, 4.5vw, 4rem)',
                    fontWeight: 800,
                    color: '#F5F7FA',
                    lineHeight: 1.0,
                    marginBottom: '0.35rem',
                  }}
                >
                  Gold Medalist
                </h2>

                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: 'italic',
                    fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                    color: '#D4AF37',
                    marginBottom: '1.25rem',
                    lineHeight: 1.3,
                  }}
                >
                  National Chemistry Olympiad
                </div>

                <GoldDivider width="50px" />

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.975rem',
                    color: '#B8C5D6',
                    lineHeight: 1.8,
                    maxWidth: '560px',
                    margin: '1.25rem 0 2rem',
                  }}
                >
                  Achieved National Rank 1 in Iran's most competitive scientific examination.
                  Demonstrated exceptional mastery across organic, inorganic, analytical, and
                  physical chemistry — selected among the nation's top-performing students
                  through a multi-stage elimination process.
                </p>

                {/* stat pills */}
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {['Rank #1 Nationally', '4 Chemistry Disciplines', 'Top 0.01% Percentile'].map(
                    (pill) => (
                      <div
                        key={pill}
                        style={{
                          backgroundColor: 'rgba(212,175,55,0.1)',
                          border: '1px solid rgba(212,175,55,0.3)',
                          padding: '0.45rem 1rem',
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.68rem',
                          letterSpacing: '0.1em',
                          color: '#D4AF37',
                          textTransform: 'uppercase',
                        }}
                      >
                        {pill}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ── TIMELINE ────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#0F2340',
          padding: '6rem 2rem',
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
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span style={{ opacity: 0.5 }}>//</span> Credentials & Distinctions
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 700,
                color: '#F5F7FA',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}
            >
              Timeline of Distinctions
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.12}>
            <GoldDivider width="60px" />
          </FadeInUp>

          {/* timeline container */}
          <div style={{ marginTop: '4rem' }}>
            {timelineEntries.map((entry, i) =>
              entry.title.startsWith('Piano Pedagogy Certificate') ? (
                <MusicCredentialsCard key={i} index={i} />
              ) : (
                <TimelineEntry key={i} {...entry} index={i} />
              )
            )}
          </div>
        </div>
      </section>

      {/* ── MENTORSHIP IMPACT ────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#0A1A2F', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <FadeInUp>
            <div
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
              <span style={{ opacity: 0.5 }}>//</span> Multiplier Effect
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 700,
                color: '#F5F7FA',
                lineHeight: 1.15,
                marginBottom: '1.5rem',
                maxWidth: '560px',
              }}
            >
              Teaching the Medalists
              <br />
              of Tomorrow
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.12}>
            <GoldDivider width="60px" />
          </FadeInUp>

          <FadeInUp delay={0.18}>
            <div
              className="stat-row"
              style={{
                display: 'flex',
                gap: '1.5rem',
                marginTop: '3rem',
                flexWrap: 'wrap',
              }}
            >
              <AnimatedStat value="8+" label="Years Coaching at Olympiad Level" />
              <AnimatedStat value="Numerous" label="Students Awarded Gold & Silver Medals" />
              <AnimatedStat value="4" label="Chemistry Domains: Organic · Inorganic · Analytical · Physical" />
            </div>
          </FadeInUp>

          <FadeInUp delay={0.22}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1rem',
                color: '#B8C5D6',
                lineHeight: 1.85,
                maxWidth: '720px',
                marginTop: '2.5rem',
              }}
            >
              Specialized in national and international Chemistry Olympiad preparation —
              designing rigorous curricula focused on deep conceptual understanding, analytical
              reasoning, and advanced problem-solving. Recognized for simplifying complex
              scientific concepts and cultivating independent critical thinking.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ── CLOSING QUOTE ───────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#0F2340',
          padding: '7rem 2rem',
          borderTop: '1px solid rgba(212,175,55,0.1)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative' }}>
          <FadeInUp>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(4rem, 8vw, 7rem)',
                color: 'rgba(212,175,55,0.15)',
                lineHeight: 0.7,
                marginBottom: '1rem',
                userSelect: 'none',
              }}
            >
              "
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <blockquote
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
                fontWeight: 600,
                color: '#D4AF37',
                lineHeight: 1.55,
                margin: '0 0 1.5rem',
              }}
            >
              Excellence is not an accident. It is the result of high intention,
              sincere effort, and intelligent execution.
            </blockquote>
          </FadeInUp>

          <FadeInUp delay={0.18}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <GoldDivider width="48px" />
            </div>
          </FadeInUp>

          <FadeInUp delay={0.22}>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.68rem',
                letterSpacing: '0.18em',
                color: '#B8C5D6',
                textTransform: 'uppercase',
              }}
            >
              — A Teaching Philosophy
            </p>
          </FadeInUp>
        </div>
      </section>

      <style jsx global>{`
        @media (max-width: 860px) {
          .hero-achievement {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .timeline-entry {
            grid-template-columns: 0 28px 1fr !important;
          }
          .timeline-entry > div:first-child {
            display: none !important;
          }
          .timeline-entry > div:last-child {
            padding-left: 1.5rem !important;
          }
          .stat-row {
            flex-direction: column !important;
          }
        }
      `}</style>
    </div>
  );
}
