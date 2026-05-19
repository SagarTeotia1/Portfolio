import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CaseStudyModal({ data, onClose }) {
  const [imgIdx, setImgIdx] = useState(0);

  const prev = useCallback(() =>
    setImgIdx((i) => (i - 1 + data.images.length) % data.images.length), [data]);
  const next = useCallback(() =>
    setImgIdx((i) => (i + 1) % data.images.length), [data]);

  useEffect(() => {
    setImgIdx(0);
    document.body.style.overflow = 'hidden';
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && data.images.length > 1) prev();
      if (e.key === 'ArrowRight' && data.images.length > 1) next();
    };
    window.addEventListener('keydown', handler);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handler);
    };
  }, [data, onClose, prev, next]);

  const hasImages = data.images && data.images.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.88)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        overflowY: 'auto',
      }}
    >
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 48, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#FAF8F2',
          border: '2px solid #1A1A1A',
          boxShadow: '8px 8px 0 #1A1A1A',
          maxWidth: '860px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'sticky',
            top: '16px',
            float: 'right',
            marginRight: '16px',
            background: '#1A1A1A',
            color: '#FAF8F2',
            border: 'none',
            width: '32px',
            height: '32px',
            cursor: 'pointer',
            fontFamily: 'Space Mono, monospace',
            fontSize: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            flexShrink: 0,
          }}
        >
          ✕
        </button>

        {/* Image section */}
        {hasImages && (
          <div style={{ position: 'relative', background: '#1A1A1A', height: '300px', overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={imgIdx}
                src={data.images[imgIdx]}
                alt=""
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28 }}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </AnimatePresence>

            {/* Dots */}
            {data.images.length > 1 && (
              <div style={{
                position: 'absolute', bottom: '12px', left: '50%',
                transform: 'translateX(-50%)', display: 'flex', gap: '6px',
              }}>
                {data.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    style={{
                      width: i === imgIdx ? '22px' : '8px',
                      height: '8px',
                      background: i === imgIdx ? '#C4956A' : 'rgba(255,255,255,0.4)',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'width 0.2s, background 0.2s',
                    }}
                  />
                ))}
              </div>
            )}

            {/* Prev / Next */}
            {data.images.length > 1 && (
              <>
                <button onClick={prev} style={navBtn('left')}>←</button>
                <button onClick={next} style={navBtn('right')}>→</button>
              </>
            )}
          </div>
        )}

        {/* Content */}
        <div style={{ padding: '32px 36px 36px', clear: 'both' }}>
          {/* Meta row */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap' }}>
            {data.year && (
              <span style={{
                background: '#1A1A1A', color: '#FAF8F2',
                fontFamily: 'Space Mono, monospace', fontSize: '0.58rem',
                fontWeight: '700', padding: '3px 10px', letterSpacing: '0.1em',
              }}>{data.year}</span>
            )}
            {data.org && (
              <span style={{
                fontFamily: 'Space Mono, monospace', fontSize: '0.58rem',
                color: '#8B6244', fontWeight: '700', letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}>{data.org}</span>
            )}
          </div>

          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif', fontWeight: '800',
            fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', color: '#1A1A1A',
            margin: '0 0 4px', letterSpacing: '-0.02em', lineHeight: '1.1',
          }}>
            {data.title}
          </h2>

          {data.subtitle && (
            <p style={{
              fontFamily: 'Space Grotesk, sans-serif', fontWeight: '700',
              fontSize: '0.72rem', color: '#8B6244', textTransform: 'uppercase',
              letterSpacing: '0.08em', margin: '0 0 22px',
            }}>{data.subtitle}</p>
          )}

          <p style={{
            fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.98rem',
            lineHeight: '1.78', color: '#3D2B1F', margin: '0 0 24px',
          }}>{data.detail || data.desc}</p>

          {/* Impact */}
          {data.impact && (
            <div style={{
              background: '#1A1A1A', color: '#FAF8F2', padding: '12px 18px',
              fontFamily: 'Space Grotesk, sans-serif', fontWeight: '700',
              fontSize: '0.8rem', letterSpacing: '0.06em', marginBottom: '24px',
              display: 'inline-block',
            }}>
              ↗ {data.impact}
            </div>
          )}

          {/* Tech stack */}
          {data.stack && data.stack.length > 0 && (
            <div>
              <p style={{
                fontFamily: 'Space Mono, monospace', fontSize: '0.58rem', fontWeight: '700',
                color: '#8B6244', letterSpacing: '0.12em', textTransform: 'uppercase',
                margin: '0 0 10px',
              }}>Tech Stack</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {data.stack.map((tech) => (
                  <span key={tech} style={{
                    border: '1.5px solid #1A1A1A', padding: '3px 10px',
                    fontFamily: 'Space Mono, monospace', fontSize: '0.56rem',
                    fontWeight: '700', color: '#1A1A1A', letterSpacing: '0.04em',
                  }}>{tech}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function navBtn(side) {
  return {
    position: 'absolute',
    [side]: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: '#FAF8F2',
    border: '2px solid #1A1A1A',
    width: '32px',
    height: '32px',
    cursor: 'pointer',
    fontFamily: 'Space Mono, monospace',
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
}
