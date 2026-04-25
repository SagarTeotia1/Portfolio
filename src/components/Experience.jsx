import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    num: '01',
    role: 'Founding Engineer & Technical Lead',
    company: 'Micro Kahani PVT LTD',
    period: 'Dec 2025 – Present',
    tag: 'Current',
    tagBg: '#8B6244',
    points: [
      'Built and scaled a distributed OTT backend for short-form video streaming using Node.js, Redis, and cloud storage—optimized for high-traffic bursts and low-latency delivery',
      'Designed media infrastructure with HLS streaming and adaptive bitrate optimization for reliable playback across varying network conditions',
      'Developed content ingestion pipelines, creator/admin tooling, and analytics systems to support rapid scaling',
      'Drove system reliability under real-world load, contributing to 15M+ organic reach via Instagram-led distribution and 200M+ monthly views',
    ],
    stack: ['Node.js', 'Redis', 'HLS', 'Cloud Storage', 'TypeScript', 'Microservices'],
    highlight: '15M+ Reach · 200M+ Monthly Views',
    headerBg: '#FAF8F2',
  },
  {
    num: '02',
    role: 'Project Lead',
    company: 'NDRF — Ministry of Home Affairs, Govt. of India',
    period: 'Feb 2024 – Dec 2025',
    tag: '₹2.7M Funded',
    tagBg: '#1A1A1A',
    points: [
      'Designed and deployed an AI-powered VR disaster-response training platform used by the National Disaster Response Force (NDRF)',
      'Architected a distributed microservices system using Node.js, Kafka, Redis, and PostgreSQL, handling high concurrent load with real-time event processing',
      'Built analytics pipelines for scenario tracking and performance insights, enabling data-driven training optimization',
      'Reduced training setup time by 40% through system design and automation improvements',
      'Delivered a production-ready system backed by ₹2.7M+ government funding for real-world deployment',
    ],
    stack: ['Node.js', 'Kafka', 'Redis', 'PostgreSQL', 'VR', 'Microservices', 'AI/ML'],
    highlight: '₹2.7M Govt. Funding · NDRF Deployment',
    headerBg: '#FFFFFF',
  },
  {
    num: '03',
    role: 'Software Engineer',
    company: 'GKM Energy PVT LTD',
    period: 'Aug 2024 – Feb 2025',
    tag: 'MNRE Approved',
    tagBg: '#8B6244',
    points: [
      'Built and deployed a production-grade full-stack platform for an MNRE-approved solar manufacturing company',
      'Owned backend architecture, API design, and deployment, ensuring scalability and performance',
      'Optimized database queries and system performance, improving response times and overall reliability',
    ],
    stack: ['Node.js', 'PostgreSQL', 'React', 'REST API', 'Cloud Deployment'],
    highlight: 'MNRE-Approved Solar Platform',
    headerBg: '#FFFFFF',
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        background: '#EDE6D3',
        padding: '96px 0',
        borderTop: '2px solid #1A1A1A',
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
          <span className="section-label">03 / Experience</span>
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
            WHERE I'VE
            <br />
            <span style={{ color: '#8B6244' }}>BUILT</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: '#FFFFFF',
                border: '2px solid #1A1A1A',
                boxShadow: '4px 4px 0 #1A1A1A',
              }}
            >
              {/* Card header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 28px',
                  borderBottom: '2px solid #1A1A1A',
                  flexWrap: 'wrap',
                  gap: '12px',
                  background: exp.headerBg,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span
                    style={{
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '0.72rem',
                      fontWeight: '700',
                      color: '#8B6244',
                      minWidth: '28px',
                    }}
                  >
                    {exp.num}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontWeight: '800',
                        fontSize: '1.05rem',
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
                        fontSize: '0.82rem',
                        color: '#8B6244',
                        margin: 0,
                        marginTop: '2px',
                      }}
                    >
                      {exp.company}
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '0.68rem',
                      color: '#3D2B1F',
                      opacity: 0.6,
                    }}
                  >
                    {exp.period}
                  </span>
                  <span
                    style={{
                      background: exp.tagBg,
                      color: '#FAF8F2',
                      padding: '4px 10px',
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '0.62rem',
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
              <div style={{ padding: '24px 28px' }}>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', marginBottom: '20px' }}>
                  {exp.points.map((point, j) => (
                    <li
                      key={j}
                      style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: '0.92rem',
                        lineHeight: '1.7',
                        color: '#3D2B1F',
                        marginBottom: '8px',
                        paddingLeft: '16px',
                        position: 'relative',
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          color: '#8B6244',
                          fontWeight: '800',
                        }}
                      >
                        ·
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Stack tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                  {exp.stack.map((tech, j) => (
                    <span
                      key={j}
                      style={{
                        border: '1.5px solid #1A1A1A',
                        padding: '3px 10px',
                        fontFamily: 'Space Mono, monospace',
                        fontSize: '0.62rem',
                        fontWeight: '700',
                        color: '#1A1A1A',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact */}
                <div
                  style={{
                    background: '#EDE6D3',
                    border: '1.5px solid #1A1A1A',
                    padding: '10px 16px',
                    display: 'inline-block',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    color: '#3D2B1F',
                    letterSpacing: '0.03em',
                  }}
                >
                  ↗ {exp.highlight}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education block */}
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
                  fontSize: '0.62rem',
                  color: '#C4956A',
                  fontWeight: '700',
                  letterSpacing: '0.14em',
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
              <div
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.88rem',
                  color: '#C4956A',
                }}
              >
                Maharaja Agrasen Institute of Technology (GGSIPU)
              </div>
            </div>
            <div
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '1.5rem',
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
