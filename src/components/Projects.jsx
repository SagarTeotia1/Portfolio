import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

const hackathonProjects = [
  {
    num: '06',
    name: 'HEAL-O-VERSE',
    tagline: 'Metaverse Doctor Consultancy',
    desc: 'VR platform for immersive doctor consultations and intern training. MediaPipe-powered physiotherapy posture tracking, metaverse waiting rooms, and multi-language support.',
    impact: '1st Runner-Up · Hack4Purpose IIT Delhi',
    stack: ['Unity', 'MERN', 'MediaPipe', 'NLP', 'Firebase'],
    org: 'Hack4Purpose · IIT Delhi',
    bg: '#EDE6D3',
    link: null,
  },
  {
    num: '07',
    name: 'PATHSHALA',
    tagline: 'XR Learning Mobile App',
    desc: 'Smartphone-first XR education for inclusive learners. Offline AI tutors via Gemini, headset-free AR STEM labs, neuro-inclusive UI with dyslexic-friendly fonts and high contrast.',
    impact: '1st Prize · HackBMU 2025 · 500+ Teams',
    stack: ['Flutter', 'Unity', 'OpenXR', 'Gemini API', 'Firebase'],
    org: 'HackBMU 2025',
    bg: '#FFFFFF',
    link: null,
  },
  {
    num: '08',
    name: 'NAV YUVA CHETNA',
    tagline: 'Anti-Drug Abuse Metaverse',
    desc: 'Metaverse platform combating drug abuse through AR content blocking, VR decision-making games, AI humanoid counseling avatars, and Web3-powered anonymous support chat.',
    impact: 'Top 10 · Haryana Police Hackathon 2024',
    stack: ['Unity', 'Flutter', 'Ethereum', 'Solidity', 'Firebase'],
    org: 'Haryana Police Hackathon',
    bg: '#EDE6D3',
    link: null,
  },
  {
    num: '09',
    name: 'CRYPTXCHANGE',
    tagline: 'DeFi Platform + Metaverse Hub',
    desc: 'Decentralized crypto exchange with AI fraud detection, smart contract token swaps, AI-driven investment insights, and a beginner-friendly metaverse EdTech learning hub.',
    impact: 'Top 3 / 5000+ · Scale+91 Fintech 2024',
    stack: ['Solidity', 'Web3.js', 'Flutter', 'TensorFlow', 'MongoDB'],
    org: 'Scale+91 Fintech Festival',
    bg: '#FFFFFF',
    link: null,
  },
  {
    num: '10',
    name: 'BHARATVERSE',
    tagline: 'Cultural Heritage Metaverse',
    desc: 'Virtual tours of Indian heritage sites with AI companion "Disha" for cultural insights, gamified eco-sustainability challenges, and customizable avatars in traditional attire.',
    impact: 'Cultural Immersion · Apr 2024',
    stack: ['Unreal Engine', 'Oculus SDK', 'ChatGPT API', 'MERN', 'Firebase'],
    org: 'Cultural Heritage Initiative',
    bg: '#EDE6D3',
    link: null,
  },
  {
    num: '11',
    name: 'WAVEWISE',
    tagline: 'Ocean Literacy Platform',
    desc: 'Gamified ocean conservation education with real-time multiplayer cleanup games, AI-powered sustainability tips assistant, and expert-led conservation webinars.',
    impact: 'Live · wave-wise.vercel.app',
    stack: ['React.js', 'Three.js', 'Unity', 'Python', 'GPT-3'],
    org: 'Sustainability Initiative',
    bg: '#FFFFFF',
    link: 'https://wave-wise.vercel.app',
  },
  {
    num: '12',
    name: 'HERBAL-REET',
    tagline: 'Ayurvedic Metaverse',
    desc: 'Explore 3D medicinal plants in metaverse with AI-guided botany, AR plant visualization, yoga sessions with real-time posture feedback, and gamified certifications.',
    impact: 'Live · herbal-reet.vercel.app',
    stack: ['Unity', 'Blender', 'MERN', 'Gemini LLM', 'Spark AR'],
    org: 'Ayurvedic Education Platform',
    bg: '#EDE6D3',
    link: 'https://herbal-reet.vercel.app',
  },
  {
    num: '13',
    name: 'VIDYALAYA',
    tagline: 'Gamified EdTech Metaverse',
    desc: 'Metaverse EdTech platform with AR/VR classrooms, adaptive learning pathways, multiplayer quizzes, 3D virtual science labs, and cross-device compatibility.',
    impact: 'Best All-Freshers Team · BITBOX 4.0 JIIT',
    stack: ['Unity', 'Blender', 'MERN', 'Flutter', 'Gemini API'],
    org: 'BITBOX 4.0 · GDSC JIIT',
    bg: '#FFFFFF',
    link: null,
  },
  {
    num: '14',
    name: 'HERITAGÉSPHERE',
    tagline: 'Cultural Preservation Platform',
    desc: 'Metaverse platform for virtual heritage tours and artisan support. Blockchain rewards for eco-actions, AR historical overlays on monuments, and artisan marketplace.',
    impact: 'Heritage Preservation · Dec 2024',
    stack: ['Unreal Engine', 'Solidity', 'ARCore', 'MERN', 'MediaPipe'],
    org: 'Heritage Initiative',
    bg: '#EDE6D3',
    link: null,
  },
  {
    num: '15',
    name: 'WISEWASTE',
    tagline: 'Circular Economy Platform',
    desc: 'Community-driven app to reduce waste through AR-guided composting tutorials, NGO partnership dashboards, and tokenized incentive rewards for eco-actions.',
    impact: 'Sustainability · Nov 2024',
    stack: ['Flutter', 'ARCore', 'Firebase', 'Solidity', 'Python'],
    org: 'Sustainability Initiative',
    bg: '#FFFFFF',
    link: null,
  },
  {
    num: '16',
    name: 'LOGIGREEN',
    tagline: 'Sustainable Logistics Platform',
    desc: 'AI-driven logistics optimization for eco-friendly packaging and route planning. AR-guided packaging simulations and sustainability certification system for businesses.',
    impact: 'Green Logistics · Jan 2025',
    stack: ['React.js', 'Node.js', 'TensorFlow', 'ARCore', 'Solidity'],
    org: 'Sustainability Initiative',
    bg: '#EDE6D3',
    link: null,
  },
  {
    num: '17',
    name: 'SAARTHI',
    tagline: 'Offline-First EdTech',
    desc: 'Multilingual education app for underserved communities. Offline STEM courses, NGO-sponsored device donation program, and gamified regional content in local languages.',
    impact: 'Inclusive Education · Dec 2025',
    stack: ['Flutter', 'SQLite', 'GPT-3', 'Firebase', 'REST APIs'],
    org: 'EdTech for Underserved',
    bg: '#FFFFFF',
    link: null,
  },
];

