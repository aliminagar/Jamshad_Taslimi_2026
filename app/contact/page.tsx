'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Linkedin, Send, Languages, Clock, ShieldCheck, ChevronDown, Github, Twitter, Instagram, MessageSquare, Facebook } from 'lucide-react';
import Image from 'next/image';
import GoldDivider from '@/components/GoldDivider';
import FadeInUp from '@/components/FadeInUp';
import { useState, useRef, useEffect } from 'react';

const socialLabels = new Set(['GitHub', 'X', 'Instagram', 'Threads', 'Facebook']);

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'JamshadTaslimi@gmail.com',
    href: 'mailto:jamshadtaslimi@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/jamshad-taslimi-56b885378',
    href: 'https://linkedin.com/in/jamshad-taslimi-56b885378',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Jumeirah Village Circle, Dubai, UAE',
    href: null,
  },
  {
    icon: Languages,
    label: 'Languages',
    value: 'English (Fluent) · Persian (Native) · German (Basic working proficiency)',
    href: null,
  },
  {
    icon: Clock,
    label: 'Availability',
    value: 'On-site & hybrid across Dubai | Remote/Online worldwide | Available weekdays & weekends, all hours',
    href: null,
  },
  {
    icon: ShieldCheck,
    label: 'Legal Status',
    value: 'Authorized to work independently in the UAE as a private teacher. No sponsorship required from clients or institutions.',
    href: null,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/jamshadtaslimi',
    href: 'https://github.com/jamshadtaslimi',
  },
  {
    icon: Twitter,
    label: 'X',
    value: '@JamshadTaslimi',
    href: 'https://x.com/JamshadTaslimi',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@JamshadTaslimi',
    href: 'https://www.instagram.com/jamshadtaslimi?igsh=MTU5ZHE3djFnbHRmag==',
  },
  {
    icon: MessageSquare,
    label: 'Threads',
    value: '@JamshadTaslimi',
    href: 'https://www.threads.com/@jamshadtaslimi',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    value: 'Facebook Profile',
    href: 'https://www.facebook.com/share/1BQdGawCTr/',
  },
];

const subjectOptions = [
  'Piano Lessons',
  'Chemistry Tutoring',
  'Olympiad Coaching',
  'English Language Tutoring',
  'Physics Tutoring',
  'Biology Tutoring',
  'Math Tutoring',
  'Other',
];

