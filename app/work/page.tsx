'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FlaskConical,
  BookOpen,
  Music,
  GraduationCap,
  Linkedin,
  Github,
  Globe,
  FileText,
  ExternalLink,
} from 'lucide-react';
import FadeInUp from '@/components/FadeInUp';
import GoldDivider from '@/components/GoldDivider';

/* ── DATA ───────────────────────────────────────────────────────────── */

const publications = [
  {
    type: 'Book Chapter',
    year: '2025',
    title: 'Prions: A Mechanistic View',
    authors: 'JH, Taslimi J, Minagar A, Blango J',
    venue: 'Global Virology V: 21st Century Vaccines and Viruses · Springer Cham · pp. 395–420',
    abstract:
      'A mechanistic analysis of prion diseases, exploring the molecular pathways and structural transformations involved in prion protein misfolding and neurodegeneration.',
    link: 'https://doi.org/10.1007/978-3-031-77911-4',
  },
];

const projects = [
  {
    type: 'Academic Research',
    title: 'A Comparison of Mentalization Capacity in First and Last Year Medical Students After Clinical Training',
    description:
      'MD thesis research conducted at Tehran University of Medical Sciences examining the development of mentalization abilities through clinical training exposure. Comparative analysis of psychological capacity between novice and experienced medical students.',
    tags: ['Medical Research', 'Psychology', 'Medical Education'],
    icon: GraduationCap,
    link: null,
    institution: 'Tehran University of Medical Sciences',
    year: '2025',
    status: 'Thesis Research',
  },
  {
    type: 'Project Type',
    title: 'Project Title #2',
    description:
      'Short project description placeholder. Details about scope, outcomes, and collaborators will populate this area.',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    icon: BookOpen,
    link: '#',
  },
  {
    type: 'Project Type',
    title: 'Project Title #3',
    description:
      'Short project description placeholder. Details about scope, outcomes, and collaborators will populate this area.',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    icon: Music,
    link: '#',
  },
  {
    type: 'Project Type',
    title: 'Project Title #4',
    description:
      'Short project description placeholder. Details about scope, outcomes, and collaborators will populate this area.',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    icon: GraduationCap,
    link: '#',
  },
];

const websites = [
  {
    icon: Linkedin,
    name: 'LinkedIn',
    handle: 'linkedin.com/in/jamshad-taslimi-56b885378',
    description: 'Professional profile and network.',
    link: 'https://linkedin.com/in/jamshad-taslimi-56b885378',
  },
  {
    icon: Github,
    name: 'GitHub',
    handle: '@username / URL slug',
    description: 'Brief description of what lives here.',
    link: '#',
  },
  {
    icon: Globe,
    name: 'Platform Name',
    handle: '@username / URL slug',
    description: 'Brief description of what lives here.',
    link: '#',
  },
  {
    icon: FileText,
    name: 'Platform Name',
    handle: '@username / URL slug',
    description: 'Brief description of what lives here.',
    link: '#',
  },
];

/* ── PUBLICATION CARD ───────────────────────────────────────────────── */
function PublicationCard({
  pub,
  delay,
}: {
  pub: (typeof publications)[number];
  delay: number;
}) {
  return (
    <FadeInUp delay={delay}>
      <motion.div
        whileHover={{ y: -2, backgroundColor: '#152C4D' }}
        transition={{ duration: 0.2 }}
        style={{
          backgroundColor: '#0F2340',
          padding: '32px',
          borderRadius: '4px',
          borderLeft: '3px solid #D4AF37',
          cursor: 'default',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#D4AF37',
            }}
          >
            {pub.type}
          </span>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              color: '#B8C5D6',
            }}
          >
            {pub.year}
          </span>
        </div>

        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.625rem',
            fontWeight: 500,
            color: '#F5F7FA',
            margin: '0 0 8px',
            lineHeight: 1.3,
          }}
        >
          {pub.title}
        </h3>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontStyle: 'italic',
            fontSize: '1rem',
            color: '#B8C5D6',
            margin: '0 0 8px',
          }}
        >
          {pub.authors}
        </p>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1rem',
            color: '#B8C5D6',
            margin: '0 0 16px',
          }}
        >
          {pub.venue}
        </p>

        <div style={{ position: 'relative', marginBottom: '20px', overflow: 'hidden' }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.0625rem',
              color: '#B8C5D6',
              lineHeight: 1.7,
              margin: 0,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {pub.abstract}
          </p>
        </div>

        <a
          href={pub.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '6px 16px',
            border: '1px solid #D4AF37',
            color: '#D4AF37',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.7rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            borderRadius: '2px',
            transition: 'background-color 0.2s ease, color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#D4AF37';
            e.currentTarget.style.color = '#0A1A2F';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#D4AF37';
          }}
        >
          View Chapter →
        </a>
      </motion.div>
    </FadeInUp>
  );
}

