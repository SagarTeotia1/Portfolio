import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import CaseStudyPage from './pages/CaseStudyPage';
import FounderVentures from './components/FounderVentures';

function Portfolio() {
  return (
    <div style={{ background: '#FAF8F2', minHeight: '100vh' }}>
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <Marquee />
      <About />
      <KafkaBreak />
      <Recognition />
      <Marquee dark />
      <FounderVentures />
      <Experience />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/case/:slug" element={<CaseStudyPage />} />
    </Routes>
  );
}
