import React from 'react';
import { motion as MotionLib } from 'framer-motion';

const M = MotionLib.div;

const groups = [
  {
    category: 'Languages',
    skills: [
      { name: 'C++', level: 'Advanced' },
      { name: 'Python', level: 'Advanced' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'Dart', level: 'Intermediate' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 'Advanced' },
      { name: 'Express', level: 'Advanced' },
      { name: 'NestJS', level: 'Advanced' },
      { name: 'Django', level: 'Advanced' },
      { name: 'FastAPI', level: 'Advanced' },
      { name: 'GraphQL', level: 'Advanced' },
      { name: 'gRPC', level: 'Intermediate' },
      { name: 'REST', level: 'Advanced' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 'Advanced' },
      { name: 'Next.js', level: 'Advanced' },
      { name: 'React Native', level: 'Advanced' },
      { name: 'Flutter', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
    ],
  },
  {
    category: 'Architecture',
    skills: [
      { name: 'Microservices', level: 'Advanced' },
      { name: 'Distributed Systems', level: 'Advanced' },
      { name: 'Event-driven (Kafka)', level: 'Advanced' },
    ],
  },
  {
    category: 'Databases / Infra',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'MongoDB', level: 'Advanced' },
      { name: 'Redis', level: 'Advanced' },
      { name: 'Docker', level: 'Advanced' },
      { name: 'Kubernetes', level: 'Intermediate' },
      { name: 'AWS', level: 'Advanced' },
    ],
  },
  {
    category: 'AI / ML',
    skills: [
      { name: 'TensorFlow', level: 'Advanced' },
      { name: 'LLMs (GPT, Gemini)', level: 'Advanced' },
      { name: 'LangChain', level: 'Advanced' },
      { name: 'RAG', level: 'Advanced' },
      { name: 'NLP', level: 'Intermediate' },
    ],
  },
  {
    category: 'Tools & Skills',
    skills: [
      { name: 'DSA', level: 'Advanced' },
      { name: 'OAuth 2.0 / NextAuth', level: 'Advanced' },
      { name: 'Nginx', level: 'Advanced' },
      { name: 'Ubuntu / Linux', level: 'Advanced' },
      { name: 'Jira', level: 'Intermediate' },
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

        {/* Grouped skills — compact tag layout */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '72px' }}>
          {groups.map((group, gi) => (
            <M
              key={gi}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: gi * 0.07 }}
              viewport={{ once: true }}
              style={{
                display: 'grid',
                gridTemplateColumns: '130px 1fr',
                gap: '12px 20px',
                alignItems: 'start',
                paddingBottom: '20px',
                borderBottom: '1px solid rgba(250,248,242,0.06)',
              }}
            >
              <span
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '0.58rem',
                  fontWeight: '700',
                  color: '#C4956A',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  paddingTop: '5px',
                  lineHeight: '1.4',
                }}
              >
                {group.category}
              </span>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                {group.skills.map((skill, si) => (
                  <span
                    key={si}
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: '600',
                      fontSize: '0.78rem',
                      color: skill.level === 'Advanced' ? '#FAF8F2' : 'rgba(250,248,242,0.42)',
                      background: skill.level === 'Advanced' ? 'rgba(196,149,106,0.12)' : 'transparent',
                      border: `1px solid ${skill.level === 'Advanced' ? 'rgba(196,149,106,0.35)' : 'rgba(250,248,242,0.1)'}`,
                      padding: '4px 10px',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {skill.name}
                  </span>
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
              Open to Opportunities
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
              Full-time · Contract · Remote
            </p>
          </div>
          <a
            href="mailto:sagar1teotia@gmail.com"
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
