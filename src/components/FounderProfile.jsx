import React from 'react';
import { motion } from 'framer-motion';

const signals = [
  {
    tag: 'Obsession',
    headline: 'Can\'t Stop Building',
    proof: 'Started with Scratch games at 13. Never needed external pressure — government recognition, awards, users followed the obsession, not the other way around.',
    metric: '13 → 20 → Still going',
    dark: false,
  },
  {
    tag: 'Technical Sharpness',
    headline: 'Government-Grade Systems',
    proof: 'Microservices on Kafka. AI + geospatial pipelines. HLS streaming infra for 200M+ monthly views. Built things that actually run in production for NDRF and UAE government evaluators.',
    metric: '15+ Real Deployments',
    dark: true,
  },
  {
    tag: 'Extreme Agency',
    headline: 'No Permission Required',
    proof: '₹35L+ in grants by just building and shipping — no connections, no family money, no waiting. Got into Dubai at 19 by building something undeniable.',
    metric: '₹35L+ Self-Created',
    dark: false,
  },
  {
    tag: 'Founder–Market Fit',
    headline: 'Lives the Problems He Solves',
    proof: 'Built CampusMart because he is a student. Built CodeSpirit because he needed a builder community. Built CollegePaglu because campus logistics are broken. All real, lived pain.',
    metric: '3 Founder Products · Live',
    dark: true,
  },
  {
    tag: 'Speed of Execution',
    headline: 'Ships Fast, Learns Faster',
    proof: '11+ national & international awards across a single year of college. Not serial ideation — serial shipping. Each project went from whiteboard to submission to recognition.',
    metric: '11+ Awards · 1 Year',
    dark: false,
  },
  {
    tag: 'Original Thinking',
    headline: 'Non-Obvious Combinations',
    proof: 'Crowdsourced accessibility data + AR navigation for differently-abled users. AI disaster training + VR for first responders. Never "Uber for X" — always a real insight.',
    metric: 'Global Best M-Gov 2025',
    dark: true,
  },
  {
    tag: 'Ambition',
    headline: 'Thinks at World Scale',
    proof: 'Represented India at the World Government Summit at 19. Honored by the Vice President of UAE. The bar was always global — even when starting from a Delhi college dorm.',
    metric: 'World Stage · Age 19',
    dark: false,
  },
  {
    tag: 'Community & Distribution',
    headline: 'Builds Audiences, Not Just Products',
    proof: 'Founded CodeSpirit — thousands of student builders. Scaled MicroKahani for a 15M+ follower production house. Distribution is not an afterthought — it\'s been part of every build.',
    metric: '15M+ Reach · 1K+ Community',
    dark: true,
  },
];

export default function FounderProfile() {
  return (
    <section
      style={{
        background: '#FAF8F2',
        borderTop: '2px solid #1A1A1A',
        borderBottom: '2px solid #1A1A1A',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ghost text */}
      <div
        style={{
          position: 'absolute',
          right: '-60px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(6rem, 20vw, 18rem)',
          fontWeight: '800',
          color: '#1A1A1A',
          opacity: 0.03,
          letterSpacing: '-0.05em',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        FOUNDER
      </div>

      {/* Header */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '80px 24px 0',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '32px',
            marginBottom: '64px',
          }}
        >
          <div>
            <span className="section-label">03.5 / Founder Profile</span>
            <h2
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: '800',
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                color: '#1A1A1A',
                letterSpacing: '-0.025em',
                margin: '8px 0 0',
                lineHeight: '1',
              }}
            >
              OUTLIER<br />
              <span style={{ color: '#8B6244' }}>FOUNDER</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              borderLeft: '4px solid #8B6244',
              paddingLeft: '20px',
              maxWidth: '420px',
            }}
          >
            <p
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.78rem',
                color: '#3D2B1F',
                lineHeight: '1.7',
                margin: 0,
                fontStyle: 'italic',
              }}
            >
              "EF backs individuals before companies exist — people with obsession, agency, and technical edge. Here's the evidence mine is real."
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Signal grid — full bleed, no container padding */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          borderTop: '2px solid #1A1A1A',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {signals.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            style={{
              background: s.dark ? '#1A1A1A' : '#FAF8F2',
              padding: '36px 32px',
              borderRight: '2px solid #1A1A1A',
              borderBottom: '2px solid #1A1A1A',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {/* Tag */}
            <span
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.6rem',
                fontWeight: '700',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#8B6244',
              }}
            >
              {s.tag}
            </span>

            {/* Headline */}
            <h3
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: '800',
                fontSize: '1.15rem',
                color: s.dark ? '#FAF8F2' : '#1A1A1A',
                margin: 0,
                letterSpacing: '-0.01em',
                lineHeight: '1.2',
              }}
            >
              {s.headline}
            </h3>

            {/* Proof */}
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.82rem',
                lineHeight: '1.65',
                color: s.dark ? 'rgba(250,248,242,0.65)' : '#3D2B1F',
                margin: 0,
                flex: 1,
              }}
            >
              {s.proof}
            </p>

            {/* Metric chip */}
            <div
              style={{
                display: 'inline-block',
                background: '#8B6244',
                color: '#FAF8F2',
                padding: '5px 12px',
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.6rem',
                fontWeight: '700',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                alignSelf: 'flex-start',
              }}
            >
              {s.metric}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          background: '#1A1A1A',
          borderTop: '2px solid #1A1A1A',
          padding: '56px 24px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: '800',
            fontSize: 'clamp(1.2rem, 3vw, 2rem)',
            color: '#FAF8F2',
            letterSpacing: '-0.02em',
            lineHeight: '1.3',
            margin: '0 auto 24px',
            maxWidth: '720px',
          }}
        >
          Not waiting for a company to exist.<br />
          <span style={{ color: '#C4956A' }}>Already building the things that should.</span>
        </p>
        <a
          href="mailto:sagar1teotia@gmail.com"
          style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '0.68rem',
            color: '#8B6244',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            borderBottom: '1px solid #8B6244',
            paddingBottom: '2px',
          }}
        >
          sagar1teotia@gmail.com
        </a>
      </motion.div>
    </section>
  );
}
