import React from 'react';

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <header className="center w-full fixed top-0 z-50 px-6 py-4 bg-black/70 dark:bg-black/70 backdrop-blur-md rounded-b-xl flex justify-between items-center shadow-lg">
      {/* Brand Name */}
    

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-6 text-sm font-medium text-white">
        <a href="#home" className="hover:underline underline-offset-4">Home</a>
        <a href="#projects" className="hover:underline underline-offset-4">Projects</a>
        <a href="#experience" className="hover:underline underline-offset-4">Experience</a>
        <a href="#techstack" className="hover:underline underline-offset-4">Tech Stack</a>
        <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
      </nav>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-auto md:ml-0 text-white bg-gray-200 dark:bg-gray-800 dark:text-white px-3 py-1 rounded-full transition"
        title="Toggle Theme"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </header>
  );
}
