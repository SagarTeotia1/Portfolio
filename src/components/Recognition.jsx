import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { awards } from '../data/caseStudies';

function Counter({ to, prefix = '', suffix = '', duration = 1.6 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
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

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

function AwardCard({ award, i }) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const hasImages = award.images && award.images.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="brutal-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/case/${award.slug}`)}
      style={{
        background: award.bg, padding: '28px',
        position: 'relative', overflow: 'hidden', cursor: 'pointer',
      }}
    >
      <motion.div animate={{ opacity: hovered && hasImages ? 0.1 : 1 }} transition={{ duration: 0.2 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.68rem', color: '#8B6244', fontWeight: '700' }}>
            {award.num}
          </span>
          <span style={{ background: '#1A1A1A', color: '#FAF8F2', padding: '3px 9px', fontFamily: 'Space Mono, monospace', fontSize: '0.58rem', fontWeight: '700', letterSpacing: '0.08em' }}>
            {award.year}
          </span>
        </div>
        <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: '800', fontSize: '1.25rem', color: award.textColor, margin: '0 0 4px', letterSpacing: '-0.01em' }}>
          {award.title}
        </h3>
        <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: '700', fontSize: '0.72rem', color: award.accentColor, margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
          {award.subtitle}
        </p>
        <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.62rem', color: '#3D2B1F', margin: '0 0 14px', opacity: 0.55 }}>
          {award.org}
        </p>
        <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.88rem', lineHeight: '1.65', color: '#3D2B1F', margin: '0 0 20px' }}>
          {award.detail.split('\n\n')[0]}
        </p>
        <div style={{ background: award.accentColor, color: award.bg === '#1A1A1A' ? '#1A1A1A' : '#FAF8F2', display: 'inline-block', padding: '6px 12px', fontFamily: 'Space Grotesk, sans-serif', fontWeight: '700', fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          {award.impact}
        </div>
      </motion.div>

      {/* Hover image preview */}
      <AnimatePresence>
        {hovered && hasImages && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute', inset: 0, background: 'rgba(10,10,10,0.92)',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              justifyContent: 'center', gap: '14px', padding: '20px',
            }}
          >
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
              {award.images.slice(0, 2).map((src, idx) => (
                <motion.img
                  key={src} src={src} alt=""
                  initial={{ opacity: 0, y: 24, rotate: idx === 0 ? -6 : 6 }}
                  animate={{ opacity: 1, y: 0, rotate: idx === 0 ? -3 : 3 }}
                  transition={{ duration: 0.32, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    width: award.images.length === 1 ? '72%' : '46%',
                    height: '130px', objectFit: 'cover',
                    border: '3px solid #FAF8F2', boxShadow: '4px 4px 0 rgba(0,0,0,0.5)',
                  }}
                />
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              style={{ color: '#FAF8F2', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase' }}
            >
              View Case Study →
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {hovered && !hasImages && (
          <motion.div
            initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            style={{ position: 'absolute', bottom: '12px', right: '12px', background: '#1A1A1A', color: '#FAF8F2', padding: '4px 10px', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.62rem', fontWeight: '700', letterSpacing: '0.08em' }}
          >
            View Case Study →
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FeaturedHoverCard() {
  const navigate = useNavigate();
  const award = awards[0];
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/case/${award.slug}`)}
      style={{ cursor: 'pointer', position: 'relative' }}
    >
      <motion.div animate={{ opacity: hovered ? 0.08 : 1 }} transition={{ duration: 0.22 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.68rem', color: '#C4956A', fontWeight: '700', letterSpacing: '0.12em' }}>01</span>
            <span style={{ background: '#C4956A', color: '#1A1A1A', padding: '4px 12px', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.62rem', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              2025 — WORLD STAGE
            </span>
          </div>
          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.62rem', color: 'rgba(250,248,242,0.4)', letterSpacing: '0.08em' }}>
            UAE Government · Dubai
          </span>
        </div>
        <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: '800', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: '#FAF8F2', margin: '16px 0 6px', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
          Global Best M-Gov Award
          <br /><span style={{ color: '#C4956A' }}>Bronze · World Government Summit</span>
        </h3>
        <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1rem', lineHeight: '1.7', color: 'rgba(250,248,242,0.72)', margin: '0 0 28px', maxWidth: '640px' }}>
          Honored by the Vice President of the UAE at the World Government Summit — one of the highest international recognitions in government technology. Represented India on a global stage at 19.
        </p>
        <div style={{ background: '#C4956A', color: '#1A1A1A', display: 'inline-block', padding: '8px 18px', fontFamily: 'Space Grotesk, sans-serif', fontWeight: '800', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          International Recognition
        </div>
      </motion.div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}
          >
            {award.images.slice(0, 3).map((src, idx) => (
              <motion.img
                key={src} src={src} alt=""
                initial={{ opacity: 0, y: 30, rotate: [-4, 2, -2][idx] }}
                animate={{ opacity: 1, y: 0, rotate: [-4, 2, -2][idx] }}
                transition={{ duration: 0.35, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{ height: '180px', width: idx === 1 ? '280px' : '160px', objectFit: 'cover', border: '3px solid #FAF8F2', boxShadow: '5px 5px 0 rgba(0,0,0,0.4)' }}
              />
            ))}
            <motion.div
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}
              style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', color: '#FAF8F2', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}
            >
              View Case Study →
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Recognition() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section
      id="recognition"
      className="section-mobile"
      style={{ background: '#FAF8F2', padding: '96px 0', borderTop: '2px solid #1A1A1A', borderBottom: '2px solid #1A1A1A', position: 'relative', overflow: 'hidden' }}
    >
      <div className="section-ghost-num">02</div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px', marginBottom: '72px' }}
        >
          <div>
            <span className="section-label">02 / Recognition</span>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: '800', fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#1A1A1A', letterSpacing: '-0.025em', margin: '8px 0 0', lineHeight: '1' }}>
              GLOBALLY<br /><span style={{ color: '#8B6244' }}>RECOGNIZED</span>
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}
            style={{ background: '#1A1A1A', color: '#FAF8F2', padding: '20px 28px', border: '2px solid #1A1A1A', boxShadow: '5px 5px 0 #8B6244', minWidth: '180px' }}
          >
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: '800', fontSize: '2.4rem', lineHeight: '1' }}>
              ₹<Counter to={35} suffix="L+" duration={1.8} />
            </div>
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.65rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '7px', color: '#C4956A' }}>
              Total Grants &amp; Awards
            </div>
          </motion.div>
        </motion.div>

        {/* Featured — WGS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
          className="project-featured featured-pad"
          style={{ background: '#1A1A1A', marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '16px', overflow: 'hidden' }}
        >
          <FeaturedHoverCard />
        </motion.div>

        {/* Grid */}
        <div className="recognition-grid">
          {awards.slice(1, 3).map((award, i) => (
            <AwardCard key={award.slug} award={award} i={i} />
          ))}
        </div>

        <AnimatePresence>
          {showAll && (
            <motion.div
              key="extra"
              initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div className="recognition-grid" style={{ marginTop: '16px' }}>
                {awards.slice(3).map((award, i) => (
                  <AwardCard key={award.slug} award={award} i={i} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ x: -3, y: -3, boxShadow: '6px 6px 0 #8B6244' }}
            whileTap={{ x: 0, y: 0, boxShadow: '2px 2px 0 #8B6244' }}
            style={{
              background: showAll ? '#1A1A1A' : '#FAF8F2', color: showAll ? '#FAF8F2' : '#1A1A1A',
              border: '2px solid #1A1A1A', boxShadow: '4px 4px 0 #8B6244',
              padding: '14px 36px', fontFamily: 'Space Grotesk, sans-serif', fontWeight: '800',
              fontSize: '0.82rem', letterSpacing: '0.12em', textTransform: 'uppercase',
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px',
              transition: 'background 0.2s, color 0.2s',
            }}
          >
            <span>{showAll ? '↑' : '↓'}</span>
            <span>{showAll ? 'SHOW LESS' : 'VIEW ALL 8 ACHIEVEMENTS'}</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
