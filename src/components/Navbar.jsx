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
        {/* Navigation Links with labels on hover */}
        {[
          { href: '#home', icon: Home, label: 'Home' },
          { href: '#projects', icon: Folder, label: 'Projects' },
          { href: '#experience', icon: Briefcase, label: 'Experience' },
          { href: '#techstack', icon: Wrench, label: 'Tech Stack' },
          { href: '#contact', icon: Pen, label: 'Contact' },
        ].map(({ href, icon: Icon, label }) => (
          <a key={label} href={href} className="relative group flex flex-col items-center">
            <Icon className="w-5 h-5 text-orange-500 group-hover:scale-110 transition" />
            <span className="absolute top-7 text-xs opacity-0 group-hover:opacity-100 transition-opacity text-orange-500 whitespace-nowrap">
              {label}
            </span>
          </a>
        ))}
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
