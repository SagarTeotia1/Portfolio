import React, { useState } from 'react';
import Navbar from './components/Navbar';
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
    <div className={`${darkMode ? 'dark bg-black text-white' : 'bg-white text-black'} min-h-screen transition-colors duration-300`}>
      {/* Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Layout */}
      <main className="max-w-7xl mx-auto pt-28 pb-16 px-4 sm:px-8 md:px-12 lg:px-16 space-y-20">
        {/* Grid Layout for Profile & Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Profile Sidebar */}
          <aside className="lg:w-1/3 w-full">
            <ProfileCard />
          </aside>

          {/* Main Sections */}
          <section className="lg:w-2/3 w-full space-y-20">
            <HeroSection />
            <Awards />
            <Projects />
            <Experience />
           
            {/* <TechStack /> */}
            <Contact />
          </section>
        </div>
      </main>
    </div>
  );
}
