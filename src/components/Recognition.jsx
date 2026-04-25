import React from 'react';
import { motion } from 'framer-motion';

const awards = [
  {
    num: '01',
    title: 'Global Best M-Gov Award',
    subtitle: 'Bronze — World Government Summit',
    org: 'UAE Government · Dubai, 2025',
    year: '2025',
    detail:
      'Honored by the Vice President of the UAE at the World Government Summit—one of the highest international recognitions in government technology. Represented India on a global stage.',
    impact: 'International Recognition',
    bg: '#EDE6D3',
  },
  {
    num: '02',
    title: 'Smart India Hackathon',
    subtitle: 'National Winner',
    org: 'Govt. of India · Ministry of Education',
    year: '2023',
    detail:
      'Won nationally with an AI+VR disaster response platform. The win led directly to ₹2.7M+ in government funding and real-world deployment with the NDRF under the Ministry of Home Affairs.',
    impact: '₹2.7M Funded · NDRF Deployed',
    bg: '#FFFFFF',
  },
  {
    num: '03',
    title: 'Hack4Purpose',
    subtitle: '1st Runner-Up',
    org: 'IIT Delhi · 600+ Teams',
    year: '2024',
    detail:
      'Competed against 600+ teams at IIT Delhi—one of India\'s premier institutions—finishing 1st Runner-Up with a socially impactful tech solution.',
    impact: 'Top 2 / 600+ Teams',
    bg: '#FFFFFF',
  },
  {
    num: '04',
    title: 'Scale+91 Hackathon',
    subtitle: 'Top 3',
    org: '5000+ Teams Nationwide',
    year: '2024',
    detail:
      'Placed in the top 3 out of 5000+ competing teams in one of India\'s largest startup-focused hackathons, consistently turning ambitious ideas into working systems.',
    impact: 'Top 3 / 5000+ Teams',
    bg: '#EDE6D3',
  },
];

export default function Recognition() {
  return (
    <section
      id="recognition"
      style={{
        background: '#FAF8F2',
        padding: '96px 0',
        borderBottom: '2px solid #1A1A1A',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '64px' }}
        >
          <span className="section-label">02 / Recognition</span>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '24px',
              marginTop: '8px',
            }}
          >
            <h2
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: '800',
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                color: '#1A1A1A',
                letterSpacing: '-0.02em',
                margin: 0,
                lineHeight: '1',
              }}
            >
              GLOBALLY
              <br />
              <span style={{ color: '#8B6244' }}>RECOGNIZED</span>
            </h2>
            <div
              style={{
                background: '#1A1A1A',
                color: '#FAF8F2',
                padding: '18px 24px',
                border: '2px solid #1A1A1A',
                boxShadow: '4px 4px 0 #8B6244',
                minWidth: '180px',
              }}
            >
              <div
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '800',
                  fontSize: '2.2rem',
                  lineHeight: '1',
                }}
              >
                ₹35L+
              </div>
              <div
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.68rem',
                  fontWeight: '700',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginTop: '6px',
                  color: '#C4956A',
                }}
              >
                Total Grants &amp; Awards
              </div>
            </div>
          </div>
        </motion.div>

        {/* Awards grid */}
        <div className="recognition-grid">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="brutal-card"
              style={{ background: award.bg, padding: '28px' }}
            >
              {/* Top row */}
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
                    fontSize: '0.72rem',
                    color: '#8B6244',
                    fontWeight: '700',
                    letterSpacing: '0.12em',
                  }}
                >
                  {award.num}
                </span>
                <span
                  style={{
                    background: '#1A1A1A',
                    color: '#FAF8F2',
                    padding: '4px 10px',
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '0.62rem',
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
                  fontSize: '1.3rem',
                  color: '#1A1A1A',
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
                  fontSize: '0.78rem',
                  color: '#8B6244',
                  margin: '0 0 6px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                {award.subtitle}
              </p>
              <p
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '0.66rem',
                  color: '#3D2B1F',
                  margin: '0 0 16px',
                  opacity: 0.65,
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

              {/* Impact badge */}
              <div
                style={{
                  background: '#8B6244',
                  color: '#FAF8F2',
                  display: 'inline-block',
                  padding: '6px 14px',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '700',
                  fontSize: '0.72rem',
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
