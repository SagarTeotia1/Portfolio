import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2023',
    title: 'The Spark',
    desc: 'Smart India Hackathon National Winner. ₹2.7M in government funding. The idea becomes a system.',
  },
  {
    year: '2024',
    title: 'The Build',
    desc: 'NDRF platform deployed. Hack4Purpose Top 2 at IIT Delhi. Scale+91 Top 3 / 5000+ teams. GKM Energy production build.',
  },
  {
    year: '2025',
    title: 'The Stage',
    desc: 'World Government Summit. Honored by the Vice President of UAE. MicroKahani launched — 200M+ monthly views.',
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariant = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: '#FAF8F2',
        borderTop: '2px solid #1A1A1A',
        padding: '96px 0 0',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ marginBottom: '48px' }}
        >
          <span className="section-label">01 / About</span>
        </motion.div>

        {/* Large opening statement — full width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{ marginBottom: '72px' }}
        >
          <h2
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: '800',
              fontSize: 'clamp(2rem, 5.5vw, 4.2rem)',
              color: '#1A1A1A',
              letterSpacing: '-0.025em',
              lineHeight: '1.08',
              margin: 0,
              maxWidth: '900px',
            }}
          >
            At 20, I've built systems that governments use, platforms that reach{' '}
            <span style={{ color: '#8B6244' }}>200 million people</span>, and products that started
            as ideas at{' '}
            <span
              style={{
                fontFamily: 'Space Mono, monospace',
                fontStyle: 'italic',
                fontWeight: '400',
                fontSize: '0.9em',
              }}
            >
              2am
            </span>{' '}
            and broke at 3am.
          </h2>
        </motion.div>

        {/* Story grid */}
        <div className="about-grid" style={{ marginBottom: '80px' }}>
          {/* Prose */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1.05rem',
                lineHeight: '1.82',
                color: '#3D2B1F',
                marginBottom: '20px',
                marginTop: 0,
              }}
            >
              Recognized by the{' '}
              <strong style={{ color: '#1A1A1A' }}>Government of the UAE</strong> at the World
              Government Summit. Honored by the Vice President of UAE. Systems I built are deployed
              with the <strong style={{ color: '#1A1A1A' }}>Government of India</strong> and the
              Ministry of Home Affairs. I'm still in my second year of university.
            </p>
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1.05rem',
                lineHeight: '1.82',
                color: '#3D2B1F',
                marginBottom: '20px',
                marginTop: 0,
              }}
            >
              But here's what that journey actually looked like: late nights, broken builds, systems
              that fell apart under scale. Hackathon ideas that became deployed products — then broke
              again, and needed fixing at 3am.
            </p>
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1.05rem',
                lineHeight: '1.82',
                color: '#3D2B1F',
                marginBottom: '20px',
                marginTop: 0,
              }}
            >
              I built AI+VR disaster response systems for India's NDRF, turning a hackathon win into{' '}
              <strong style={{ color: '#1A1A1A' }}>₹2.7M in government funding</strong>. I built the
              backbone of <strong style={{ color: '#1A1A1A' }}>MicroKahani</strong> for{' '}
              <strong style={{ color: '#1A1A1A' }}>Digital Kalakaar</strong> — a production house with
              15M+ followers and 200M+ monthly views across social media. I've built navigation for
              people with disabilities, solar platforms, logistics systems.
            </p>
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1.05rem',
                lineHeight: '1.82',
                color: '#3D2B1F',
                marginBottom: '0',
                marginTop: 0,
              }}
            >
              ₹35L+ in grants and awards. But more than numbers — I've learned how to take ideas
              from zero to something that actually works under real pressure. I've stayed when systems
              broke. Fixed. Kept going.
            </p>
          </motion.div>

          {/* Fast facts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            {[
              { label: 'Location', value: 'Greater Noida, India' },
              { label: 'Open to', value: 'SF · NYC · Anywhere · Remote OK' },
              { label: 'Studying', value: 'B.Tech CSE, MAIT · 2023–2027' },
              { label: 'Experience', value: '2+ yrs · Distributed Systems & Full Stack' },
              { label: 'Seeking', value: 'Backend / Full Stack · US Relocation Ready' },
            ].map((fact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  padding: '14px 0',
                  borderBottom: '1px solid #EDE6D3',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '0.58rem',
                    color: '#8B6244',
                    fontWeight: '700',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    minWidth: '80px',
                    paddingTop: '2px',
                    flexShrink: 0,
                  }}
                >
                  {fact.label}
                </span>
                <span
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '0.92rem',
                    color: '#1A1A1A',
                    fontWeight: '600',
                    lineHeight: '1.45',
                  }}
                >
                  {fact.value}
                </span>
              </motion.div>
            ))}

            <div style={{ marginTop: '24px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a
                href="mailto:team@sagarteotia.in?subject=Resume Request"
                className="brutal-btn"
                style={{
                  background: '#8B6244',
                  color: '#FAF8F2',
                  padding: '12px 22px',
                  fontWeight: '700',
                  fontSize: '0.78rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  flexGrow: 1,
                  textAlign: 'center',
                }}
              >
                Request Resume →
              </a>
              <a
                href="https://github.com/sagar1teotia"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn"
                style={{
                  background: 'transparent',
                  color: '#1A1A1A',
                  padding: '12px 22px',
                  fontWeight: '700',
                  fontSize: '0.78rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  flexGrow: 1,
                  textAlign: 'center',
                }}
              >
                GitHub →
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Timeline — full width, sand background */}
      <div
        style={{
          background: '#EDE6D3',
          borderTop: '2px solid #1A1A1A',
          padding: '64px 24px',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.68rem',
              fontWeight: '700',
              color: '#8B6244',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '40px',
              marginTop: 0,
            }}
          >
            The Journey
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '0',
            }}
          >
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariant}
                className="about-timeline-item"
                style={{
                  borderRight: i < timeline.length - 1 ? '2px solid #1A1A1A' : 'none',
                  paddingLeft: i > 0 ? '32px' : '0',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '800',
                    fontSize: '2.5rem',
                    color: '#1A1A1A',
                    lineHeight: '1',
                    marginBottom: '8px',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {item.year}
                </div>
                <div
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '700',
                    fontSize: '0.82rem',
                    color: '#8B6244',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '10px',
                  }}
                >
                  {item.title}
                </div>
                <p
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '0.9rem',
                    lineHeight: '1.65',
                    color: '#3D2B1F',
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
