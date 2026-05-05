import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#1A1A1A',
        color: '#FAF8F2',
        padding: '64px 0 36px',
        borderTop: '2px solid #1A1A1A',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '48px',
            paddingBottom: '48px',
            borderBottom: '1px solid rgba(250,248,242,0.08)',
            flexWrap: 'wrap',
            gap: '40px',
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: '800',
                fontSize: '2.2rem',
                letterSpacing: '-0.03em',
                marginBottom: '12px',
                color: '#FAF8F2',
              }}
            >
              ST<span style={{ color: '#C4956A' }}>.</span>
            </div>
            <p
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.72rem',
                color: '#8B6244',
                fontStyle: 'italic',
                margin: 0,
                lineHeight: '1.6',
                maxWidth: '260px',
              }}
            >
              "I am a cage, in search of a bird."
              <br />— Franz Kafka
            </p>
          </div>

          {/* Link groups */}
          <div style={{ display: 'flex', gap: '56px', flexWrap: 'wrap' }}>
            {[
              {
                label: 'Navigate',
                links: [
                  { name: 'About', href: '#about' },
                  { name: 'Recognition', href: '#recognition' },
                  { name: 'Experience', href: '#experience' },
                  { name: 'Projects', href: '#projects' },
                ],
              },
              {
                label: 'Connect',
                links: [
                  { name: 'GitHub', href: 'https://github.com/SagarTeotia1' },
                  { name: 'LinkedIn', href: 'https://linkedin.com/in/sagarteotia' },
                  { name: 'Email', href: 'mailto:sagar1teotia@gmail.com' },
                ],
              },
            ].map((group, i) => (
              <div key={i}>
                <div
                  style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '0.6rem',
                    color: '#C4956A',
                    fontWeight: '700',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    marginBottom: '14px',
                  }}
                >
                  {group.label}
                </div>
                {group.links.map((link, j) => (
                  <a
                    key={j}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{
                      display: 'block',
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '0.88rem',
                      color: 'rgba(250,248,242,0.65)',
                      marginBottom: '8px',
                      fontWeight: '500',
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FAF8F2')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250,248,242,0.65)')}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.68rem',
              color: 'rgba(250,248,242,0.3)',
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} Sagar Teotia. Still searching.
          </p>
          <p
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.62rem',
              color: 'rgba(250,248,242,0.2)',
              margin: 0,
            }}
          >
            Greater Noida, India · Open to SF / NYC / Anywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
