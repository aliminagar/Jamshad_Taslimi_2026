'use client';

import Link from 'next/link';
import { Mail, MapPin, Linkedin } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Work', href: '/work' },
  { label: 'Passions', href: '/passions' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#0F2340',
        borderTop: '1px solid rgba(212, 175, 55, 0.2)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem 1.5rem 2rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '3rem',
            marginBottom: '3rem',
          }}
          className="footer-grid"
        >
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.75rem',
                fontWeight: 700,
                color: '#D4AF37',
                marginBottom: '0.75rem',
              }}
            >
              Jamshad Taslimi
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9rem',
                color: '#B8C5D6',
                lineHeight: 1.7,
                maxWidth: '260px',
              }}
            >
              Physician. Educator. Pianist. A life at the intersection of science, scholarship, and art.
            </p>
          </div>

          <div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase' as const,
                color: '#D4AF37',
                marginBottom: '1.25rem',
              }}
            >
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <a
                href="mailto:jamshadtaslimi@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  color: '#B8C5D6',
                  textDecoration: 'none',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E6C558')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#B8C5D6')}
              >
                <Mail size={15} style={{ color: '#D4AF37', flexShrink: 0 }} />
                jamshadtaslimi@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/jamshad-taslimi-56b885378"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  color: '#B8C5D6',
                  textDecoration: 'none',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E6C558')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#B8C5D6')}
              >
                <Linkedin size={15} style={{ color: '#D4AF37', flexShrink: 0 }} />
                linkedin.com/in/jamshad-taslimi
              </a>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  color: '#B8C5D6',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                }}
              >
                <MapPin size={15} style={{ color: '#D4AF37', flexShrink: 0 }} />
                Jumeirah Village Circle, Dubai, UAE
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase' as const,
                color: '#D4AF37',
                marginBottom: '1.25rem',
              }}
            >
              Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: '#B8C5D6',
                    textDecoration: 'none',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.875rem',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#E6C558')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#B8C5D6')}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: 'rgba(212, 175, 55, 0.15)',
            marginBottom: '1.5rem',
          }}
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.7rem',
              color: '#B8C5D6',
              opacity: 0.6,
              letterSpacing: '0.05em',
            }}
          >
            &copy; {currentYear} Jamshad Taslimi. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.7rem',
              color: '#B8C5D6',
              opacity: 0.4,
              letterSpacing: '0.05em',
            }}
          >
            Dubai, UAE
          </p>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
