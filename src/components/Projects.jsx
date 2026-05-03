import React, { useState } from 'react';
import { motion } from 'framer-motion';

const featured = {
  num: '01',
  name: 'SANGRAKSHAN',
  tagline: 'AI + VR Disaster Response Training',
  desc: "Production-grade training platform for India's National Disaster Response Force. Started as a Smart India Hackathon winner—backed by ₹2.7M+ government funding and deployed in real NDRF environments. This is the project I'm most proud of: an idea on a whiteboard that now trains people who save lives.",
  impact: '₹2.7M Funded · NDRF Deployed · 40% Faster Training Setup',
  stack: ['Node.js', 'Kafka', 'Redis', 'PostgreSQL', 'VR', 'AI/ML', 'Microservices'],
  org: 'Ministry of Home Affairs, Govt. of India',
  link: null,
};

const projects = [
  {
    num: '02',
    name: 'MICROKAHANI',
    tagline: 'Distributed OTT Micro-Drama Platform',
    desc: 'Built and scaled the technical backbone of a micro-drama streaming platform for Digital Kalakaar. HLS adaptive streaming, high-traffic burst handling, creator tooling, and analytics systems.',
    impact: '15M+ Followers · 200K+ Content Views',
    stack: ['Node.js', 'Redis', 'HLS', 'TypeScript', 'Analytics'],
    org: 'Micro Kahani PVT LTD',
    bg: '#FFFFFF',
    link: null,
  },
  {
    num: '03',
    name: 'ACCESSWAY',
    tagline: 'AI-driven Accessibility Analytics',
    desc: 'Designed accessibility scoring model with crowdsourced validation datasets. Improved navigation reliability for differently-abled through data-driven optimization and AR integration.',
    impact: 'Global Best M-Gov Award 2025 – Bronze · UAE VP Honored',
    stack: ['Python', 'Data Pipelines', 'AR Integration'],
    org: 'World Gov Summit 2025',
    bg: '#EDE6D3',
    link: null,
  },
  {
    num: '04',
    name: 'COLLEGEPAGLU',
    tagline: 'Smart Campus Commerce Platform',
    desc: 'Campus-focused platform streamlining student logistics, food ordering, delivery coordination, and sustainability tracking through route optimization and smart campus commerce workflows.',
    impact: 'Route Optimization · Smart Campus Analytics',
    stack: ['React Native', 'Node.js', 'MongoDB', 'Redis', 'GCP'],
    org: 'Campus Product',
    bg: '#FFFFFF',
    link: null,
  },
  {
    num: '05',
    name: 'CAMPUSMART',
    tagline: 'Student Marketplace · 3 Colleges',
    desc: 'Full-stack second-hand marketplace for books, drafts, and student essentials. Scaled to 2.5K+ users enabling 1K+ campus transactions across 3 colleges.',
    impact: '2.5K+ Users · 1K+ Transactions',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'Azure'],
    org: 'campusmart.store',
    bg: '#FAF8F2',
    link: null,
  },
];

export default function Projects() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      id="projects"
      className="section-mobile"
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
      <div className="section-ghost-num">04</div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '72px' }}
        >
          <span className="section-label">04 / Projects</span>
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
            WHAT I'VE
            <br />
            <span style={{ color: '#8B6244' }}>BUILT</span>
          </h2>
        </motion.div>

        {/* FEATURED — Sangrakshan */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="project-featured"
          style={{
            background: '#1A1A1A',
            marginBottom: '16px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
            }}
            className="featured-inner"
          >
            {/* Content */}
            <div className="featured-pad">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '28px',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span
                    style={{
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '0.68rem',
                      color: '#C4956A',
                      fontWeight: '700',
                      opacity: 0.6,
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
                      fontSize: '0.6rem',
                      fontWeight: '800',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Featured · Crown Project
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '0.6rem',
                    color: 'rgba(250,248,242,0.35)',
                    letterSpacing: '0.08em',
                    textAlign: 'right',
                    maxWidth: '200px',
                    lineHeight: '1.5',
                  }}
                >
                  {featured.org}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '800',
                  fontSize: 'clamp(1.8rem, 5vw, 3rem)',
                  color: '#FAF8F2',
                  margin: '0 0 6px',
                  letterSpacing: '-0.025em',
                  lineHeight: '1.05',
                }}
              >
                {featured.name}
              </h3>
              <p
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '700',
                  fontSize: '0.78rem',
                  color: '#C4956A',
                  margin: '0 0 20px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {featured.tagline}
              </p>
              <p
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '1rem',
                  lineHeight: '1.72',
                  color: 'rgba(250,248,242,0.75)',
                  margin: '0 0 28px',
                  maxWidth: '600px',
                }}
              >
                {featured.desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                {featured.stack.map((tech, j) => (
                  <span
                    key={j}
                    style={{
                      border: '1.5px solid rgba(250,248,242,0.2)',
                      padding: '3px 10px',
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '0.58rem',
                      fontWeight: '700',
                      color: 'rgba(250,248,242,0.7)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div
                style={{
                  background: '#C4956A',
                  color: '#1A1A1A',
                  padding: '10px 18px',
                  display: 'inline-block',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: '800',
                  letterSpacing: '0.06em',
                }}
              >
                ↗ {featured.impact}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other projects — 3 col grid */}
        <div className="projects-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: project.bg,
                border: '2px solid #1A1A1A',
                boxShadow: hoveredCard === i ? '6px 6px 0 #1A1A1A' : '3px 3px 0 #1A1A1A',
                transform: hoveredCard === i ? 'translate(-2px, -2px)' : 'translate(0, 0)',
                transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'default',
              }}
            >
              <div style={{ padding: '24px 22px 0', display: 'flex', justifyContent: 'space-between' }}>
                <span
                  style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: '#1A1A1A',
                    lineHeight: '1',
                    opacity: 0.08,
                  }}
                >
                  {project.num}
                </span>
                <span
                  style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '0.55rem',
                    color: '#8B6244',
                    fontWeight: '700',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    maxWidth: '130px',
                    textAlign: 'right',
                    lineHeight: '1.5',
                  }}
                >
                  {project.org}
                </span>
              </div>

              <div style={{ padding: '8px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '800',
                    fontSize: '1.4rem',
                    color: '#1A1A1A',
                    margin: '0 0 4px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {project.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '700',
                    fontSize: '0.68rem',
                    color: '#8B6244',
                    margin: '0 0 14px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  {project.tagline}
                </p>
                <p
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '0.88rem',
                    lineHeight: '1.62',
                    color: '#3D2B1F',
                    opacity: 0.75,
                    margin: '0 0 18px',
                    flex: 1,
                  }}
                >
                  {project.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '16px' }}>
                  {project.stack.map((tech, j) => (
                    <span
                      key={j}
                      style={{
                        border: '1.5px solid #1A1A1A',
                        padding: '2px 8px',
                        fontFamily: 'Space Mono, monospace',
                        fontSize: '0.55rem',
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
                    background: '#8B6244',
                    color: '#FAF8F2',
                    padding: '8px 12px',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '0.68rem',
                    fontWeight: '700',
                    letterSpacing: '0.04em',
                  }}
                >
                  ↗ {project.impact}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
