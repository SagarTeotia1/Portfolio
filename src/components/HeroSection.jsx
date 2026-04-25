import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '₹35L+', label: 'Grants & Awards' },
  { value: '200M+', label: 'Monthly Views' },
  { value: '3', label: 'Govt. Deployments' },
  { value: '20', label: 'Years Old' },
];

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
      {/* Decorative accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: '14%',
          width: '2px',
          height: '100%',
          background: '#1A1A1A',
          opacity: 0.05,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '100px 24px 64px',
          width: '100%',
        }}
      >
        {/* Kafka badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '44px' }}
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

        {/* Name — masked reveal */}
        <div style={{ overflow: 'hidden', marginBottom: '4px' }}>
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(3.8rem, 13vw, 11rem)',
              fontWeight: '800',
              lineHeight: '0.88',
              color: '#1A1A1A',
              letterSpacing: '-0.03em',
              margin: 0,
            }}
          >
            SAGAR
          </motion.h1>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '40px' }}>
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(3.8rem, 13vw, 11rem)',
              fontWeight: '800',
              lineHeight: '0.88',
              color: '#8B6244',
              letterSpacing: '-0.03em',
              margin: 0,
            }}
          >
            TEOTIA
          </motion.h1>
        </div>

        {/* Role pills */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '52px', gap: '0' }}
        >
          {[
            { label: 'Full Stack Engineer', bg: '#1A1A1A', fg: '#FAF8F2' },
            { label: 'Distributed Systems', bg: '#8B6244', fg: '#FAF8F2' },
            { label: 'Builder', bg: '#EDE6D3', fg: '#1A1A1A' },
          ].map((tag, i) => (
            <span
              key={i}
              style={{
                background: tag.bg,
                color: tag.fg,
                padding: '9px 18px',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: '700',
                fontSize: '0.78rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                border: '2px solid #1A1A1A',
                marginRight: i < 2 ? '-2px' : '0',
                position: 'relative',
                zIndex: 3 - i,
              }}
            >
              {tag.label}
            </span>
          ))}
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 180px))',
            gap: '10px',
            marginBottom: '52px',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                background: '#FFFFFF',
                border: '2px solid #1A1A1A',
                boxShadow: '3px 3px 0 #1A1A1A',
                padding: '16px 20px',
              }}
            >
              <div
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '800',
                  fontSize: '1.9rem',
                  color: '#1A1A1A',
                  lineHeight: '1',
                  marginBottom: '5px',
                }}
              >
                {stat.value}
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
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
        >
          <a
            href="#projects"
            className="brutal-btn"
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
          </a>
          <a
            href="#contact"
            className="brutal-btn"
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
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'Space Mono, monospace',
          fontSize: '0.68rem',
          color: '#8B6244',
          letterSpacing: '0.12em',
          textAlign: 'center',
          userSelect: 'none',
        }}
      >
        SCROLL
        <br />↓
      </motion.div>
    </section>
  );
}
