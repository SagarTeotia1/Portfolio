import React from 'react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="mt-10 px-4 md:px-5 text-left"
    >
      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-black dark:text-white text">
        SOFTWARE
        <br />
        <span className="text-gray-500 dark:text-gray-400">ENGINEER</span>
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-gray-500 dark:text-gray-300 text-lg md:text-xl">
        Passionate about crafting intuitive, engaging, and scalable user
        experiences. I build high-quality digital products that solve real
        problems.
      </p>

      {/* Stats - Always 3 Columns */}
<div className="w-full flex justify-center">
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12 w-full max-w-4xl text-center">
    <div>
      <p className="text-4xl md:text-5xl font-extrabold text-black dark:text-white">+46</p>
      <p className="text-xs md:text-sm mt-1 text-gray-500 dark:text-gray-400">
        Projects Completed
      </p>
    </div>
    <div>
      <p className="text-4xl md:text-5xl font-extrabold text-black dark:text-white">+20</p>
      <p className="text-xs md:text-sm mt-1 text-gray-500 dark:text-gray-400">
        Worldwide Clients
      </p>
    </div>
  </div>
</div>
    </section>
  );
}
