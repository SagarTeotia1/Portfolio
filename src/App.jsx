import React, { useState } from 'react';
import Navbar from './components/NavBar';
import ProfileCard from './components/ProfileCard';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Awards from './components/Awards';
import TechStack from './components/TechStack';
import Contact from './components/Contact';


export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark bg-black text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      {/* Navigation Bar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row px-6 md:px-12 py-8 gap-8 mt-20">
        {/* Sticky Left Profile Card */}
        <ProfileCard />

        {/* Right Main Content */}
        <main className="flex-1 space-y-16">
          <HeroSection />
          <Projects />
          <Experience />
          <Awards />
          <TechStack />
          <Contact />
        </main>
      </div>
    </div>
  );
}

