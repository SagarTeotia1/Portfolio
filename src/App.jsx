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
      <main className="px-6 md:px-16 lg:px-24 xl:px-32 pt-24 pb-12 max-w-screen-xl mx-auto space-y-20">
        {/* Responsive Wrapper */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Profile Card */}
          <div className="md:w-1/3 w-full">
            <ProfileCard />
          </div>

          {/* Main Content */}
          <div className="md:w-2/3 w-full space-y-20">
            <HeroSection />
            <Projects />
            <Experience />
            <Awards />
            <TechStack />
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}
