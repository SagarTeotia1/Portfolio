import React from 'react';
import './TechStack.css';

const logos = [
  '/logos/react.svg',
  '/logos/tailwind.svg',
  '/logos/html5.svg',
  '/logos/css3.svg',
  '/logos/js.svg',
  '/logos/ts.svg',
  '/logos/nodejs.svg',
  '/logos/express.svg',
  '/logos/mongodb.svg',
  '/logos/postgresql.svg',
  '/logos/docker.svg',
  '/logos/kubernetes.svg',
];

export default function TechStack() {
  return (
    <div className="marquee-track">
      <div className="marquee-row">
        {[...logos, ...logos].map((src, i) => (
          <img key={i} src={src} alt="tech" className="logo" />
        ))}
      </div>
    </div>
  );
}
