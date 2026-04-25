import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

function Counter({ to, suffix = '', prefix = '', duration = 1.8 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

const stats = [
  { prefix: '₹', to: 35, suffix: 'L+', label: 'Grants & Awards' },
  { prefix: '', to: 200, suffix: 'M+', label: 'Monthly Views' },
  { prefix: '', to: 3, suffix: '', label: 'Govt. Deployments' },
  { prefix: '', to: 20, suffix: '', label: 'Years Old' },
];

const nameVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const letterVariant = {
  hidden: { y: '110%', opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

function SplitReveal({ text, style, delay = 0 }) {
  return (
    <div style={{ overflow: 'hidden', lineHeight: '0.88' }}>
      <motion.div
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
        style={style}
      >
        {text}
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="cage-bg"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#FAF8F2',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Decorative vertical line right side */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: '18%',
          width: '2px',
          height: '100%',
          background: 'linear-gradient(to bottom, transparent, #1A1A1A, transparent)',
          opacity: 0.07,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '104px 24px 80px',
          width: '100%',
        }}
      >
        {/* Currently building badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '36px' }}
        >
          <span className="pulse-dot" />
          <span
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.68rem',
              fontWeight: '700',
              color: '#8B6244',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            Currently Building · Open to Opportunities
          </span>
        </motion.div>

        {/* Kafka badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ marginBottom: '48px' }}
        >
          <span
            style={{
              display: 'inline-block',
              background: '#EDE6D3',
              border: '2px solid #1A1A1A',
              boxShadow: '3px 3px 0 #1A1A1A',
              padding: '10px 22px',
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.78rem',
              color: '#3D2B1F',
              fontStyle: 'italic',
              letterSpacing: '0.01em',
              lineHeight: '1.5',
            }}
          >
            "I am a cage, in search of a bird." — Franz Kafka
          </span>
        </motion.div>

        {/* Name — line-by-line masked reveal */}
        <SplitReveal
          text="SAGAR"
          delay={0.2}
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(3.8rem, 13vw, 11rem)',
            fontWeight: '800',
            lineHeight: '0.88',
            color: '#1A1A1A',
            letterSpacing: '-0.03em',
            marginBottom: '4px',
            display: 'block',
          }}
        />
        <div style={{ marginBottom: '44px' }}>
          <SplitReveal
            text="TEOTIA"
            delay={0.32}
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(3.8rem, 13vw, 11rem)',
              fontWeight: '800',
              lineHeight: '0.88',
              color: '#8B6244',
              letterSpacing: '-0.03em',
              display: 'block',
            }}
          />
        </div>

        {/* Role pills — stagger in */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.55 } } }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0', marginBottom: '52px' }}
        >
          {[
            { label: 'Full Stack Engineer', bg: '#1A1A1A', fg: '#FAF8F2' },
            { label: 'Distributed Systems', bg: '#8B6244', fg: '#FAF8F2' },
            { label: 'Builder', bg: '#EDE6D3', fg: '#1A1A1A' },
          ].map((tag, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
              }}
              style={{
                background: tag.bg,
                color: tag.fg,
                padding: '9px 20px',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: '700',
                fontSize: '0.78rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                border: '2px solid #1A1A1A',
                marginRight: i < 2 ? '-2px' : '0',
                position: 'relative',
                zIndex: 3 - i,
                display: 'inline-block',
              }}
            >
              {tag.label}
            </motion.span>
          ))}
        </motion.div>

        {/* Animated stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 180px))',
            gap: '10px',
            marginBottom: '52px',
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.95 + i * 0.08 }}
              style={{
                background: '#FFFFFF',
                border: '2px solid #1A1A1A',
                boxShadow: '3px 3px 0 #1A1A1A',
                padding: '16px 20px',
                transition: 'transform 0.15s, box-shadow 0.15s',
                cursor: 'default',
              }}
              whileHover={{ y: -2, boxShadow: '3px 5px 0 #1A1A1A' }}
            >
              <div
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '800',
                  fontSize: '2rem',
                  color: '#1A1A1A',
                  lineHeight: '1',
                  marginBottom: '5px',
                }}
              >
                <Counter to={stat.to} suffix={stat.suffix} prefix={stat.prefix} duration={1.6} />
              </div>
              <div
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.68rem',
                  color: '#8B6244',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
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
              padding: '14px 36px',
              fontWeight: '700',
              fontSize: '0.88rem',
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
              padding: '14px 36px',
              fontWeight: '700',
              fontSize: '0.88rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Get in Touch →
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll cue — animated line */}
      <motion.div
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <div
          style={{
            width: '32px',
            height: '2px',
            background: '#8B6244',
          }}
        />
        <span
          style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '0.62rem',
            color: '#8B6244',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
