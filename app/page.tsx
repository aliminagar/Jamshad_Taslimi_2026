'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Stethoscope, Award, Music, GraduationCap, BookOpen, Brain, FlaskConical } from 'lucide-react';
import SectionLabel from '@/components/SectionLabel';
import GoldDivider from '@/components/GoldDivider';
import FadeInUp from '@/components/FadeInUp';

const identityPillars = [
  {
    icon: Stethoscope,
    label: 'Medical Doctor',
    description: 'MD · Tehran University of Medical Sciences',
  },
  {
    icon: Award,
    label: 'Gold Medalist',
    description: 'National Academic Olympiad Champion',
  },
  {
    icon: Music,
    label: 'Certified Pianist',
    description: 'BC Conservatory of Music — Distinction',
  },
  {
    icon: GraduationCap,
    label: 'Olympiad Coach',
    description: 'Chemistry & Sciences — Medallist Students',
  },
];

const competencyCards = [
  {
    icon: BookOpen,
    label: 'Education & Teaching',
    heading: 'Pedagogy & Performance',
    bullets: [
      'Advanced Piano Instruction',
      'Pedagogy & Curriculum Design',
      'Olympiad-Level Chemistry',
      'Student-Centered Methodology',
      'Performance Coaching',
    ],
  },
  {
    icon: Stethoscope,
    label: 'Medical & Clinical',
    heading: 'Clinical Excellence',
    bullets: [
      'Clinical Patient Assessment',
      'Inpatient & Outpatient Care',
      'EMR Systems Proficiency',
      'High-Pressure Decision-Making',
      'Multidisciplinary Collaboration',
    ],
  },
  {
    icon: Brain,
    label: 'Analytical & Cognitive',
    heading: 'Scientific Reasoning',
    bullets: [
      'Scientific Reasoning',
      'Complex Systems Thinking',
      'Conceptual Teaching',
      'Knowledge Transfer',
      'Problem-Solving',
    ],
  },
];

