import React from 'react';
import { motion as MotionLib } from 'framer-motion';

const M = MotionLib.div;

const groups = [
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 'Advanced' },
      { name: 'Express', level: 'Advanced' },
      { name: 'Python', level: 'Advanced' },
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'Redis', level: 'Advanced' },
      { name: 'Kafka', level: 'Advanced' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'React', level: 'Advanced' },
      { name: 'React Native', level: 'Advanced' },
      { name: 'Next.js', level: 'Advanced' },
    ],
  },
  {
    category: 'Infrastructure',
    skills: [
      { name: 'Distributed Systems', level: 'Advanced' },
      { name: 'Microservices', level: 'Advanced' },
      { name: 'Google Cloud', level: 'Advanced' },
      { name: 'Docker', level: 'Intermediate' },
      { name: 'AWS', level: 'Intermediate' },
    ],
  },
  {
    category: 'AI / ML',
    skills: [
      { name: 'Deep Learning', level: 'Advanced' },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="stack"
      className="section-mobile"
      style={{
        background: '#1A1A1A',
        padding: '96px 0',
        borderTop: '2px solid #1A1A1A',
        borderBottom: '2px solid #1A1A1A',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ghost number */}
      <div className="section-ghost-num-light">05</div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <M
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '72px' }}
        >
          <span
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.72rem',
              fontWeight: '700',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#C4956A',
              display: 'block',
              marginBottom: '4px',
            }}
          >
            05 / Stack
          </span>
          <h2
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: '800',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              color: '#FAF8F2',
              letterSpacing: '-0.025em',
              margin: '8px 0 0',
              lineHeight: '1',
            }}
          >
            TOOLS OF
            <br />
            <span style={{ color: '#C4956A' }}>THE TRADE</span>
          </h2>
        </M>

        {/* Grouped skills */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            marginBottom: '72px',
          }}
        >
          {groups.map((group, gi) => (
            <M
              key={gi}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '0.6rem',
                  fontWeight: '700',
                  color: '#C4956A',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                  paddingBottom: '10px',
                  borderBottom: '1px solid rgba(196,149,106,0.2)',
                }}
              >
                {group.category}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {group.skills.map((skill, si) => (
                  <M
                    key={si}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: gi * 0.1 + si * 0.06 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '9px 14px',
                      border: `1.5px solid ${skill.level === 'Advanced' ? 'rgba(196,149,106,0.4)' : 'rgba(250,248,242,0.12)'}`,
                      background: skill.level === 'Advanced' ? 'rgba(196,149,106,0.06)' : 'transparent',
                      cursor: 'default',
                      transition: 'border-color 0.15s',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        color: skill.level === 'Advanced' ? '#C4956A' : 'rgba(250,248,242,0.5)',
                      }}
                    >
                      {skill.name}
                    </span>
                    <span
                      style={{
                        fontFamily: 'Space Mono, monospace',
                        fontSize: '0.5rem',
                        color: skill.level === 'Advanced' ? 'rgba(196,149,106,0.6)' : 'rgba(250,248,242,0.2)',
                        fontWeight: '700',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {skill.level === 'Advanced' ? '●●●' : '●●○'}
                    </span>
                  </M>
                ))}
              </div>
            </M>
          ))}
        </div>

        {/* Availability */}
        <M
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          style={{
            paddingTop: '48px',
            borderTop: '1px solid rgba(250,248,242,0.06)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: '700',
                fontSize: '1.1rem',
                color: '#FAF8F2',
                margin: '0 0 6px',
              }}
            >
              Open to Remote Work
            </p>
            <p
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.7rem',
                color: '#8B6244',
                margin: 0,
                letterSpacing: '0.04em',
              }}
            >
              Willing to relocate: San Francisco · New York · Anywhere in the US
            </p>
          </div>
          <a
            href="mailto:team@sagarteotia.in"
            className="brutal-btn"
            style={{
              background: '#C4956A',
              color: '#1A1A1A',
              padding: '12px 28px',
              fontWeight: '700',
              fontSize: '0.82rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              border: '2px solid #C4956A',
              boxShadow: '3px 3px 0 rgba(196,149,106,0.4)',
            }}
          >
            Let's Talk →
          </a>
        </M>
      </div>
    </section>
  );
}
