import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useInView, animate } from 'framer-motion';

/* ── Animated counter ─────────────────────────────── */
function Counter({ to, suffix = '', prefix = '', duration = 1.6 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return ctrl.stop;
  }, [inView, to, duration]);

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

/* ── Name line — slides from a direction ─────────── */
function NameLine({ text, color, fromX, delay }) {
  return (
    <div style={{ overflow: 'hidden', lineHeight: 1 }}>
      <motion.div
        initial={{ x: fromX }}
        animate={{ x: 0 }}
        transition={{ duration: 1.05, delay, ease: [0.16, 1, 0.3, 1] }}
        className="hero-name"
        style={{ color, display: 'block' }}
      >
        {text}
      </motion.div>
    </div>
  );
}

const stats = [
  { prefix: '₹', to: 35,  suffix: 'L+', label: 'Grants & Awards'         },
  { prefix: '',  to: 11,  suffix: '+',  label: 'National & Intl. Awards'  },
  { prefix: '',  to: 15,  suffix: '+',  label: 'Real-World Deployments'   },
  { prefix: '',  to: 20,  suffix: '',   label: 'Years Old'                },
];

export default function HeroSection() {
  const sectionRef = useRef(null);
  const [grid, setGrid] = useState({ x: 0, y: 0 });

  /* subtle mouse-parallax on cage grid */
  const onMouseMove = useCallback((e) => {
    const { left, top, width, height } =
      sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width  - 0.5) * 22;
    const y = ((e.clientY - top)  / height - 0.5) * 22;
    setGrid({ x, y });
  }, []);

  const onMouseLeave = useCallback(() => setGrid({ x: 0, y: 0 }), []);

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#FAF8F2',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        paddingTop: '64px',
      }}
    >
      {/* ── Cage grid — mouse-reactive ── */}
      <div
        style={{
          position: 'absolute',
          inset: '-24px',
          backgroundImage: [
            'linear-gradient(#1A1A1A 1px, transparent 1px)',
            'linear-gradient(90deg, #1A1A1A 1px, transparent 1px)',
          ].join(','),
          backgroundSize: '56px 56px',
          opacity: 0.055,
          pointerEvents: 'none',
          transform: `translate(${grid.x}px, ${grid.y}px)`,
          transition: 'transform 0.45s ease-out',
          zIndex: 0,
        }}
      />

      {/* ── Top bar ── */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="hero-top-bar"
      >
        {/* Pulse badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
          <span className="pulse-dot" />
          <span
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.65rem',
              fontWeight: '700',
              color: '#8B6244',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            Currently Building · Open to Opportunities
          </span>
        </div>

        {/* Location */}
        <span
          style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '0.62rem',
            color: '#3D2B1F',
            opacity: 0.55,
            letterSpacing: '0.08em',
          }}
        >
          Greater Noida, India → US / Anywhere
        </span>
      </motion.div>

      {/* ── Main content: left + right sidebar ── */}
      <div className="hero-main" style={{ position: 'relative', zIndex: 10 }}>

        {/* LEFT column: name, kafka, pills, ctas */}
        <div className="hero-left">

          {/* Name */}
          <div style={{ marginBottom: '28px' }}>
            <NameLine text="SAGAR"  color="#1A1A1A" fromX="-110%" delay={0.18} />
            <NameLine text="TEOTIA" color="#8B6244" fromX="110%"  delay={0.3}  />
          </div>

          {/* Animated rule — wipes right */}
          <div style={{ overflow: 'hidden', marginBottom: '28px' }}>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{
                height: '2px',
                background: '#1A1A1A',
                transformOrigin: 'left',
              }}
            />
          </div>

          {/* Kafka quote — no box, editorial pull-quote */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: 'clamp(0.78rem, 1.2vw, 0.95rem)',
              fontStyle: 'italic',
              color: '#3D2B1F',
              lineHeight: '1.65',
              margin: '0 0 32px',
              paddingLeft: '16px',
              borderLeft: '3px solid #8B6244',
              maxWidth: '480px',
            }}
          >
            "I am a cage, in search of a bird."
            <span
              style={{
                fontStyle: 'normal',
                display: 'block',
                marginTop: '6px',
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.7rem',
                fontWeight: '700',
                color: '#8B6244',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              — Franz Kafka
            </span>
          </motion.p>

          {/* Role pills — stagger in */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.85 } },
            }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0', marginBottom: '40px' }}
          >
            {[
              { label: 'Full Stack AI Engineer', bg: '#1A1A1A', fg: '#FAF8F2' },
              { label: 'LLMs · RAG · AI Pipelines', bg: '#8B6244', fg: '#FAF8F2' },
              { label: 'End-to-End Builder',  bg: '#EDE6D3', fg: '#1A1A1A' },
            ].map((tag, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                style={{
                  background: tag.bg,
                  color: tag.fg,
                  padding: '8px 18px',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '700',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  border: '2px solid #1A1A1A',
                  marginRight: i < 2 ? '-2px' : 0,
                  position: 'relative',
                  zIndex: 3 - i,
                  display: 'inline-block',
                }}
              >
                {tag.label}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.15 }}
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
          >
            <motion.a
              href="#projects"
              className="brutal-btn"
              whileHover={{ y: -2 }}
              whileTap={{ y: 1 }}
              style={{
                background: '#1A1A1A',
                color: '#FAF8F2',
                padding: '13px 32px',
                fontWeight: '700',
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              View Work ↓
            </motion.a>
            <motion.a
              href="#contact"
              className="brutal-btn"
              whileHover={{ y: -2 }}
              whileTap={{ y: 1 }}
              style={{
                background: 'transparent',
                color: '#1A1A1A',
                padding: '13px 32px',
                fontWeight: '700',
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Get in Touch →
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/14mFiNEOq_X6g_PC9BIn5trsmL2phUqJh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn"
              whileHover={{ y: -2 }}
              whileTap={{ y: 1 }}
              style={{
                background: '#8B6244',
                color: '#FAF8F2',
                padding: '13px 32px',
                fontWeight: '700',
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Resume ↗
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT sidebar: stats stacked */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hero-stats-panel"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="hero-stat-cell"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              whileHover={{ background: '#EDE6D3' }}
              style={{
                cursor: 'default',
                transition: 'background 0.15s',
              }}
            >
              <div
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '800',
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  color: '#1A1A1A',
                  lineHeight: '1',
                  marginBottom: '6px',
                }}
              >
                <Counter
                  to={stat.to}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  duration={1.5}
                />
              </div>
              <div
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.65rem',
                  color: '#8B6244',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.09em',
                  lineHeight: '1.4',
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Bottom bar ── */}
      <motion.div
        className="hero-bottom-bar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        style={{ position: 'relative', zIndex: 10 }}
      >
        <motion.div
          animate={{ opacity: [1, 0.45, 1] }}
          transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
          style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <div
            style={{
              width: '28px',
              height: '2px',
              background: '#8B6244',
            }}
          />
          <span
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.6rem',
              color: '#8B6244',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            Scroll to explore
          </span>
        </motion.div>

        <span
          style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '0.6rem',
            color: '#3D2B1F',
            opacity: 0.4,
            letterSpacing: '0.08em',
          }}
        >
          v2025
        </span>
      </motion.div>
    </section>
  );
}
