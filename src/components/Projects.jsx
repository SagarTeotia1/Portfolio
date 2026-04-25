import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    num: '01',
    name: 'SANGRAKSHAN',
    tagline: 'AI + VR Disaster Response Training',
    desc: "Production-grade training platform for India's National Disaster Response Force. Started as a Smart India Hackathon winner—backed by ₹2.7M+ government funding and deployed in real NDRF environments.",
    impact: '₹2.7M Funded · NDRF Deployed · 40% Faster Setup',
    stack: ['Node.js', 'Kafka', 'Redis', 'PostgreSQL', 'VR', 'AI/ML', 'Microservices'],
    org: 'Ministry of Home Affairs, Govt. of India',
    bg: '#1A1A1A',
    textColor: '#FAF8F2',
    accentColor: '#C4956A',
    borderOnStack: '#FAF8F2',
  },
  {
    num: '02',
    name: 'MICROKAHANI',
    tagline: 'Distributed OTT Micro-Drama Platform',
    desc: 'Built and scaled the technical backbone of a micro-drama streaming platform powering Digital Kalakaar. Designed for real traffic—HLS adaptive streaming, high-traffic burst handling, creator tooling.',
    impact: '15M+ Followers · 200M+ Monthly Views',
    stack: ['Node.js', 'Redis', 'HLS', 'Cloud Storage', 'TypeScript', 'Analytics'],
    org: 'Micro Kahani PVT LTD',
    bg: '#FFFFFF',
    textColor: '#1A1A1A',
    accentColor: '#8B6244',
    borderOnStack: '#1A1A1A',
  },
  {
    num: '03',
    name: 'ACCESSWAY',
    tagline: 'AR Navigation for People with Disabilities',
    desc: 'Smart navigation system using augmented reality to help people with visual and mobility impairments navigate environments independently. Moved beyond prototype into real-world deployment.',
    impact: 'Real-World Deployment · Accessibility Impact',
    stack: ['AR', 'React Native', 'Node.js', 'Computer Vision'],
    org: 'National Competition Origin',
    bg: '#EDE6D3',
    textColor: '#1A1A1A',
    accentColor: '#3D2B1F',
    borderOnStack: '#1A1A1A',
  },
  {
    num: '04',
    name: 'LOGIGREEN',
    tagline: 'AI Logistics with Eco-Routing & AR',
    desc: 'AI-powered logistics platform with eco-routing optimization and AR packaging visualization. Reduces carbon footprint in supply chains while improving operational efficiency.',
    impact: 'Eco-Optimized · AR Packaging · AI Routing',
    stack: ['AI/ML', 'Node.js', 'AR', 'Python', 'Route Optimization'],
    org: 'Hackathon Project',
    bg: '#FFFFFF',
    textColor: '#1A1A1A',
    accentColor: '#8B6244',
    borderOnStack: '#1A1A1A',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
          <span className="section-label">04 / Projects</span>
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
            WHAT I'VE
            <br />
            <span style={{ color: '#8B6244' }}>BUILT</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="brutal-card"
              style={{
                background: project.bg,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Card top */}
              <div
                style={{
                  padding: '24px 24px 0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: project.accentColor,
                    lineHeight: '1',
                    opacity: 0.35,
                  }}
                >
                  {project.num}
                </span>
                <span
                  style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '0.6rem',
                    color: project.accentColor,
                    fontWeight: '700',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    maxWidth: '160px',
                    textAlign: 'right',
                    lineHeight: '1.4',
                  }}
                >
                  {project.org}
                </span>
              </div>

              {/* Card body */}
              <div style={{ padding: '12px 24px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '800',
                    fontSize: '1.55rem',
                    color: project.textColor,
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
                    fontSize: '0.72rem',
                    color: project.accentColor,
                    margin: '0 0 16px',
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
                    lineHeight: '1.65',
                    color: project.textColor,
                    opacity: project.bg === '#1A1A1A' ? 0.78 : 0.7,
                    margin: '0 0 20px',
                    flex: 1,
                  }}
                >
                  {project.desc}
                </p>

                {/* Stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {project.stack.map((tech, j) => (
                    <span
                      key={j}
                      style={{
                        border: `1.5px solid ${project.borderOnStack}`,
                        padding: '3px 9px',
                        fontFamily: 'Space Mono, monospace',
                        fontSize: '0.58rem',
                        fontWeight: '700',
                        color: project.textColor,
                        letterSpacing: '0.04em',
                        opacity: project.bg === '#1A1A1A' ? 0.85 : 1,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact bar */}
                <div
                  style={{
                    background: project.accentColor,
                    color: '#FAF8F2',
                    padding: '10px 14px',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '0.72rem',
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
