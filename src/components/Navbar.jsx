import React from 'react';
import { Home, Folder, Briefcase, Wrench, Pen, Sun, Moon } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <>
      {/* Floating Centered Navbar */}
      <div
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-40 px-6 py-3 rounded-full shadow-lg flex gap-6 items-center
        ${darkMode ? 'bg-[#181818] text-white' : 'bg-white text-black border border-gray-200'}`}
      >
        {/* Navigation Links */}
        <a href="#home" title="Home">
          <Home className="w-5 h-5 hover:scale-110 transition text-orange-500" />
        </a>
        <a href="#projects" title="Projects">
          <Folder className="w-5 h-5 hover:scale-110 transition text-orange-500" />
        </a>
        <a href="#experience" title="Experience">
          <Briefcase className="w-5 h-5 hover:scale-110 transition text-orange-500" />
        </a>
        <a href="#techstack" title="Tech Stack">
          <Wrench className="w-5 h-5 hover:scale-110 transition text-orange-500" />
        </a>
        <a href="#contact" title="Contact">
          <Pen className="w-5 h-5 hover:scale-110 transition text-orange-500" />
        </a>
      </div>

      {/* Dark Mode Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        title="Toggle Theme"
        className={`fixed bottom-6 right-6 z-50 p-2 rounded-full shadow-md hover:scale-110 transition
        ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
      >
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full 
          ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`}
        >
          {darkMode ? (
            <Sun className="w-4 h-4 text-orange-500" />
          ) : (
            <Moon className="w-4 h-4 text-orange-500" />
          )}
        </div>
      </button>
    </>
  );
}
