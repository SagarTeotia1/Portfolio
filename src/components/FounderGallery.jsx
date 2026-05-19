import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CDN = 'https://pub-ef0d64d4483442089d9334d9dc46aff9.r2.dev/portfolio/Dubai';

const galleryItems = [
  {
    src: `${CDN}/ME_HOLDING_WGS_TROPHY.jpg`,
    category: 'Award',
    caption: 'World Government Summit 2025 — Holding the Trophy',
    meta: 'Dubai · Honored by Vice President of UAE',
    size: 'portrait',
  },
  {
    src: `${CDN}/Dubai_main_award_pic.jpg`,
    category: 'Award',
    caption: 'World Government Summit 2025 — Award Ceremony',
    meta: 'Global Best M-Gov Bronze · ACCESSWAY · Age 20',
    size: 'large',
  },
  {
    src: `${CDN}/NewsPaper_Headline_WGS.jpg`,
    category: 'Award',
    caption: 'Press Coverage — WGS Dubai 2025',
    meta: 'International Media · Newspaper Headline',
    size: 'portrait',
  },
  {
    src: `${CDN}/RADOM_DUBAI_IMAGE_I_CLICK.jpg`,
    category: 'Award',
    caption: 'World Government Summit — Dubai',
    meta: 'WGS 2025 · On the Ground',
    size: 'small',
  },
  {
    src: `${CDN}/RADOM_DUBAI_IMAGE_I_CLICK2.jpg`,
    category: 'Award',
    caption: 'World Government Summit — Dubai',
    meta: 'WGS 2025 · Summit Venue',
    size: 'small',
  },
  {
    src: `${CDN}/RADOM_DUBAI_IMAGE_I_CLICK3.jpg`,
    category: 'Award',
    caption: 'World Government Summit — Dubai',
    meta: 'WGS 2025 · Dubai Experience',
    size: 'small',
  },
  {
    src: '/assets/Award1.jpeg',
    category: 'Award',
    caption: 'Smart India Hackathon — National Winner',
    meta: '₹2.7M Government Funding Unlocked',
    size: 'small',
  },
  {
    src: '/assets/Award2.jpeg',
    category: 'Award',
    caption: 'Hack4Purpose — IIT Delhi',
    meta: 'Top 2 / National Competition · 1st Runner-Up',
    size: 'small',
  },
  {
    src: '/assets/Award3.jpeg',
    category: 'Award',
    caption: 'Scale+91 Fintech Festival 2024',
    meta: 'Top 3 / 5000+ Teams Nationwide',
    size: 'small',
  },
  {
    src: '/assets/Project 1.png',
    category: 'Product',
    caption: 'SANGRAKSHAN — NDRF Disaster Response',
    meta: 'Deployed · Ministry of Home Affairs, Govt. of India',
    size: 'small',
  },
  {
    src: '/assets/Project 2.png',
    category: 'Product',
    caption: 'MICROKAHANI — OTT Micro-Drama Platform',
    meta: '200M+ Monthly Views · 15M+ Followers',
    size: 'large',
  },
  {
    src: '/assets/Project 3.png',
    category: 'Product',
    caption: 'CAMPUSMART — Student Marketplace',
    meta: '2.5K+ Users · 1K+ Transactions · 3 Colleges',
    size: 'small',
  },
  {
    src: '/assets/Project 4.png',
    category: 'Product',
    caption: 'ACCESSWAY — AI Accessibility Analytics',
    meta: 'UAE VP Honored · AR Navigation for Differently-Abled',
    size: 'small',
  },
];

const CATEGORIES = ['All', 'Award', 'Product'];

const SCALE_CALLOUTS = [
  { num: '₹35L+', label: 'Grants & Awards', sub: 'Across 3 years, 20 years old' },
  { num: '200M+', label: 'Monthly Views', sub: 'MicroKahani OTT reach' },
  { num: '11+', label: 'National & Intl. Awards', sub: 'Hackathons, summits, govt.' },
  { num: '18', label: 'Age at First Win', sub: 'SIH National Winner' },
];