/* ── PROJECT CARD ───────────────────────────────────────────────────── */
function ProjectCard({
  project,
  delay,
}: {
  project: (typeof projects)[number];
  delay: number;
}) {
  const Icon = project.icon;
  const isStatic = project.link === null;

  const cardInner = (
    <div
      style={{
        backgroundColor: '#0F2340',
        border: '1px solid rgba(212,175,55,0.15)',
        borderRadius: '4px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        cursor: isStatic ? 'default' : undefined,
      }}
    >
      <div
        style={{
          aspectRatio: '16/9',
          backgroundColor: '#081527',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon size={48} color="#D4AF37" style={{ opacity: 0.4 }} />
      </div>

      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#D4AF37',
            display: 'block',
            marginBottom: '10px',
          }}
        >
          {project.type}
        </span>

        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.375rem',
            fontWeight: 500,
            color: '#F5F7FA',
            margin: '0 0 8px',
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </h3>

        {'institution' in project && project.institution && (
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontStyle: 'italic',
              fontSize: '0.9375rem',
              color: '#D4AF37',
              margin: '0 0 6px',
            }}
          >
            {project.institution}{'year' in project && project.year ? ` • ${project.year}` : ''}
          </p>
        )}

        {'status' in project && project.status && (
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              color: '#B8C5D6',
              margin: '0 0 10px',
              letterSpacing: '0.02em',
            }}
          >
            {project.status}
          </p>
        )}

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1rem',
            color: '#B8C5D6',
            lineHeight: 1.65,
            margin: '0 0 16px',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: '3px 10px',
                border: '1px solid rgba(212,175,55,0.3)',
                borderRadius: '2px',
                backgroundColor: '#081527',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#D4AF37',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {!isStatic && (
          <a
            href={project.link as string}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.875rem',
              color: '#D4AF37',
              textDecoration: 'none',
              marginTop: '16px',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#E6C558')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#D4AF37')}
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  );

  return (
    <FadeInUp delay={delay}>
      {isStatic ? (
        cardInner
      ) : (
        <motion.div
          whileHover={{ borderColor: 'rgba(212,175,55,0.35)', boxShadow: '0 0 24px rgba(212,175,55,0.12)' }}
          transition={{ duration: 0.2 }}
        >
          {cardInner}
        </motion.div>
      )}
    </FadeInUp>
  );
}

/* ── WEBSITE CARD ───────────────────────────────────────────────────── */
function WebsiteCard({
  site,
  delay,
}: {
  site: (typeof websites)[number];
  delay: number;
}) {
  const Icon = site.icon;

  return (
    <FadeInUp delay={delay}>
      <motion.div
        whileHover={{ y: -3, borderTopWidth: '3px', boxShadow: '0 8px 32px rgba(212,175,55,0.12)' }}
        transition={{ duration: 0.2 }}
        style={{
          backgroundColor: '#0F2340',
          padding: '28px',
          borderRadius: '4px',
          borderTop: '2px solid #D4AF37',
          minHeight: '200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <Icon size={32} color="#D4AF37" style={{ marginBottom: '16px' }} />

          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.25rem',
              fontWeight: 500,
              color: '#F5F7FA',
              margin: '0 0 6px',
            }}
          >
            {site.name}
          </h3>

          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.9375rem',
              color: '#B8C5D6',
              margin: '0 0 10px',
              wordBreak: 'break-all',
            }}
          >
            {site.handle}
          </p>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9375rem',
              fontStyle: 'italic',
              color: '#B8C5D6',
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            {site.description}
          </p>
        </div>

        <a
          href={site.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.6875rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#D4AF37',
            textDecoration: 'none',
            marginTop: '20px',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#E6C558')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#D4AF37')}
        >
          Visit <ExternalLink size={12} />
        </a>
      </motion.div>
    </FadeInUp>
  );
}