function SubjectDropdown({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setFocused(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const borderColor = focused ? '#D4AF37' : 'rgba(212,175,55,0.25)';
  const boxShadow = focused ? '0 0 0 3px rgba(212,175,55,0.15)' : 'none';

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        type="button"
        onClick={() => { setOpen((o) => !o); setFocused(true); }}
        onFocus={() => setFocused(true)}
        onBlur={() => { if (!open) setFocused(false); }}
        style={{
          width: '100%',
          backgroundColor: '#0F2340',
          color: value ? '#F5F7FA' : '#B8C5D6',
          border: `1px solid ${borderColor}`,
          borderRadius: '4px',
          padding: '12px 16px',
          fontFamily: "'Inter', sans-serif",
          fontSize: '15px',
          textAlign: 'left',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          outline: 'none',
          boxShadow,
          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        }}
      >
        <span>{value || 'Select a subject...'}</span>
        <ChevronDown
          size={16}
          color="#D4AF37"
          style={{
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
            flexShrink: 0,
          }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 4px)',
              left: 0,
              right: 0,
              backgroundColor: '#0F2340',
              border: '1px solid rgba(212,175,55,0.25)',
              borderRadius: '4px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              zIndex: 50,
              listStyle: 'none',
              margin: 0,
              padding: '4px 0',
              maxHeight: '280px',
              overflowY: 'auto',
            }}
          >
            {subjectOptions.map((opt) => (
              <DropdownOption
                key={opt}
                label={opt}
                selected={value === opt}
                onSelect={() => { onChange(opt); setOpen(false); setFocused(false); }}
              />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

function DropdownOption({ label, selected, onSelect }: { label: string; selected: boolean; onSelect: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onSelect}
      style={{
        padding: '12px 16px',
        color: selected ? '#D4AF37' : '#F5F7FA',
        backgroundColor: hovered ? '#152C4D' : 'transparent',
        borderLeft: hovered || selected ? '2px solid #D4AF37' : '2px solid transparent',
        fontFamily: "'Inter', sans-serif",
        fontSize: '15px',
        cursor: 'pointer',
        transition: 'background-color 0.15s ease, border-color 0.15s ease',
        userSelect: 'none',
      }}
    >
      {label}
    </li>
  );
}

function PortraitColumn() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
        {/* Decorative vertical line to the left */}
        <div
          style={{
            position: 'absolute',
            left: '-16px',
            top: '20%',
            width: '2px',
            height: '60px',
            backgroundColor: '#D4AF37',
            opacity: 0.7,
          }}
        />

        {/* Opening quotation mark */}
        <div
          style={{
            position: 'absolute',
            top: '-18px',
            left: '-10px',
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: '60px',
            color: '#D4AF37',
            opacity: 0.25,
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        >
          &ldquo;
        </div>

        {/* Frame + image */}
        <motion.div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          animate={{
            boxShadow: hovered
              ? '0 0 60px rgba(212,175,55,0.25)'
              : '0 0 60px rgba(212,175,55,0.15)',
          }}
          transition={{ duration: 0.4 }}
          style={{
            border: '2px solid #D4AF37',
            padding: '6px',
            backgroundColor: '#081527',
            borderRadius: '2px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ position: 'relative', aspectRatio: '2/3', width: '100%', overflow: 'hidden', borderRadius: '1px' }}>
            <Image
              src="/Jamshad_second_image.JPG"
              alt="Dr. Jamshad Taslimi"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              sizes="(max-width: 768px) 280px, 300px"
            />
          </div>
        </motion.div>
      </div>

      {/* Caption block */}
      <div style={{ marginTop: '20px', textAlign: 'center', width: '100%', maxWidth: '300px' }}>
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: '20px',
            color: '#D4AF37',
            margin: '0 0 6px 0',
          }}
        >
          Dr. Jamshad Taslimi
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#B8C5D6',
            margin: '0 0 14px 0',
          }}
        >
          MD · Educator · Pianist
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.65 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}
        >
          <div style={{ width: '40px', height: '1px', backgroundColor: '#D4AF37', opacity: 0.7 }} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: '15px',
            color: '#B8C5D6',
            margin: 0,
          }}
        >
          Based in Dubai · Responds within 48 hours
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState('submitting');
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        }).toString(),
      });
      if (response.ok) {
        setSubmitState('success');
      } else {
        setSubmitState('error');
      }
    } catch {
      setSubmitState('error');
    }
  };

  const inputBase: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(212,175,55,0.25)',
    color: '#F5F7FA',
    padding: '0.75rem 0',
    fontFamily: "'Inter', sans-serif",
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    borderRadius: 0,
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.7rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: '#D4AF37',
    marginBottom: '0.4rem',
  };

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
            background: 'radial-gradient(ellipse 60% 70% at 90% 50%, rgba(212,175,55,0.05) 0%, transparent 65%)',
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
            <span style={{ opacity: 0.5 }}>//</span> Let's Connect
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(3rem, 5.5vw, 4.75rem)',
              fontWeight: 800,
              color: '#F5F7FA',
              lineHeight: 1.08,
              marginBottom: '1rem',
            }}
          >
            Begin a Conversation
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
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
              color: '#B8C5D6',
              maxWidth: '520px',
              lineHeight: 1.75,
            }}
          >
            For piano instruction, academic tutoring, or professional inquiries in Dubai and beyond.
          </motion.p>
        </div>
      </section>

      {/* ── THREE-COLUMN LAYOUT ───────────────────────────────────────── */}
      <section style={{ padding: '6rem 2rem', backgroundColor: '#0F2340' }}>
        <div
          className="contact-grid"
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '25% 30% 1fr',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* COLUMN 1 — Portrait */}
          <div className="portrait-col">
            <PortraitColumn />
          </div>

          {/* COLUMN 2 — Contact details */}
          <FadeInUp delay={0.1}>
            <div
              style={{
                backgroundColor: '#0A1A2F',
                border: '1px solid rgba(212,175,55,0.18)',
                padding: '2.25rem',
              }}
            >
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#F5F7FA',
                  marginBottom: '0.75rem',
                }}
              >
                Contact Details
              </h2>
              <GoldDivider width="40px" />

              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {contactDetails.map((detail, idx) => {
                  const Icon = detail.icon;
                  const isSocial = socialLabels.has(detail.label);
                  const isFirstSocial = detail.label === 'GitHub';
                  const iconSize = isSocial ? '32px' : '38px';
                  const lucideSize = isSocial ? 14 : 16;
                  const valueSize = isSocial ? '0.86rem' : '0.92rem';

                  return (
                    <div key={detail.label}>
                      {isFirstSocial && (
                        <>
                          <div
                            style={{
                              height: '1px',
                              backgroundColor: 'rgba(212,175,55,0.15)',
                              margin: '0 0 1.25rem',
                            }}
                          />
                          <div
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: '0.55rem',
                              letterSpacing: '0.2em',
                              textTransform: 'uppercase' as const,
                              color: '#D4AF37',
                              opacity: 0.7,
                              marginBottom: '1rem',
                            }}
                          >
                            Social Media
                          </div>
                        </>
                      )}
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                        <div
                          style={{
                            width: iconSize,
                            height: iconSize,
                            backgroundColor: 'rgba(212,175,55,0.08)',
                            border: '1px solid rgba(212,175,55,0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: '1px',
                          }}
                        >
                          <Icon size={lucideSize} color="#D4AF37" />
                        </div>
                        <div>
                          <div
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: '0.65rem',
                              letterSpacing: '0.18em',
                              textTransform: 'uppercase' as const,
                              color: '#D4AF37',
                              marginBottom: '0.3rem',
                            }}
                          >
                            {detail.label}
                          </div>
                          {detail.href ? (
                            <a
                              href={detail.href}
                              target={detail.href.startsWith('http') ? '_blank' : undefined}
                              rel="noopener noreferrer"
                              style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: valueSize,
                                color: '#B8C5D6',
                                textDecoration: 'none',
                                transition: 'color 0.2s ease',
                                wordBreak: 'break-all',
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.color = '#E6C558')}
                              onMouseLeave={(e) => (e.currentTarget.style.color = '#B8C5D6')}
                            >
                              {detail.value}
                            </a>
                          ) : (
                            <span
                              style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: valueSize,
                                color: '#B8C5D6',
                                lineHeight: 1.6,
                              }}
                            >
                              {detail.value}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeInUp>

          {/* COLUMN 3 — Contact form */}
          <FadeInUp delay={0.2}>
            <div
              style={{
                backgroundColor: '#0A1A2F',
                border: '1px solid rgba(212,175,55,0.18)',
                padding: '2.5rem',
              }}
            >
              {submitState === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ textAlign: 'center', padding: '4rem 0' }}
                >
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: 'italic',
                      fontSize: '24px',
                      color: '#D4AF37',
                      marginBottom: '1.25rem',
                    }}
                  >
                    Thank you.
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
                    <div style={{ width: '40px', height: '1px', backgroundColor: '#D4AF37', opacity: 0.7 }} />
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '15px',
                      color: '#B8C5D6',
                      lineHeight: 1.7,
                    }}
                  >
                    Your message has been received. A reply will follow within 48 hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p style={{ display: 'none' }}>
                    <label>
                      Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                    </label>
                  </p>
                  <h2
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.6rem',
                      fontWeight: 700,
                      color: '#F5F7FA',
                      marginBottom: '0.75rem',
                    }}
                  >
                    Send a Message
                  </h2>
                  <GoldDivider width="40px" />

                  <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

                    <div
                      className="form-row"
                      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}
                    >
                      <div>
                        <label style={labelStyle} htmlFor="name">Name</label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          required
                          autoComplete="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          style={inputBase}
                          onFocus={(e) => (e.currentTarget.style.borderBottomColor = '#D4AF37')}
                          onBlur={(e) => (e.currentTarget.style.borderBottomColor = 'rgba(212,175,55,0.25)')}
                        />
                      </div>
                      <div>
                        <label style={labelStyle} htmlFor="email">Email</label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          required
                          autoComplete="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          style={inputBase}
                          onFocus={(e) => (e.currentTarget.style.borderBottomColor = '#D4AF37')}
                          onBlur={(e) => (e.currentTarget.style.borderBottomColor = 'rgba(212,175,55,0.25)')}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle} htmlFor="subject">Subject</label>
                      <SubjectDropdown
                        value={formState.subject}
                        onChange={(val) => setFormState((prev) => ({ ...prev, subject: val }))}
                      />
                    </div>

                    <div>
                      <label style={labelStyle} htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        style={{ ...inputBase, resize: 'vertical' as const, borderBottom: 'none', border: '1px solid rgba(212,175,55,0.25)', padding: '0.75rem 1rem' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#D4AF37')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(212,175,55,0.25)')}
                      />
                    </div>

                    <div>
                      {submitState === 'error' && (
                        <p
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.82rem',
                            color: '#E8B4B4',
                            marginBottom: '1rem',
                            textAlign: 'center',
                          }}
                        >
                          Something went wrong. Please try again or email directly.
                        </p>
                      )}
                      <motion.button
                        type="submit"
                        disabled={submitState === 'submitting'}
                        whileHover={submitState !== 'submitting' ? { scale: 1.02 } : {}}
                        whileTap={submitState !== 'submitting' ? { scale: 0.97 } : {}}
                        style={{
                          backgroundColor: '#D4AF37',
                          color: '#0A1A2F',
                          border: 'none',
                          padding: '1rem 2rem',
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase' as const,
                          cursor: submitState === 'submitting' ? 'not-allowed' : 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.625rem',
                          width: '100%',
                          opacity: submitState === 'submitting' ? 0.75 : 1,
                          transition: 'background-color 0.2s ease, opacity 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          if (submitState !== 'submitting') (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#E6C558';
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#D4AF37';
                        }}
                      >
                        {submitState === 'submitting' ? (
                          <>
                            Sending...
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                              style={{ display: 'inline-flex' }}
                            >
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <circle cx="7" cy="7" r="5.5" stroke="#0A1A2F" strokeWidth="2" strokeDasharray="20 14" />
                              </svg>
                            </motion.span>
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={14} />
                          </>
                        )}
                      </motion.button>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.78rem',
                          color: 'rgba(184,197,214,0.55)',
                          marginTop: '0.875rem',
                          textAlign: 'center',
                          letterSpacing: '0.02em',
                        }}
                      >
                        Responses within 48 hours.
                      </p>
                    </div>

                  </div>
                </form>
              )}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ── CLOSING BAND ─────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#081527',
          padding: '4rem 2rem',
          borderTop: '1px solid rgba(212,175,55,0.1)',
          textAlign: 'center',
        }}
      >
        <FadeInUp>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
              color: '#B8C5D6',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}
          >
            "Thank you for considering this conversation."
          </p>
        </FadeInUp>
      </section>

      <style jsx global>{`
        @media (max-width: 1024px) and (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 40% 1fr !important;
            grid-template-rows: auto auto !important;
            gap: 2.5rem !important;
          }
          .portrait-col {
            grid-column: 1;
            grid-row: 1;
          }
          .contact-grid > *:nth-child(2) {
            grid-column: 2;
            grid-row: 1;
          }
          .contact-grid > *:nth-child(3) {
            grid-column: 1 / -1;
            grid-row: 2;
          }
        }
        @media (max-width: 767px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .portrait-col {
            display: flex;
            justify-content: center;
          }
          .portrait-col > div {
            max-width: 280px !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
        input::placeholder,
        textarea::placeholder {
          color: rgba(184, 197, 214, 0.45);
        }
        select option {
          background-color: #0A1A2F;
        }
      `}</style>
    </div>
  );
}
