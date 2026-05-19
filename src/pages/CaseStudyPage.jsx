import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getCaseStudy } from '../data/caseStudies';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = getCaseStudy(slug);
  const [imgIdx, setImgIdx] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    if (data?.redirectTo) {
      navigate(`/case/${data.redirectTo}`, { replace: true });
      return;
    }
    window.scrollTo(0, 0);
  }, [slug, data]);

  useEffect(() => {
    if (!data?.images?.length) return;
    const handler = (e) => {
      if (e.key === 'ArrowLeft')  setImgIdx((i) => (i - 1 + data.images.length) % data.images.length);
      if (e.key === 'ArrowRight') setImgIdx((i) => (i + 1) % data.images.length);
      if (e.key === 'Escape')     setLightbox(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [data]);

  // Auto-advance every 5s, pause when lightbox open
  useEffect(() => {
    if (!data?.images?.length || data.images.length < 2 || lightbox) return;
    const timer = setInterval(() => {
      setImgIdx((i) => (i + 1) % data.images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [data, lightbox]);

  if (!data) {
    return (
      <div style={{ minHeight: '100vh', background: '#FAF8F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: 'Space Mono, monospace', color: '#8B6244', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '16px' }}>404 · NOT FOUND</p>
          <button onClick={() => navigate('/')} style={{ background: '#1A1A1A', color: '#FAF8F2', border: 'none', padding: '12px 24px', fontFamily: 'Space Grotesk, sans-serif', fontWeight: '700', cursor: 'pointer' }}>
            ← Back
          </button>
        </div>
      </div>
    );
  }

  const hasImages = data.images && data.images.length > 0;
  const paragraphs = (data.detail || data.desc || '').split('\n\n');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{ background: '#FAF8F2', minHeight: '100vh' }}
    >
      {/* ── Top bar ── */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: '#FAF8F2', borderBottom: '2px solid #1A1A1A',
        padding: '12px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ x: -3 }}
          style={{
            background: 'transparent', border: '2px solid #1A1A1A',
            padding: '7px 18px', fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: '700', fontSize: '0.75rem', letterSpacing: '0.08em',
            cursor: 'pointer', color: '#1A1A1A', boxShadow: '2px 2px 0 #1A1A1A',
          }}
        >
          ← Back
        </motion.button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.58rem', color: '#8B6244', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            {data.type}
          </span>
          {data.year && (
            <span style={{ background: '#1A1A1A', color: '#FAF8F2', fontFamily: 'Space Mono, monospace', fontSize: '0.56rem', fontWeight: '700', padding: '3px 9px', letterSpacing: '0.1em' }}>
              {data.year}
            </span>
          )}
        </div>
      </div>

      {/* ── Dark title block ── */}
      <div style={{ background: '#1A1A1A', borderBottom: '2px solid #1A1A1A', padding: 'clamp(28px, 5vw, 52px) clamp(20px, 6vw, 80px)' }}>
        <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.62rem', color: '#C4956A', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', margin: '0 0 10px' }}>
          {data.org}
        </p>
        <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: '800', fontSize: 'clamp(2.2rem, 6vw, 5rem)', color: '#FAF8F2', margin: '0 0 10px', letterSpacing: '-0.03em', lineHeight: '1' }}>
          {data.title}
        </h1>
        {data.subtitle && (
          <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: '700', fontSize: '0.82rem', color: '#C4956A', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>
            {data.subtitle}
          </p>
        )}
      </div>

      {/* ── Image carousel — full width, contain ── */}
      {hasImages && (
        <div style={{ background: '#0D0D0D', borderBottom: '2px solid #1A1A1A', position: 'relative' }}>
          {/* Main image */}
          <div
            style={{ position: 'relative', cursor: 'zoom-in', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '260px' }}
            onClick={() => setLightbox(true)}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={imgIdx}
                src={data.images[imgIdx]}
                alt=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28 }}
                style={{
                  display: 'block',
                  maxWidth: '100%',
                  maxHeight: '68vh',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  margin: '0 auto',
                }}
              />
            </AnimatePresence>

            {/* Counter badge */}
            {data.images.length > 1 && (
              <div style={{ position: 'absolute', top: '14px', right: '16px', background: 'rgba(0,0,0,0.65)', color: '#FAF8F2', fontFamily: 'Space Mono, monospace', fontSize: '0.58rem', fontWeight: '700', padding: '4px 10px', letterSpacing: '0.08em', backdropFilter: 'blur(4px)' }}>
                {imgIdx + 1} / {data.images.length}
              </div>
            )}

            <div style={{ position: 'absolute', bottom: '12px', right: '16px', background: 'rgba(0,0,0,0.5)', color: 'rgba(255,255,255,0.5)', fontFamily: 'Space Mono, monospace', fontSize: '0.5rem', padding: '3px 8px', letterSpacing: '0.06em', backdropFilter: 'blur(4px)' }}>
              click to expand
            </div>
          </div>

          {/* Nav + thumbnails row */}
          {data.images.length > 1 && (
            <div style={{ display: 'flex', borderTop: '1px solid rgba(255,255,255,0.08)', alignItems: 'stretch' }}>
              {/* Prev */}
              <button
                onClick={() => setImgIdx((i) => (i - 1 + data.images.length) % data.images.length)}
                style={{ width: '52px', flexShrink: 0, background: 'transparent', border: 'none', borderRight: '1px solid rgba(255,255,255,0.08)', color: '#FAF8F2', fontSize: '1.1rem', cursor: 'pointer' }}
              >←</button>

              {/* Thumbnail scroll */}
              <div style={{ flex: 1, display: 'flex', overflowX: 'auto', gap: '1px', scrollbarWidth: 'none', padding: '0' }}>
                {data.images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    style={{
                      flex: '0 0 auto', width: '72px', height: '52px',
                      background: '#1A1A1A', border: 'none',
                      borderBottom: i === imgIdx ? '2px solid #C4956A' : '2px solid transparent',
                      padding: 0, cursor: 'pointer',
                      opacity: i === imgIdx ? 1 : 0.4,
                      transition: 'opacity 0.15s, border-color 0.15s',
                    }}
                  >
                    <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
                  </button>
                ))}
              </div>

              {/* Next */}
              <button
                onClick={() => setImgIdx((i) => (i + 1) % data.images.length)}
                style={{ width: '52px', flexShrink: 0, background: 'transparent', border: 'none', borderLeft: '1px solid rgba(255,255,255,0.08)', color: '#FAF8F2', fontSize: '1.1rem', cursor: 'pointer' }}
              >→</button>
            </div>
          )}
        </div>
      )}

      {/* ── Content ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        style={{ maxWidth: '780px', margin: '0 auto', padding: 'clamp(40px, 6vw, 72px) clamp(20px, 5vw, 48px) 96px' }}
      >
        {/* Detail */}
        <div style={{ marginBottom: '40px' }}>
          {paragraphs.map((para, i) => (
            <p key={i} style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.92rem, 1.4vw, 1.05rem)', lineHeight: '1.85', color: '#3D2B1F', margin: '0 0 22px' }}>
              {para}
            </p>
          ))}
        </div>

        {/* Impact */}
        {data.impact && (
          <div style={{ background: '#1A1A1A', padding: '22px 26px', border: '2px solid #1A1A1A', boxShadow: '5px 5px 0 #8B6244', marginBottom: '36px' }}>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.58rem', color: '#C4956A', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 8px' }}>
              Impact
            </p>
            <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: '800', fontSize: 'clamp(0.95rem, 2vw, 1.35rem)', color: '#FAF8F2', margin: 0, lineHeight: '1.35' }}>
              {data.impact}
            </p>
          </div>
        )}

        {/* Stack */}
        {data.stack?.length > 0 && (
          <div style={{ marginBottom: '40px' }}>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.58rem', color: '#8B6244', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', margin: '0 0 12px' }}>
              Tech Stack
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
              {data.stack.map((tech) => (
                <span key={tech} style={{ border: '2px solid #1A1A1A', padding: '5px 12px', fontFamily: 'Space Mono, monospace', fontSize: '0.6rem', fontWeight: '700', color: '#1A1A1A', letterSpacing: '0.04em', boxShadow: '2px 2px 0 #1A1A1A' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Live link */}
        {data.link && (
          <div style={{ marginBottom: '40px' }}>
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1A1A1A', color: '#FAF8F2', padding: '13px 26px', border: '2px solid #1A1A1A', boxShadow: '4px 4px 0 #8B6244', fontFamily: 'Space Grotesk, sans-serif', fontWeight: '700', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none' }}
            >
              View Live ↗
            </a>
          </div>
        )}

        {/* Back */}
        <div style={{ paddingTop: '32px', borderTop: '2px solid #1A1A1A' }}>
          <button
            onClick={() => navigate(-1)}
            style={{ background: 'transparent', border: '2px solid #1A1A1A', padding: '11px 26px', fontFamily: 'Space Grotesk, sans-serif', fontWeight: '700', fontSize: '0.8rem', letterSpacing: '0.08em', cursor: 'pointer', color: '#1A1A1A', boxShadow: '3px 3px 0 #1A1A1A' }}
          >
            ← Back to Portfolio
          </button>
        </div>
      </motion.div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
            style={{ position: 'fixed', inset: 0, zIndex: 999, background: 'rgba(0,0,0,0.96)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', cursor: 'zoom-out' }}
          >
            <motion.img
              key={imgIdx}
              src={data.images[imgIdx]}
              alt=""
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain', boxShadow: '0 0 0 2px #C4956A' }}
            />
            {data.images.length > 1 && (
              <>
                <button onClick={(e) => { e.stopPropagation(); setImgIdx((i) => (i - 1 + data.images.length) % data.images.length); }}
                  style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: '#FAF8F2', width: '44px', height: '44px', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>←</button>
                <button onClick={(e) => { e.stopPropagation(); setImgIdx((i) => (i + 1) % data.images.length); }}
                  style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: '#FAF8F2', width: '44px', height: '44px', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>→</button>
              </>
            )}
            <button onClick={() => setLightbox(false)}
              style={{ position: 'absolute', top: '16px', right: '16px', background: 'transparent', border: '1px solid rgba(255,255,255,0.25)', color: '#FAF8F2', width: '36px', height: '36px', fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
            <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.1em' }}>
              {imgIdx + 1} / {data.images.length} · ESC to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
