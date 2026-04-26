import React from 'react';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Marquee from './components/Marquee';
import About from './components/About';
import KafkaBreak from './components/KafkaBreak';
import Recognition from './components/Recognition';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ background: '#FAF8F2', minHeight: '100vh' }}>
      {/* Scroll progress — top bar */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Chapter 1: The entrance — who are you? */}
      <HeroSection />

      {/* Achievement ticker — energy, credibility, momentum */}
      <Marquee />

      {/* Chapter 2: The human story — what drives you? */}
      <About />

      {/* Chapter break — the Kafka quote, full weight, dark pause */}
      <KafkaBreak />

      {/* Chapter 3: External proof — who has noticed? */}
      <Recognition />

      {/* Marquee dark variant — between recognition and work */}
      <Marquee dark />

      {/* Chapter 4: The work itself — where it happened */}
      <Experience />

      {/* Chapter 5: The things built — show don't tell */}
      <Projects />

      {/* Chapter 6: The depth — how you build */}
      <TechStack />

      {/* Chapter 7: The invitation — the story continues */}
      <Contact />

      {/* Outro */}
      <Footer />
    </div>
  );
}
