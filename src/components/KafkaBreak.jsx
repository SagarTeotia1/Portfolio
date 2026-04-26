import React from 'react';
import { motion } from 'framer-motion';

export default function KafkaBreak() {
  return (
    <section
      style={{
        background: '#1A1A1A',
        padding: '80px 24px',
        borderTop: '2px solid #1A1A1A',
        borderBottom: '2px solid #1A1A1A',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Ghost type in background */}
      <div
        style={{
          position: 'absolute',
          right: '-40px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(6rem, 18vw, 16rem)',
          fontWeight: '800',
          color: '#FAF8F2',
          opacity: 0.03,
          letterSpacing: '-0.05em',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
        }}
      >
        KAFKA
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)',
            color: '#FAF8F2',
            fontStyle: 'italic',
            lineHeight: '1.55',
            margin: '0 0 20px',
            maxWidth: '800px',
          }}
        >
          "I am a cage, in search of a bird."
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.78rem',
            color: '#8B6244',
            fontWeight: '700',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          — Franz Kafka · The line that keeps me building
        </motion.p>
      </div>
    </section>
  );
}
