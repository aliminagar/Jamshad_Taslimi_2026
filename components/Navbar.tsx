'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Work', href: '/work' },
  { label: 'Passions', href: '/passions' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: isScrolled ? 'rgba(10, 26, 47, 0.92)' : 'rgba(10, 26, 47, 0.7)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
          transition: 'background-color 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1.5rem',
            height: '72px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link href="/" style={{ textDecoration: 'none' }}>
            <motion.span
              whileHover={{ scale: 1.05 }}
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#D4AF37',
                letterSpacing: '0.05em',
                cursor: 'pointer',
              }}
            >
              JT
            </motion.span>
          </Link>

          <div
            className="desktop-nav"
            style={{
              display: 'flex',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} style={{ textDecoration: 'none' }}>
                  <motion.span
                    style={{
                      position: 'relative',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase' as const,
                      color: isActive ? '#D4AF37' : '#B8C5D6',
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                      display: 'inline-block',
                      paddingBottom: '4px',
                    }}
                    whileHover={{ color: '#E6C558' }}
                  >
                    {link.label}
                    <motion.span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '1px',
                        backgroundColor: '#D4AF37',
                        transformOrigin: 'left',
                      }}
                      initial={{ scaleX: isActive ? 1 : 0 }}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    />
                  </motion.span>
                </Link>
              );
            })}
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#D4AF37',
              cursor: 'pointer',
              padding: '8px',
            }}
            aria-label="Toggle mobile menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99,
              backgroundColor: '#0A1A2F',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2.5rem',
            }}
          >
            <button
              onClick={() => setIsMobileOpen(false)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.5rem',
                background: 'none',
                border: 'none',
                color: '#D4AF37',
                cursor: 'pointer',
                padding: '8px',
              }}
            >
              <X size={28} />
            </button>

            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '2rem',
                fontWeight: 700,
                color: '#D4AF37',
                marginBottom: '1rem',
              }}
            >
              JT
            </div>

            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                >
                  <Link href={link.href} style={{ textDecoration: 'none' }}>
                    <span
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '2rem',
                        fontWeight: 600,
                        color: isActive ? '#D4AF37' : '#F5F7FA',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
