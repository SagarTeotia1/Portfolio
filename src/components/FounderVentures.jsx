import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ventures = [
  {
    slug: 'sangrakshan',
    name: 'SANGRAKSHAN',
    url: 'NDRF · Govt. of India',
    link: null,
    year: '2023',
    story: 'Started as a hackathon idea. Ended up training real first responders. No blueprint — just built until the government funded it.',
    what: 'AI + VR disaster response training platform deployed with India\'s National Disaster Response Force. ₹2.7M+ government funded.',
    metric1: { label: 'Funded', value: '₹2.7M+' },
    metric2: { label: 'Users', value: 'NDRF' },
    metric3: { label: 'Status', value: 'Live' },
    stack: ['Node.js', 'Kafka', 'Redis', 'VR/Unity', 'AI/ML'],
  },
  {
    slug: 'accessway',
    name: 'ACCESSWAY',
    url: 'World Gov Summit 2025',
    link: null,
    year: '2025',
    story: 'Built for people who can\'t navigate the world the way most of us can. Won the Global Best M-Gov Award. The VP of UAE handed me the trophy.',
    what: 'AI-driven accessibility platform with crowdsourced validation and AR navigation for differently-abled users. Recognized globally.',
    metric1: { label: 'Award', value: 'Global' },
    metric2: { label: 'Stage', value: 'Dubai' },
    metric3: { label: 'Age', value: '19' },
    stack: ['Python', 'ML Pipelines', 'AR', 'Data Engineering'],
  },
  {
    slug: 'codespirit',
    name: 'CODESPIRIT',
    url: 'codespirit.in',
    link: 'https://codespirit.in',
    year: '2024',
    story: "Wanted a community of builders, not just students who passed exams. Built one from scratch — workshops, challenges, open source. People showed up.",
    what: 'Student tech community with 11K+ members across campuses — peer-led workshops, build challenges, collaborative projects.',
    metric1: { label: 'Members', value: '11K+' },
    metric2: { label: 'Campuses', value: 'Multi' },
    metric3: { label: 'Status', value: 'Live' },
    stack: ['Community', 'Web Dev', 'Open Source', 'Workshops'],
  },
  {
    slug: 'campusmart',
    name: 'CAMPUSMART',
    url: 'campusmart.store',
    link: 'https://campusmart.store',
    year: '2025',
    story: 'Noticed students haggling over second-hand books in college corridors. Built the marketplace they needed — end-to-end, alone, in a hostel room.',
    what: 'Live student marketplace for second-hand books, drafts, and essentials across 3 colleges.',
    metric1: { label: 'Users', value: '2.5K+' },
    metric2: { label: 'Transactions', value: '1K+' },
    metric3: { label: 'Colleges', value: '3' },
    stack: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'Azure'],
  },
];

function VentureCard({ venture, i }) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/case/${venture.slug}`)}
      style={{
        background: hovered ? '#EDE6D3' : '#FAF8F2',
        border: '2px solid #1A1A1A',
        boxShadow: hovered ? '6px 6px 0 #8B6244' : '3px 3px 0 #1A1A1A',
        transform: hovered ? 'translate(-2px, -2px)' : 'translate(0,0)',
        transition: 'all 0.15s ease',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Top bar */}
      <div style={{ background: '#1A1A1A', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.58rem', fontWeight: '700', color: '#C4956A', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          Founder · {venture.year}
        </span>
        {venture.link ? (
          <a
            href={venture.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.55rem', color: '#FAF8F2', letterSpacing: '0.08em', textDecoration: 'none', borderBottom: '1px solid rgba(250,248,242,0.3)', paddingBottom: '1px' }}
          >
            {venture.url} ↗
          </a>
        ) : (
          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.55rem', color: 'rgba(250,248,242,0.4)', letterSpacing: '0.08em' }}>{venture.url}</span>
        )}
      </div>

      <div style={{ padding: '24px 22px', flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: '800', fontSize: '1.5rem', color: '#1A1A1A', margin: 0, letterSpacing: '-0.02em' }}>
          {venture.name}
        </h3>

        <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.72rem', fontStyle: 'italic', color: '#3D2B1F', lineHeight: '1.65', margin: 0, borderLeft: '3px solid #8B6244', paddingLeft: '12px' }}>
          "{venture.story}"
        </p>

        <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.84rem', lineHeight: '1.6', color: '#3D2B1F', margin: 0, opacity: 0.8 }}>
          {venture.what}
        </p>

        <div style={{ display: 'flex', border: '1.5px solid #1A1A1A', marginTop: 'auto' }}>
          {[venture.metric1, venture.metric2, venture.metric3].map((m, j) => (
            <div key={j} style={{ flex: 1, padding: '10px 12px', borderRight: j < 2 ? '1.5px solid #1A1A1A' : 'none', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: '800', fontSize: '1rem', color: '#1A1A1A', lineHeight: '1' }}>{m.value}</div>
              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.52rem', color: '#8B6244', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>{m.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {venture.stack.map((tech, j) => (
            <span key={j} style={{ border: '1.5px solid #1A1A1A', padding: '2px 8px', fontFamily: 'Space Mono, monospace', fontSize: '0.52rem', fontWeight: '700', color: '#1A1A1A', letterSpacing: '0.04em' }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function FounderVentures() {
  return (
    <section
      style={{
        background: '#FAF8F2',
        padding: '96px 0',
        borderTop: '2px solid #1A1A1A',
        borderBottom: '2px solid #1A1A1A',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="section-ghost-num">03</div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '72px' }}
        >
          <span className="section-label">03 / Founder Ventures</span>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: '800', fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#1A1A1A', letterSpacing: '-0.025em', margin: '8px 0 0', lineHeight: '1' }}>
            WHAT I'VE<br /><span style={{ color: '#8B6244' }}>FOUNDED</span>
          </h2>
          <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.72rem', color: '#3D2B1F', marginTop: '16px', opacity: 0.6, letterSpacing: '0.04em' }}>
            Not hackathons. Not client work. Products I own.
          </p>
        </motion.div>

        {/* Top row — Sangrakshan + Accessway */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '16px', marginBottom: '16px' }}>
          {ventures.slice(0, 2).map((venture, i) => (
            <VentureCard key={venture.slug} venture={venture} i={i} />
          ))}
        </div>

        {/* Bottom row — CodeSpirit, CampusMart, CollegePaglu */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {ventures.slice(2).map((venture, i) => (
            <VentureCard key={venture.slug} venture={venture} i={i + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
