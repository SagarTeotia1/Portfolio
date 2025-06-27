import React from 'react';

export default function HeroSection() {
  return (
    <section id="home" className="mt-4">
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        SOFTWARE <br />
        <span className="text-gray-500 dark:text-gray-400">ENGINEER</span>
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-xl text-gray-400 text-lg">
        Passionate about crafting intuitive, engaging, and scalable user experiences. I build high-quality digital products that solve real problems.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mt-10 text-center">
        <div>
          <p className="text-4xl font-bold">+12</p>
          <p className="text-sm text-gray-500">Years of Experience</p>
        </div>
        <div>
          <p className="text-4xl font-bold">+46</p>
          <p className="text-sm text-gray-500">Projects Completed</p>
        </div>
        <div>
          <p className="text-4xl font-bold">+20</p>
          <p className="text-sm text-gray-500">Worldwide Clients</p>
        </div>
      </div>
    </section>
  );
}
