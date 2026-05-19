import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    num: '01',
    role: 'Founding Engineer',
    company: 'Micro Kahani PVT LTD',
    period: 'Dec 2025 – Present',
    tag: 'Current',
    tagBg: '#8B6244',
    points: [
      'Built and launched a scalable OTT micro-drama app on Google Play Store and App Store for production house Digital Kalakaar (15M+ followers)',
      'Designed high-performance backend and streaming systems supporting 200K+ content views',
      'Developed content ingestion pipelines, creator/admin tooling, and analytics systems to support rapid scaling',
      'Architected media infrastructure with HLS streaming and adaptive bitrate optimization for reliable playback across varying network conditions',
    ],
    stack: ['Node.js', 'Redis', 'HLS', 'Cloud Storage', 'TypeScript'],
    highlight: '15M+ Followers · 200K+ Content Views',
    isCurrent: true,
  },
  {
    num: '02',
    role: 'Project Lead',
    company: 'NDRF — Ministry of Home Affairs, Govt. of India',
    period: 'Dec 2023 – Dec 2025',
    tag: '₹2.7M Funded',
    tagBg: '#1A1A1A',
    points: [
      'Designed and deployed an AI-powered VR disaster-response training platform used by the National Disaster Response Force (NDRF)',
      'Architected a distributed microservices system — Node.js, Kafka, Redis, PostgreSQL — handling high concurrent load with real-time event processing',
      'Built analytics pipelines for scenario tracking and performance insights, enabling data-driven training optimization',
      'Reduced training setup time by 40% through system design and automation improvements',
    ],
    stack: ['Node.js', 'Kafka', 'Redis', 'PostgreSQL', 'VR', 'Microservices', 'AI/ML'],
    highlight: '₹2.7M Govt. Funding · NDRF Deployment · 40% Faster Setup',
    isCurrent: false,
  },
  {
    num: '03',
    role: 'Software Engineer',
    company: 'GKM Energy PVT LTD',
    period: 'Dec 2024 – Apr 2025',
    tag: 'MNRE Approved',
    tagBg: '#8B6244',
    points: [
      'Built and deployed a production-grade full-stack platform for an MNRE-approved solar manufacturing company',
      'Owned backend architecture, API design, and deployment — ensuring scalability and performance',
      'Optimized database queries and system performance, improving response times and reliability',
    ],
    stack: ['Node.js', 'PostgreSQL', 'React', 'REST API', 'Cloud Deployment'],
    highlight: 'MNRE-Approved Solar Platform',
    isCurrent: false,
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState({});

  const toggle = (i) => setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <section
      id="experience"
      className="section-mobile"
      style={{
        background: '#EDE6D3',
        padding: '96px 0',
        borderTop: '2px solid #1A1A1A',
        borderBottom: '2px solid #1A1A1A',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ghost number */}
      <div className="section-ghost-num">03</div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '72px' }}
        >
          <span className="section-label">03 / Experience</span>
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
            WHERE I'VE
            <br />
            <span style={{ color: '#8B6244' }}>BUILT</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              style={{
                display: 'flex',
                gap: '0',
                marginBottom: i < experiences.length - 1 ? '0' : '0',
              }}
            >
              {/* Left: number + connector */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '56px',
                  flexShrink: 0,
                  paddingTop: '28px',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    background: exp.isCurrent ? '#8B6244' : '#1A1A1A',
                    border: '2px solid #1A1A1A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    zIndex: 1,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '0.6rem',
                      fontWeight: '700',
                      color: '#FAF8F2',
                    }}
                  >
                    {exp.num}
                  </span>
                </div>
                {i < experiences.length - 1 && (
                  <div
                    style={{
                      width: '2px',
                      flex: 1,
                      background: 'linear-gradient(to bottom, #1A1A1A, rgba(26,26,26,0.15))',
                      marginTop: '0',
                      minHeight: '40px',
                    }}
                  />
                )}
              </div>

              {/* Right: card */}
              <div
                style={{
                  flex: 1,
                  marginLeft: '20px',
                  marginBottom: i < experiences.length - 1 ? '24px' : '0',
                }}
              >
                <div
                  style={{
                    background: exp.isCurrent ? '#FFFFFF' : '#FFFFFF',
                    border: `2px solid #1A1A1A`,
                    boxShadow: exp.isCurrent ? '4px 4px 0 #8B6244' : '4px 4px 0 #1A1A1A',
                  }}
                >
                  {/* Card header */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '18px 24px',
                      borderBottom: '2px solid #1A1A1A',
                      flexWrap: 'wrap',
                      gap: '10px',
                      background: exp.isCurrent ? '#FAF8F2' : '#FFFFFF',
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontWeight: '800',
                          fontSize: '1rem',
                          color: '#1A1A1A',
                          margin: 0,
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {exp.role}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontWeight: '600',
                          fontSize: '0.8rem',
                          color: '#8B6244',
                          margin: '2px 0 0',
                        }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <span
                        style={{
                          fontFamily: 'Space Mono, monospace',
                          fontSize: '0.62rem',
                          color: '#3D2B1F',
                          opacity: 0.55,
                        }}
                      >
                        {exp.period}
                      </span>
                      <span
                        style={{
                          background: exp.tagBg,
                          color: '#FAF8F2',
                          padding: '4px 9px',
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontSize: '0.6rem',
                          fontWeight: '700',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {exp.tag}
                      </span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div style={{ padding: '22px 24px' }}>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', marginBottom: '4px' }}>
                      {(expanded[i] ? exp.points : exp.points.slice(0, 2)).map((point, j) => (
                        <li
                          key={j}
                          style={{
                            fontFamily: 'Space Grotesk, sans-serif',
                            fontSize: '0.9rem',
                            lineHeight: '1.7',
                            color: '#3D2B1F',
                            marginBottom: '7px',
                            paddingLeft: '14px',
                            position: 'relative',
                          }}
                        >
                          <span
                            style={{
                              position: 'absolute',
                              left: 0,
                              color: '#8B6244',
                              fontWeight: '800',
                              lineHeight: '1.7',
                            }}
                          >
                            ·
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    {exp.points.length > 2 && (
                      <button
                        onClick={() => toggle(i)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontWeight: '700',
                          fontSize: '0.78rem',
                          color: '#8B6244',
                          padding: '0 0 14px 14px',
                          letterSpacing: '0.04em',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        {expanded[i] ? '↑ show less' : `··· ${exp.points.length - 2} more`}
                      </button>
                    )}

                    <div style={{ marginBottom: '18px' }} />

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px' }}>
                      {exp.stack.map((tech, j) => (
                        <span
                          key={j}
                          style={{
                            border: '1.5px solid #1A1A1A',
                            padding: '3px 9px',
                            fontFamily: 'Space Mono, monospace',
                            fontSize: '0.58rem',
                            fontWeight: '700',
                            color: '#1A1A1A',
                            letterSpacing: '0.04em',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div
                      style={{
                        background: '#EDE6D3',
                        border: '1.5px solid #1A1A1A',
                        padding: '9px 14px',
                        display: 'inline-block',
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        color: '#3D2B1F',
                        letterSpacing: '0.03em',
                      }}
                    >
                      {exp.highlight}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ marginTop: '48px' }}
        >
          <div
            style={{
              background: '#1A1A1A',
              color: '#FAF8F2',
              padding: '24px 28px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
              border: '2px solid #1A1A1A',
              boxShadow: '4px 4px 0 #8B6244',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '0.58rem',
                  color: '#C4956A',
                  fontWeight: '700',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                Education
              </div>
              <div
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '800',
                  fontSize: '1.05rem',
                  marginBottom: '4px',
                }}
              >
                B.Tech Computer Science Engineering
              </div>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.85rem', color: '#C4956A' }}>
                Maharaja Agrasen Institute of Technology (GGSIPU)
              </div>
            </div>
            <div
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '1.4rem',
                fontWeight: '700',
                color: '#C4956A',
                whiteSpace: 'nowrap',
              }}
            >
              2023 – 2027
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