function ProjectCard({ project, i, animate: shouldAnimate = false }) {
  const [hovered, setHovered] = useState(false);

  const cardProps = shouldAnimate
    ? {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] },
      }
    : {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
        viewport: { once: true },
      };

  return (
    <motion.div
      {...cardProps}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: project.bg,
        border: '2px solid #1A1A1A',
        boxShadow: hovered ? '6px 6px 0 #1A1A1A' : '3px 3px 0 #1A1A1A',
        transform: hovered ? 'translate(-2px, -2px)' : 'translate(0, 0)',
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
          }}
        >
          <span>↗ {project.impact}</span>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#FAF8F2',
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.55rem',
                letterSpacing: '0.06em',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(250,248,242,0.4)',
                paddingBottom: '1px',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              LIVE ↗
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

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
            style={{ display: 'grid', gridTemplateColumns: '1fr' }}
            className="featured-inner"
          >
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

        {/* Regular projects grid */}
        <div className="projects-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.num} project={project} i={i} />
          ))}
        </div>

        {/* Hackathon projects — revealed on expand */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              key="hackathon-projects"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: 'hidden' }}
            >
              {/* Divider label */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  margin: '48px 0 24px',
                }}
              >
                <div style={{ flex: 1, height: '2px', background: '#1A1A1A' }} />
                <span
                  style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '0.65rem',
                    fontWeight: '700',
                    color: '#8B6244',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Hackathon Projects
                </span>
                <div style={{ flex: 1, height: '2px', background: '#1A1A1A' }} />
              </div>

              <div className="projects-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                {hackathonProjects.map((project, i) => (
                  <ProjectCard key={project.num} project={project} i={i} animate />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View All button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: '56px' }}
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ x: -3, y: -3, boxShadow: '6px 6px 0 #C4956A' }}
            whileTap={{ x: 0, y: 0, boxShadow: '2px 2px 0 #C4956A' }}
            style={{
              background: showAll ? '#1A1A1A' : '#FAF8F2',
              color: showAll ? '#FAF8F2' : '#1A1A1A',
              border: '2px solid #1A1A1A',
              boxShadow: '4px 4px 0 #C4956A',
              padding: '14px 36px',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: '800',
              fontSize: '0.82rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'background 0.2s, color 0.2s',
            }}
          >
            <span>{showAll ? '↑' : '↓'}</span>
            <span>{showAll ? 'SHOW LESS' : `VIEW ALL 17 PROJECTS`}</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
