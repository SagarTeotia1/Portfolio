import React from 'react';
import {
  Home,
  Folder,
  Briefcase,
  Wrench,
  Pen,
  Award,
} from 'lucide-react';

export default function Navbar({ darkMode, setActiveSection }) {
  const navItems = [
    { href: '#home', icon: Home, label: 'Home' },
    { href: '#projects', icon: Folder, label: 'Projects' },
    { href: '#experience', icon: Briefcase, label: 'Experience' },
    // { href: '#techstack', icon: Wrench, label: 'Tech Stack' },
    { href: '#awards', icon: Award, label: 'Awards' },
    { href: '#contact', icon: Pen, label: 'Contact' },
  ];

  const handleSmoothScroll = (e, href, label) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    if (label === 'Contact') return;
    setActiveSection(label);
  };

  return (
    <div
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-40 px-6 py-3 rounded-full shadow-lg flex gap-6 items-center
      ${darkMode ? 'bg-[#181818] text-white' : 'bg-white text-black border border-gray-200'}`}
    >
      {navItems.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          onClick={(e) => handleSmoothScroll(e, href, label)}
          className="relative group flex flex-col items-center"
        >
          <Icon className="w-5 h-5 text-orange-500 group-hover:scale-110 transition" />
          <span className="absolute top-7 text-xs opacity-0 group-hover:opacity-100 transition-opacity text-orange-500 whitespace-nowrap">
            {label}
          </span>
        </a>
      ))}
    </div>
  );
}
