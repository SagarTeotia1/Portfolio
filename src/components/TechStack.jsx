import React from 'react';
import { motion as MotionLib } from 'framer-motion';

const M = MotionLib.div;

const skills = [
  { name: 'Node.js', level: 'Advanced' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'React Native', level: 'Advanced' },
  { name: 'Python', level: 'Advanced' },
  { name: 'Express', level: 'Advanced' },
  { name: 'Distributed Systems', level: 'Advanced' },
  { name: 'Microservices', level: 'Advanced' },
  { name: 'Deep Learning', level: 'Advanced' },
  { name: 'Google Cloud', level: 'Advanced' },
  { name: 'PostgreSQL', level: 'Advanced' },
  { name: 'Redis', level: 'Advanced' },
  { name: 'Kafka', level: 'Advanced' },
  { name: 'React', level: 'Advanced' },
  { name: 'Next.js', level: 'Advanced' },
  { name: 'Docker', level: 'Intermediate' },
  { name: 'AWS', level: 'Intermediate' },
];

export default function TechStack() {
  return (
    <section
      id="stack"
      style={{
        background: '#1A1A1A',
        padding: '96px 0',
        borderBottom: '2px solid #1A1A1A',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <M
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '64px' }}
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
              letterSpacing: '-0.02em',
              margin: '8px 0 0',
              lineHeight: '1',
            }}
          >
            TOOLS OF
            <br />
            <span style={{ color: '#C4956A' }}>THE TRADE</span>
          </h2>
        </M>

        {/* Skills */}
        <M
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="tech-grid"
        >
          {skills.map((skill, i) => (
            <M
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              viewport={{ once: true }}
              whileHover={{
                borderColor: '#C4956A',
                backgroundColor: 'rgba(196,149,106,0.12)',
              }}
              style={{
                border: `2px solid ${skill.level === 'Advanced' ? '#C4956A' : 'rgba(250,248,242,0.2)'}`,
                padding: '12px 18px',
                background: skill.level === 'Advanced' ? 'rgba(196,149,106,0.08)' : 'transparent',
                cursor: 'default',
              }}
            >
              <span
                style={{
                  display: 'block',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  color: skill.level === 'Advanced' ? '#C4956A' : 'rgba(250,248,242,0.6)',
                  letterSpacing: '0.03em',
                }}
              >
                {skill.name}
              </span>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '0.55rem',
                  color: skill.level === 'Advanced' ? '#8B6244' : 'rgba(250,248,242,0.3)',
                  fontWeight: '700',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginTop: '3px',
                }}
              >
                {skill.level}
              </span>
            </M>
          ))}
        </M>

        {/* Availability */}
        <M
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          style={{
            marginTop: '64px',
            paddingTop: '48px',
            borderTop: '1px solid rgba(250,248,242,0.08)',
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
                margin: 0,
              }}
            >
              Open to Remote Work
            </p>
            <p
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.72rem',
                color: '#8B6244',
                margin: '6px 0 0',
                letterSpacing: '0.05em',
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
              boxShadow: '3px 3px 0 #C4956A',
            }}
          >
            Let's Talk →
          </a>
        </M>
      </div>
    </section>
  );
}
