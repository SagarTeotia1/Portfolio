import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#recognition', label: 'Recognition' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: '#FAF8F2',
        borderBottom: '2px solid #1A1A1A',
        boxShadow: scrolled ? '0 4px 0 rgba(26,26,26,0.08)' : 'none',
        transition: 'box-shadow 0.2s',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a href="#home">
          <span
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: '800',
              fontSize: '1.3rem',
              color: '#1A1A1A',
              letterSpacing: '-0.03em',
            }}
          >
            ST<span style={{ color: '#8B6244' }}>.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex" style={{ gap: '2px', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: '600',
                fontSize: '0.78rem',
                color: '#1A1A1A',
                padding: '6px 14px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                transition: 'background 0.12s, border 0.12s',
                border: '1.5px solid transparent',
                display: 'block',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#EDE6D3';
                e.currentTarget.style.border = '1.5px solid #1A1A1A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.border = '1.5px solid transparent';
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:sagar1teotia@gmail.com"
          className="brutal-btn hidden md:inline-block"
          style={{
            background: '#1A1A1A',
            color: '#FAF8F2',
            padding: '8px 20px',
            fontWeight: '700',
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: '2px solid #1A1A1A',
            padding: '6px 12px',
            cursor: 'pointer',
            fontFamily: 'Space Mono, monospace',
            fontSize: '0.7rem',
            fontWeight: '700',
            letterSpacing: '0.08em',
            color: '#1A1A1A',
            borderRadius: 0,
          }}
        >
          {isOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          style={{
            background: '#FAF8F2',
            borderTop: '2px solid #1A1A1A',
            padding: '16px 24px 24px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                display: 'block',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: '700',
                fontSize: '1.4rem',
                color: '#1A1A1A',
                padding: '12px 0',
                borderBottom: '1px solid #EDE6D3',
                letterSpacing: '-0.01em',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:sagar1teotia@gmail.com"
            onClick={() => setIsOpen(false)}
            style={{
              display: 'inline-block',
              marginTop: '20px',
              background: '#1A1A1A',
              color: '#FAF8F2',
              padding: '12px 24px',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: '700',
              fontSize: '0.85rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              border: '2px solid #1A1A1A',
            }}
          >
            Hire Me →
          </a>
        </div>
      )}
    </nav>
  );
}
