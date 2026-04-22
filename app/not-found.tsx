'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import GoldDivider from '@/components/GoldDivider';

export default function NotFound() {
  return (
    <div
      style={{
        backgroundColor: '#0A1A2F',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 60% at 50% 40%, rgba(212,175,55,0.05) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(6rem, 18vw, 14rem)',
          fontWeight: 800,
          color: '#D4AF37',
          lineHeight: 1,
          opacity: 0.18,
          position: 'absolute',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        404
      </motion.div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              color: '#D4AF37',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            // Error 404
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              color: '#F5F7FA',
              lineHeight: 1.1,
              marginBottom: '1rem',
            }}
          >
            Page Not Found
          </h1>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <GoldDivider width="60px" />
          </div>

          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
              color: '#B8C5D6',
              marginBottom: '3rem',
              maxWidth: '480px',
              lineHeight: 1.65,
            }}
          >
            This page, like a missed note, does not exist.
          </p>

          <Link href="/" style={{ textDecoration: 'none' }}>
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-block',
                padding: '0.875rem 2.5rem',
                backgroundColor: '#D4AF37',
                color: '#0A1A2F',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.72rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
              }}
              onHoverStart={(e) => {
                (e.target as HTMLElement).style.backgroundColor = '#E6C558';
              }}
              onHoverEnd={(e) => {
                (e.target as HTMLElement).style.backgroundColor = '#D4AF37';
              }}
            >
              Return Home
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
