import React from 'react';
import { motion } from 'framer-motion';

const facts = [
  { label: 'Location', value: 'Greater Noida, India · Open to SF / NYC / Anywhere' },
  { label: 'Education', value: 'B.Tech CSE, MAIT (GGSIPU) · 2023–2027' },
  { label: 'Experience', value: '2+ years · Full Stack & Distributed Systems' },
  { label: 'Seeking', value: 'Backend / Full Stack · Remote OK · US Relocation Ready' },
  { label: 'GitHub', value: 'github.com/sagar1teotia' },
  { label: 'Email', value: 'team@sagarteotia.in' },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: '#FAF8F2',
        borderTop: '2px solid #1A1A1A',
        borderBottom: '2px solid #1A1A1A',
        padding: '96px 0',
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
          <span className="section-label">01 / About</span>
          <h2
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: '800',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              color: '#1A1A1A',
              letterSpacing: '-0.02em',
              margin: '8px 0 0',
              lineHeight: '1',
            }}
          >
            THE CAGE
            <br />
            <span style={{ color: '#8B6244' }}>&amp; THE BIRD</span>
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="about-grid">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1.25rem',
                lineHeight: '1.75',
                color: '#1A1A1A',
                fontWeight: '600',
                marginBottom: '24px',
                marginTop: 0,
              }}
            >
              At 20, I've done things that don't typically happen at 20.
            </p>
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1rem',
                lineHeight: '1.8',
                color: '#3D2B1F',
                marginBottom: '20px',
                marginTop: 0,
              }}
            >
              Recognized by the <strong>Government of the United Arab Emirates</strong> at the
              World Government Summit. Honored by the Vice President of UAE. Systems I built are
              deployed with the <strong>Government of India</strong> and the Ministry of Home
              Affairs. And I'm still in my second year of university.
            </p>
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1rem',
                lineHeight: '1.8',
                color: '#3D2B1F',
                marginBottom: '20px',
                marginTop: 0,
              }}
            >
              But here's what that journey actually looked like: late nights, broken builds,
              systems that fell apart under scale. Hackathon ideas that became deployed
              products—then broke again, and needed fixing at 3am.
            </p>
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1rem',
                lineHeight: '1.8',
                color: '#3D2B1F',
                marginBottom: '20px',
                marginTop: 0,
              }}
            >
              I built AI+VR disaster response systems for India's NDRF, turning a hackathon win
              into <strong>₹2.7M in government funding</strong> and real deployment. I built the
              technical backbone of <strong>MicroKahani</strong>—a micro-drama OTT platform now
              powering Digital Kalakaar with 15M+ followers and 200M+ monthly views.
            </p>
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1rem',
                lineHeight: '1.8',
                color: '#3D2B1F',
                marginBottom: '36px',
                marginTop: 0,
              }}
            >
              <strong>₹35L+ in grants and cash awards.</strong> But more than the numbers, I've
              learned how to take ideas from zero to something that actually works under real
              pressure, with real users. I've built things that failed quietly, and systems that
              broke under scale—but I stayed, fixed them, and kept going.
            </p>

            {/* Kafka pull quote */}
            <div
              style={{
                background: '#EDE6D3',
                border: '2px solid #1A1A1A',
                boxShadow: '4px 4px 0 #1A1A1A',
                padding: '24px 28px',
                borderLeft: '6px solid #8B6244',
              }}
            >
              <p
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '1.05rem',
                  fontStyle: 'italic',
                  color: '#3D2B1F',
                  margin: 0,
                  lineHeight: '1.65',
                }}
              >
                "I am a cage, in search of a bird."
              </p>
              <p
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.72rem',
                  color: '#8B6244',
                  fontWeight: '700',
                  margin: '12px 0 0',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                — Franz Kafka · What keeps me building
              </p>
            </div>
          </motion.div>

          {/* Key facts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            {facts.map((fact, i) => (
              <div
                key={i}
                style={{
                  background: '#FFFFFF',
                  border: '2px solid #1A1A1A',
                  boxShadow: '3px 3px 0 #1A1A1A',
                  padding: '16px 20px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '0.6rem',
                    color: '#8B6244',
                    fontWeight: '700',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    marginBottom: '6px',
                  }}
                >
                  {fact.label}
                </div>
                <div
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '0.92rem',
                    color: '#1A1A1A',
                    fontWeight: '600',
                    lineHeight: '1.4',
                  }}
                >
                  {fact.value}
                </div>
              </div>
            ))}

            {/* Resume CTA */}
            <a
              href="mailto:team@sagarteotia.in?subject=Resume Request"
              className="brutal-btn"
              style={{
                marginTop: '8px',
                background: '#8B6244',
                color: '#FAF8F2',
                padding: '14px 20px',
                fontWeight: '700',
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textAlign: 'center',
                display: 'block',
              }}
            >
              Request Resume →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
