import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Recognition from './components/Recognition';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ background: '#FAF8F2', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <About />
      <Recognition />
      <Experience />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}