export default function HomePage() {
  return (
    <div style={{ backgroundColor: '#0A1A2F', minHeight: '100vh' }}>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '72px',
        }}
      >
        {/* animated background blobs */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.04, 0.07, 0.04] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '15%',
            right: '-5%',
            width: '55vw',
            height: '55vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212,175,55,1) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.06, 1], opacity: [0.03, 0.055, 0.03] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{
            position: 'absolute',
            bottom: '5%',
            left: '-10%',
            width: '40vw',
            height: '40vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212,175,55,1) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <div
          className="hero-grid"
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '5rem 2rem',
            display: 'grid',
            gridTemplateColumns: '60% 40%',
            gap: '4rem',
            alignItems: 'center',
            width: '100%',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                marginBottom: '1.75rem',
              }}
            >
              <span style={{ width: '28px', height: '1px', backgroundColor: '#D4AF37', display: 'block' }} />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.68rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#D4AF37',
                }}
              >
                Physician · Educator · Pianist
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(3.5rem, 5.5vw, 6rem)',
                fontWeight: 800,
                color: '#F5F7FA',
                lineHeight: 1.0,
                letterSpacing: '-0.01em',
                marginBottom: '1.1rem',
              }}
            >
              Jamshad
              <br />
              Taslimi
              <span style={{ color: '#D4AF37' }}>, MD</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: 'clamp(1.2rem, 1.8vw, 1.4rem)',
                color: '#D4AF37',
                marginBottom: '1.5rem',
                lineHeight: 1.4,
              }}
            >
              "Where medicine, music, and the mind converge."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              style={{ transformOrigin: 'left', marginBottom: '1.75rem' }}
            >
              <GoldDivider width="72px" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1.05rem',
                color: '#B8C5D6',
                lineHeight: 1.75,
                maxWidth: '500px',
                marginBottom: '2.5rem',
              }}
            >
              A multidisciplinary clinician, educator, and musician — bridging science,
              medicine, and the arts with clinical precision and artistic depth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <Link href="/achievements" style={{ textDecoration: 'none' }}>
                <motion.button
                  whileHover={{ scale: 1.03, backgroundColor: '#E6C558' }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    backgroundColor: '#D4AF37',
                    color: '#0A1A2F',
                    border: 'none',
                    padding: '0.9rem 2rem',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.825rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'background-color 0.2s ease',
                  }}
                >
                  Explore Achievements
                  <ArrowRight size={15} />
                </motion.button>
              </Link>

              <Link href="/passions" style={{ textDecoration: 'none' }}>
                <motion.button
                  whileHover={{ scale: 1.03, borderColor: '#D4AF37', backgroundColor: 'rgba(212,175,55,0.06)' }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#D4AF37',
                    border: '1px solid rgba(212, 175, 55, 0.45)',
                    padding: '0.9rem 2rem',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  My Passions
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
          >
            {/* decorative JT monogram behind */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(8rem, 14vw, 16rem)',
                fontWeight: 800,
                color: 'rgba(212, 175, 55, 0.08)',
                userSelect: 'none',
                pointerEvents: 'none',
                zIndex: 0,
                lineHeight: 1,
                letterSpacing: '-0.05em',
              }}
            >
              JT
            </div>

            <div
              style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                maxWidth: '380px',
                aspectRatio: '3 / 4',
                boxShadow: '0 0 60px rgba(212,175,55,0.15), 0 24px 64px rgba(0,0,0,0.55)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/Jamshad_Taslimi.JPG"
                alt="Jamshad Taslimi"
                fill
                priority
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent 55%, rgba(10,26,47,0.55) 100%)',
                }}
              />
            </div>

            {/* floating credential badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              style={{
                position: 'absolute',
                bottom: '-1rem',
                left: '-1.5rem',
                backgroundColor: '#0F2340',
                border: '1px solid rgba(212,175,55,0.25)',
                padding: '0.9rem 1.1rem',
                zIndex: 2,
                minWidth: '160px',
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#D4AF37',
                  marginBottom: '0.2rem',
                }}
              >
                Currently Based In
              </div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '0.9rem',
                  color: '#F5F7FA',
                  fontWeight: 600,
                }}
              >
                Dubai, UAE
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* scroll indicator */}
        <div
          style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '1px',
              height: '52px',
              background: 'linear-gradient(to bottom, rgba(212,175,55,0.7), transparent)',
              margin: '0 auto',
            }}
          />
        </div>
      </section>

      {/* ── IDENTITY STRIP ──────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#0F2340',
          borderTop: '1px solid rgba(212,175,55,0.12)',
          borderBottom: '1px solid rgba(212,175,55,0.12)',
        }}
      >
        <div
          style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}
        >
          <div className="identity-strip" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
            {identityPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              const isLast = i === identityPillars.length - 1;
              return (
                <div
                  key={pillar.label}
                  style={{
                    padding: '2.25rem 1.75rem',
                    borderRight: isLast ? 'none' : '1px solid rgba(212,175,55,0.12)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    transition: 'background-color 0.25s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(212,175,55,0.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <Icon size={22} color="#D4AF37" />
                  <div>
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.75rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: '#D4AF37',
                        marginBottom: '0.3rem',
                      }}
                    >
                      {pillar.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.9rem',
                        color: '#B8C5D6',
                        lineHeight: 1.5,
                      }}
                    >
                      {pillar.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROFESSIONAL SUMMARY ────────────────────────────────────── */}
      <section
        style={{ backgroundColor: '#0A1A2F', padding: '7rem 2rem', position: 'relative', overflow: 'hidden' }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: '70vw',
            height: '70vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212,175,55,0.03) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          <FadeInUp>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: '#D4AF37',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span style={{ opacity: 0.5 }}>//</span> 01 · Profile
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '3rem',
                fontWeight: 700,
                color: '#F5F7FA',
                lineHeight: 1.15,
                marginBottom: '1.5rem',
                maxWidth: '700px',
              }}
            >
              A Rare Convergence
              <br />
              of Disciplines
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.15}>
            <GoldDivider width="60px" />
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div
              className="summary-cols"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                marginTop: '2.5rem',
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1.1rem',
                  color: '#B8C5D6',
                  lineHeight: 1.85,
                }}
              >
                Multidisciplinary clinician, educator, and musician with a Doctor of Medicine (MD)
                from Tehran University of Medical Sciences, complemented by advanced training in
                piano performance and certified piano pedagogy from the British Columbia Conservatory
                of Music.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1.1rem',
                  color: '#B8C5D6',
                  lineHeight: 1.85,
                }}
              >
                Bridging science, medicine, and the arts — bringing clinical reasoning, analytical
                depth, and refined teaching methodology. Currently based in Dubai, offering
                professional piano instruction and academic tutoring. Authorized to work
                independently in the UAE — no sponsorship required.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ── CORE COMPETENCIES ───────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#0F2340',
          padding: '7rem 2rem',
          borderTop: '1px solid rgba(212,175,55,0.1)',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <FadeInUp>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: '#D4AF37',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span style={{ opacity: 0.5 }}>//</span> 02 · Core Competencies
            </div>
          </FadeInUp>

          <FadeInUp delay={0.08}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '3.2rem',
                fontWeight: 700,
                color: '#F5F7FA',
                lineHeight: 1.15,
                marginBottom: '1.5rem',
                maxWidth: '560px',
              }}
            >
              Three Domains.
              <br />
              <span style={{ color: '#D4AF37', fontSize: '2.8rem' }}>One Practitioner.</span>
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.12}>
            <GoldDivider width="60px" />
          </FadeInUp>

          <div
            className="competency-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: '1.5rem',
              marginTop: '3rem',
            }}
          >
            {competencyCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <FadeInUp key={card.label} delay={0.1 + i * 0.1}>
                  <div
                    style={{
                      backgroundColor: '#0A1A2F',
                      border: '1px solid rgba(212,175,55,0.1)',
                      borderTop: '2px solid transparent',
                      padding: '2.25rem 2rem',
                      height: '100%',
                      transition: 'border-color 0.3s ease, border-top-color 0.3s ease, transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderTopColor = '#D4AF37';
                      e.currentTarget.style.borderColor = 'rgba(212,175,55,0.25)';
                      e.currentTarget.style.transform = 'translateY(-5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderTopColor = 'transparent';
                      e.currentTarget.style.borderColor = 'rgba(212,175,55,0.1)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: 'rgba(212,175,55,0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.25rem',
                      }}
                    >
                      <Icon size={22} color="#D4AF37" />
                    </div>

                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.7rem',
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: '#D4AF37',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {card.label}
                    </div>

                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '1.3rem',
                        fontWeight: 700,
                        color: '#F5F7FA',
                        marginBottom: '1.25rem',
                        lineHeight: 1.2,
                      }}
                    >
                      {card.heading}
                    </h3>

                    <GoldDivider width="32px" />

                    <ul style={{ listStyle: 'none', padding: 0, margin: '1.25rem 0 0' }}>
                      {card.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.625rem',
                            padding: '0.45rem 0',
                            borderBottom: '1px solid rgba(212,175,55,0.06)',
                          }}
                        >
                          <span
                            style={{
                              width: '4px',
                              height: '4px',
                              backgroundColor: '#D4AF37',
                              borderRadius: '50%',
                              flexShrink: 0,
                              opacity: 0.8,
                            }}
                          />
                          <span
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: '0.9rem',
                              color: '#B8C5D6',
                              lineHeight: 1.55,
                            }}
                          >
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ─────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#0A1A2F',
          backgroundImage:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 70%)',
          padding: '7rem 2rem',
          borderTop: '1px solid rgba(212,175,55,0.1)',
          borderBottom: '1px solid rgba(212,175,55,0.1)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <FadeInUp>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.68rem',
                letterSpacing: '0.2em',
                color: '#D4AF37',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
              }}
            >
              <span style={{ width: '24px', height: '1px', backgroundColor: '#D4AF37' }} />
              Available Now
              <span style={{ width: '24px', height: '1px', backgroundColor: '#D4AF37' }} />
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.85rem, 3.5vw, 3rem)',
                fontWeight: 700,
                color: '#F5F7FA',
                lineHeight: 1.25,
                marginBottom: '1rem',
              }}
            >
              Currently teaching, mentoring,
              <br />
              and performing in Dubai.
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.15}>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0 1.5rem' }}>
              <GoldDivider width="60px" />
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1rem',
                color: '#B8C5D6',
                lineHeight: 1.75,
                marginBottom: '2.5rem',
              }}
            >
              Available for piano instruction, academic tutoring, and medical consultancy.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.25}>
            <Link href="/contact" style={{ textDecoration: 'none', display: 'inline-block' }}>
              <motion.button
                whileHover={{ scale: 1.04, backgroundColor: '#E6C558' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  backgroundColor: '#D4AF37',
                  color: '#0A1A2F',
                  border: 'none',
                  padding: '1rem 2.75rem',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  transition: 'background-color 0.2s ease',
                }}
              >
                Get in Touch
                <ArrowRight size={16} />
              </motion.button>
            </Link>
          </FadeInUp>
        </div>
      </section>

      <style jsx global>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .identity-strip {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .identity-strip > div:nth-child(2) {
            border-right: none !important;
          }
          .identity-strip > div:nth-child(1),
          .identity-strip > div:nth-child(2) {
            border-bottom: 1px solid rgba(212,175,55,0.12);
          }
          .summary-cols {
            grid-template-columns: 1fr !important;
            gap: 1.75rem !important;
          }
          .competency-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 520px) {
          .identity-strip {
            grid-template-columns: 1fr !important;
          }
          .identity-strip > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(212,175,55,0.12) !important;
          }
        }
      `}</style>
    </div>
  );
}