/* ── PAGE ───────────────────────────────────────────────────────────── */
export default function WorkPage() {
  const sectionLabelStyle: React.CSSProperties = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.7rem',
    letterSpacing: '0.2em',
    color: '#D4AF37',
    textTransform: 'uppercase',
    marginBottom: '3.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
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
            <span style={{ opacity: 0.5 }}>//</span> Portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(3.5rem, 6vw, 5rem)',
              fontWeight: 800,
              color: '#F5F7FA',
              lineHeight: 1.05,
              marginBottom: '1rem',
            }}
          >
            The Body of Work.
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
              fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)',
              color: '#B8C5D6',
              maxWidth: '640px',
              lineHeight: 1.6,
              marginBottom: '2rem',
            }}
          >
            Research, projects, and digital presence — a record of ongoing contribution across
            medicine, education, and independent inquiry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}
          >
            {['Publications', 'Projects', 'Websites'].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.8rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#D4AF37',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  borderBottom: '1px solid rgba(212,175,55,0.35)',
                  paddingBottom: '2px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E6C558')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#D4AF37')}
              >
                {label}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PUBLICATIONS ────────────────────────────────────────────── */}
      <section
        id="publications"
        style={{
          backgroundColor: '#0A1A2F',
          padding: '7rem 2rem',
          borderTop: '1px solid rgba(212,175,55,0.1)',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <FadeInUp>
            <div style={sectionLabelStyle}>
              <span style={{ opacity: 0.5 }}>//</span> 01 · Publications
            </div>
          </FadeInUp>

          <FadeInUp delay={0.05}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.8rem',
                fontWeight: 700,
                color: '#F5F7FA',
                lineHeight: 1.15,
                marginBottom: '1rem',
              }}
            >
              Research &amp; Writing
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.08}>
            <GoldDivider width="50px" />
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: '#B8C5D6',
                margin: '1.5rem 0 3rem',
              }}
            >
              Peer-reviewed publications, collaborative research, and academic contributions across medicine, neurology, and interdisciplinary fields.
            </p>
          </FadeInUp>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {publications.map((pub, i) => (
              <PublicationCard key={i} pub={pub} delay={0.12 + i * 0.08} />
            ))}
          </div>

          <FadeInUp delay={0.4}>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: '0.95rem',
                color: '#D4AF37',
                textAlign: 'center',
                marginTop: '2.5rem',
              }}
            >
              Additional publications in preparation.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ── PROJECTS ────────────────────────────────────────────────── */}
      <section
        id="projects"
        style={{
          backgroundColor: '#0F2340',
          padding: '7rem 2rem',
          borderTop: '1px solid rgba(212,175,55,0.1)',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <FadeInUp>
            <div style={sectionLabelStyle}>
              <span style={{ opacity: 0.5 }}>//</span> 02 · Projects
            </div>
          </FadeInUp>

          <FadeInUp delay={0.05}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.8rem',
                fontWeight: 700,
                color: '#F5F7FA',
                lineHeight: 1.15,
                marginBottom: '1rem',
              }}
            >
              Applied Work
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.08}>
            <GoldDivider width="50px" />
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: '#B8C5D6',
                margin: '1.5rem 0 3rem',
              }}
            >
              Educational, clinical, and creative projects beyond the classroom.
            </p>
          </FadeInUp>

          <div
            className="projects-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '28px',
            }}
          >
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} delay={0.12 + i * 0.08} />
            ))}
          </div>

          <FadeInUp delay={0.5}>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: '0.95rem',
                color: '#D4AF37',
                textAlign: 'center',
                marginTop: '2.5rem',
              }}
            >
              Academic research and technical projects showcasing interdisciplinary expertise.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ── WEBSITES ────────────────────────────────────────────────── */}
      <section
        id="websites"
        style={{
          backgroundColor: '#0A1A2F',
          padding: '7rem 2rem',
          borderTop: '1px solid rgba(212,175,55,0.1)',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <FadeInUp>
            <div style={sectionLabelStyle}>
              <span style={{ opacity: 0.5 }}>//</span> 03 · Websites
            </div>
          </FadeInUp>

          <FadeInUp delay={0.05}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.8rem',
                fontWeight: 700,
                color: '#F5F7FA',
                lineHeight: 1.15,
                marginBottom: '1rem',
              }}
            >
              Digital Presence
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.08}>
            <GoldDivider width="50px" />
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: '#B8C5D6',
                margin: '1.5rem 0 3rem',
              }}
            >
              External profiles, portfolios, and platforms.
            </p>
          </FadeInUp>

          <div
            className="websites-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
            }}
          >
            {websites.map((site, i) => (
              <WebsiteCard key={i} site={site} delay={0.12 + i * 0.08} />
            ))}
          </div>

          <FadeInUp delay={0.45}>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: '0.95rem',
                color: '#D4AF37',
                textAlign: 'center',
                marginTop: '2.5rem',
              }}
            >
              More platforms to be linked.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ── CLOSING STRIP ───────────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(to right, #0F2340, rgba(212,175,55,0.02) 50%, #0F2340)',
          padding: '5rem 2rem',
          textAlign: 'center',
          borderTop: '1px solid rgba(212,175,55,0.1)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(212,175,55,0.03) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', maxWidth: '500px', margin: '0 auto' }}>
          <FadeInUp>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: '1.25rem',
                color: '#F5F7FA',
                margin: '0 0 12px',
                lineHeight: 1.5,
              }}
            >
              A body of work in motion.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.08}>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '12px 0' }}>
              <GoldDivider width="40px" />
            </div>
          </FadeInUp>

          <FadeInUp delay={0.16}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-block',
                  marginTop: '12px',
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
        @media (max-width: 1024px) {
          .websites-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .websites-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}
