import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Awards from './components/Awards';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`${
        darkMode ? 'dark text-white' : 'text-black'
      } min-h-screen transition-colors duration-300 ease-in-out`}
      style={{ backgroundColor: '#1A1A1A' }}
    >
      {/* Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Layout */}
      <main className="max-w-screen-xl mx-auto pt-20 pb-20 px-4 sm:px-8 md:px-12 lg:px-25 space-y-24">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-10 min-h-screen">
          {/* Sidebar: Profile Card */}
          <aside
            className="w-full lg:w-1/3 lg:sticky lg:top-24"
            style={{ alignSelf: 'flex-start' }} // ensures sticky applies properly
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ProfileCard />
            </motion.div>
          </aside>

          {/* Content Section */}
          <section className="lg:w-2/3 w-full space-y-12 mt-[-10px]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <HeroSection />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Awards />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Projects />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Experience />
            </motion.div>

            {/* <TechStack /> */}

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Contact />
            </motion.div>

            
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
}
