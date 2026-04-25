import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

function Counter({ to, prefix = '', suffix = '', duration = 1.6 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, to, duration]);

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

const awards = [
  {
    num: '01',
    title: 'Global Best M-Gov Award',
    subtitle: 'Bronze · World Government Summit',
    org: 'UAE Government · Dubai',
    year: '2025',
    detail:
      'Honored by the Vice President of the UAE at the World Government Summit — one of the highest international recognitions in government technology. Represented India on a global stage.',
    impact: 'International Recognition',
    size: 'large',
    bg: '#1A1A1A',
    textColor: '#FAF8F2',
    accentColor: '#C4956A',
  },
  {
    num: '02',
    title: 'Smart India Hackathon',
    subtitle: 'National Winner',
    org: 'Ministry of Education, Govt. of India',
    year: '2023',
    detail:
      'Won nationally with an AI+VR disaster response platform. Led directly to ₹2.7M+ in government funding and real-world deployment with the NDRF.',
    impact: '₹2.7M Funded · NDRF Deployed',
    size: 'normal',
    bg: '#FFFFFF',
    textColor: '#1A1A1A',
    accentColor: '#8B6244',
  },
  {
    num: '03',
    title: 'Hack4Purpose',
    subtitle: '1st Runner-Up',
    org: 'IIT Delhi · 600+ Teams',
    year: '2024',
    detail:
      'Top 2 from 600+ teams at IIT Delhi — one of India\'s most competitive technical institutions.',
    impact: 'Top 2 / 600+ Teams',
    size: 'normal',
    bg: '#EDE6D3',
    textColor: '#1A1A1A',
    accentColor: '#3D2B1F',
  },
  {
    num: '04',
    title: 'Scale+91',
    subtitle: 'Top 3',
    org: '5000+ Teams Nationwide',
    year: '2024',
    detail:
      'Top 3 from 5000+ competing teams in one of India\'s largest startup-focused hackathons.',
    impact: 'Top 3 / 5000+ Teams',
    size: 'normal',
    bg: '#FFFFFF',
    textColor: '#1A1A1A',
    accentColor: '#8B6244',
  },
];

export default function Recognition() {
  return (
    <section
      id="recognition"
      style={{
        background: '#FAF8F2',
        padding: '96px 0',
        borderTop: '2px solid #1A1A1A',
        borderBottom: '2px solid #1A1A1A',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ghost number */}
      <div className="section-ghost-num">02</div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* Header row */}
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
            marginBottom: '72px',
          }}
        >
          <div>
            <span className="section-label">02 / Recognition</span>
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
              GLOBALLY
              <br />
              <span style={{ color: '#8B6244' }}>RECOGNIZED</span>
            </h2>
          </div>

          {/* Animated grant counter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              background: '#1A1A1A',
              color: '#FAF8F2',
              padding: '20px 28px',
              border: '2px solid #1A1A1A',
              boxShadow: '5px 5px 0 #8B6244',
              minWidth: '180px',
            }}
          >
            <div
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: '800',
                fontSize: '2.4rem',
                lineHeight: '1',
              }}
            >
              ₹<Counter to={35} suffix="L+" duration={1.8} />
            </div>
            <div
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.65rem',
                fontWeight: '700',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginTop: '7px',
                color: '#C4956A',
              }}
            >
              Total Grants &amp; Awards
            </div>
          </motion.div>
        </motion.div>

        {/* Featured award (UAE) — full width dark card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="project-featured"
          style={{
            background: '#1A1A1A',
            padding: '40px',
            marginBottom: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
              <span
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '0.68rem',
                  color: '#C4956A',
                  fontWeight: '700',
                  letterSpacing: '0.12em',
                }}
              >
                01
              </span>
              <span
                style={{
                  background: '#C4956A',
                  color: '#1A1A1A',
                  padding: '4px 12px',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.62rem',
                  fontWeight: '800',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                2025 — WORLD STAGE
              </span>
            </div>
            <span
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.62rem',
                color: 'rgba(250,248,242,0.4)',
                letterSpacing: '0.08em',
              }}
            >
              UAE Government · Dubai
            </span>
          </div>

          <h3
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: '800',
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              color: '#FAF8F2',
              margin: 0,
              letterSpacing: '-0.02em',
              lineHeight: '1.1',
            }}
          >
            Global Best M-Gov Award
            <br />
            <span style={{ color: '#C4956A' }}>Bronze · World Government Summit</span>
          </h3>

          <p
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '1rem',
              lineHeight: '1.7',
              color: 'rgba(250,248,242,0.72)',
              margin: 0,
              maxWidth: '640px',
            }}
          >
            Honored by the Vice President of the UAE at the World Government Summit — one of the
            highest international recognitions in government technology. Represented India on a
            global stage at 19.
          </p>

          <div
            style={{
              background: '#C4956A',
              color: '#1A1A1A',
              display: 'inline-block',
              padding: '8px 18px',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: '800',
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              alignSelf: 'flex-start',
            }}
          >
            ↗ International Recognition
          </div>
        </motion.div>

        {/* Other 3 awards grid */}
        <div className="recognition-grid">
          {awards.slice(1).map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="brutal-card"
              style={{ background: award.bg, padding: '28px' }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '16px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '0.68rem',
                    color: '#8B6244',
                    fontWeight: '700',
                  }}
                >
                  {award.num}
                </span>
                <span
                  style={{
                    background: '#1A1A1A',
                    color: '#FAF8F2',
                    padding: '3px 9px',
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '0.58rem',
                    fontWeight: '700',
                    letterSpacing: '0.08em',
                  }}
                >
                  {award.year}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '800',
                  fontSize: '1.25rem',
                  color: award.textColor,
                  margin: '0 0 4px',
                  letterSpacing: '-0.01em',
                }}
              >
                {award.title}
              </h3>
              <p
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '700',
                  fontSize: '0.72rem',
                  color: award.accentColor,
                  margin: '0 0 6px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.07em',
                }}
              >
                {award.subtitle}
              </p>
              <p
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '0.62rem',
                  color: '#3D2B1F',
                  margin: '0 0 14px',
                  opacity: 0.55,
                }}
              >
                {award.org}
              </p>
              <p
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.88rem',
                  lineHeight: '1.65',
                  color: '#3D2B1F',
                  margin: '0 0 20px',
                }}
              >
                {award.detail}
              </p>
              <div
                style={{
                  background: award.accentColor,
                  color: '#FAF8F2',
                  display: 'inline-block',
                  padding: '6px 12px',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '700',
                  fontSize: '0.68rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                ↗ {award.impact}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
