import React from 'react';

const items = [
  'World Government Summit · UAE 2025',
  '₹35L+ in Grants & Awards',
  '200M+ Monthly Views',
  'Smart India Hackathon Winner',
  '15M+ Organic Reach',
  'NDRF Production Deployment',
  'IIT Delhi · 1st Runner-Up',
  'Scale+91 · Top 3 / 5000+',
  'Age 20 · Still Building',
];

export default function Marquee({ dark = false }) {
  const content = [...items, ...items];

  return (
    <div
      style={{
        overflow: 'hidden',
        background: dark ? '#1A1A1A' : '#EDE6D3',
        borderTop: '2px solid #1A1A1A',
        borderBottom: '2px solid #1A1A1A',
        padding: '13px 0',
        cursor: 'default',
      }}
    >
      <div className="marquee-track">
        {content.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.7rem',
              fontWeight: '700',
              color: dark ? '#C4956A' : '#3D2B1F',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '0 28px',
              borderRight: `1px solid ${dark ? 'rgba(196,149,106,0.25)' : 'rgba(61,43,31,0.18)'}`,
              whiteSpace: 'nowrap',
              userSelect: 'none',
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