export default function FounderGallery() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'All' ? galleryItems : galleryItems.filter((item) => item.category === active);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const prev = useCallback(() => {
    setLightbox((i) => (i - 1 + filtered.length) % filtered.length);
  }, [filtered.length]);

  const next = useCallback(() => {
    setLightbox((i) => (i + 1) % filtered.length);
  }, [filtered.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, prev, next, closeLightbox]);

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <section
      id="gallery"
      style={{
        background: '#1A1A1A',
        borderTop: '2px solid #1A1A1A',
        padding: '96px 0 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="section-ghost-num-light">GL</div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '56px' }}
        >
          <span className="section-label" style={{ color: '#C4956A' }}>Gallery / Proof of Work</span>
          <h2
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: '800',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              color: '#FAF8F2',
              letterSpacing: '-0.025em',
              margin: '8px 0 18px',
              lineHeight: '1',
            }}
          >
            THE PROOF
            <br />
            <span style={{ color: '#C4956A' }}>IN FRAMES</span>
          </h2>
          <p
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '1rem',
              color: 'rgba(250,248,242,0.5)',
              maxWidth: '520px',
              lineHeight: '1.72',
              margin: '0 0 36px',
            }}
          >
            From late-night builds to international stages. Real awards, real products, real scale — not just numbers.
          </p>

          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: '0' }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActive(cat); setLightbox(null); }}
                style={{
                  background: active === cat ? '#FAF8F2' : 'transparent',
                  color: active === cat ? '#1A1A1A' : 'rgba(250,248,242,0.45)',
                  border: '2px solid rgba(250,248,242,0.18)',
                  padding: '9px 22px',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '700',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  marginRight: '-2px',
                  position: 'relative',
                  zIndex: active === cat ? 1 : 0,
                  transition: 'background 0.15s, color 0.15s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Image grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gridAutoRows: '240px',
            gap: '3px',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                onClick={() => setLightbox(i)}
                className={`gallery-item${item.size === 'large' ? ' gallery-item-large' : ''}`}
                style={{
                  gridRow: item.size === 'portrait' ? 'span 2' : 'span 1',
                }}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div className="gallery-overlay">
                  <div style={{ flex: 1 }}>
                    <span
                      style={{
                        background: item.category === 'Award' ? '#C4956A' : '#8B6244',
                        color: '#1A1A1A',
                        fontFamily: 'Space Mono, monospace',
                        fontSize: '0.52rem',
                        fontWeight: '700',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        padding: '2px 8px',
                        display: 'inline-block',
                        marginBottom: '7px',
                      }}
                    >
                      {item.category}
                    </span>
                    <p
                      style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontWeight: '700',
                        fontSize: '0.84rem',
                        color: '#FAF8F2',
                        margin: '0 0 4px',
                        lineHeight: '1.3',
                      }}
                    >
                      {item.caption}
                    </p>
                    <p
                      style={{
                        fontFamily: 'Space Mono, monospace',
                        fontSize: '0.56rem',
                        color: '#C4956A',
                        margin: 0,
                        letterSpacing: '0.05em',
                        lineHeight: '1.5',
                      }}
                    >
                      {item.meta}
                    </p>
                  </div>
                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      border: '2px solid rgba(250,248,242,0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FAF8F2',
                      fontSize: '0.9rem',
                      flexShrink: 0,
                      marginLeft: '12px',
                      alignSelf: 'flex-end',
                    }}
                  >
                    ↗
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Scale callouts strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        style={{
          borderTop: '2px solid rgba(250,248,242,0.1)',
          marginTop: '3px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        }}
      >
        {SCALE_CALLOUTS.map((c, i) => (
          <div
            key={i}
            style={{
              padding: '28px 24px',
              borderRight: i < SCALE_CALLOUTS.length - 1 ? '2px solid rgba(250,248,242,0.1)' : 'none',
            }}
          >
            <div
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: '800',
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                color: '#C4956A',
                lineHeight: '1',
                marginBottom: '6px',
                letterSpacing: '-0.02em',
              }}
            >
              {c.num}
            </div>
            <div
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: '700',
                fontSize: '0.72rem',
                color: '#FAF8F2',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '4px',
              }}
            >
              {c.label}
            </div>
            <div
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.58rem',
                color: 'rgba(250,248,242,0.35)',
                letterSpacing: '0.05em',
              }}
            >
              {c.sub}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={closeLightbox}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.94)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
          >
            <motion.div
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '920px',
                width: '100%',
                position: 'relative',
              }}
            >
              {/* Close */}
              <button
                onClick={closeLightbox}
                style={{
                  position: 'absolute',
                  top: '-48px',
                  right: '0',
                  background: 'transparent',
                  border: '2px solid rgba(255,255,255,0.25)',
                  color: '#FAF8F2',
                  width: '36px',
                  height: '36px',
                  cursor: 'pointer',
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ✕
              </button>

              <img
                src={filtered[lightbox].src}
                alt={filtered[lightbox].caption}
                style={{
                  width: '100%',
                  maxHeight: '68vh',
                  objectFit: 'contain',
                  display: 'block',
                  border: '2px solid rgba(255,255,255,0.08)',
                }}
              />

              {/* Caption bar */}
              <div
                style={{
                  background: '#1A1A1A',
                  border: '2px solid rgba(255,255,255,0.08)',
                  borderTop: 'none',
                  padding: '14px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: '700',
                      fontSize: '0.88rem',
                      color: '#FAF8F2',
                      margin: '0 0 3px',
                    }}
                  >
                    {filtered[lightbox].caption}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '0.58rem',
                      color: '#C4956A',
                      margin: 0,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {filtered[lightbox].meta}
                  </p>
                </div>
                <span
                  style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '0.6rem',
                    color: 'rgba(255,255,255,0.25)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {lightbox + 1} / {filtered.length}
                </span>
              </div>

              {/* Prev / Next */}
              {filtered.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prev(); }}
                    style={{
                      position: 'absolute',
                      left: '-50px',
                      top: '40%',
                      transform: 'translateY(-50%)',
                      background: '#FAF8F2',
                      border: '2px solid #1A1A1A',
                      width: '38px',
                      height: '38px',
                      cursor: 'pointer',
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    ←
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); next(); }}
                    style={{
                      position: 'absolute',
                      right: '-50px',
                      top: '40%',
                      transform: 'translateY(-50%)',
                      background: '#FAF8F2',
                      border: '2px solid #1A1A1A',
                      width: '38px',
                      height: '38px',
                      cursor: 'pointer',
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    →
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
