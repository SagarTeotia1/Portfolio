import React, { useState, useEffect } from 'react';




const awards = [
  {
    icon: '🏆',
    title: 'Winner – Smart India Hackathon (SIH) 2023',
    desc: 'Developed a defense training system recognized at national level.',
    bg: 'src/assets/SAGAR TEOTIA.png',
  },
  {
    icon: '🥇',
    title: 'Best All-Freshers Team – BitBox 4.0',
    desc: 'Awarded at hackathon by GDSC JIIT for exceptional innovation.',
    bg: 'src/assets/Award 2.jpeg',
  },
  {
    icon: '🎖️',
    title: 'Finalist – Solve for Tomorrow Challenge 2024',
    desc: "Selected among top entries in Samsung's prestigious tech innovation challenge.",
    bg: '/assets/award-bg-3.jpg',
  },
  {
    icon: '🚀',
    title: '2nd Place – Startup Pitchathon @ MAIT',
    desc: 'Recognized for impactful startup idea by Startup Sphere.',
    bg: '/assets/award-bg-4.jpg',
  },
];

export default function AwardsScroller() {
  const [current, setCurrent] = useState(0);

  const scrollNext = () => {
    setCurrent((prev) => (prev + 1) % awards.length);
  };

  const scrollPrev = () => {
    setCurrent((prev) => (prev - 1 + awards.length) % awards.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const award = awards[current];

  return (
    <section id="awards" className="mt-16">
      <div className="relative w-full flex justify-center items-center px-4 sm:px-8">

        <button
          onClick={scrollPrev}
          className="absolute left-4 sm:left-12 top-1/2 transform -translate-y-1/2 z-10
            w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-800 text-white text-xl
            flex items-center justify-center transition-all duration-300
            hover:bg-orange-500 hover:text-white hover:scale-110
            outline-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          ←
        </button>

        <div
          className="w-full max-w-[90vw] sm:max-w-[600px] h-[300px] sm:h-[340px] 
            bg-cover bg-center rounded-xl overflow-hidden shadow-lg 
            border border-gray-700 transition-all duration-700"
          style={{ backgroundImage: `url(${award.bg})` }}
        >
          <div className="bg-black/60 p-5 h-full flex flex-col justify-end items-center text-center">
            <div className="text-5xl mb-2">{award.icon}</div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{award.title}</h3>
            <p className="text-sm sm:text-base text-gray-300 leading-snug">{award.desc}</p>
          </div>
        </div>

        <button
          onClick={scrollNext}
          className="absolute right-4 sm:right-12 top-1/2 transform -translate-y-1/2 z-10
            w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-800 text-white text-xl
            flex items-center justify-center transition-all duration-300
            hover:bg-orange-500 hover:text-white hover:scale-110
            outline-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          →
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {awards.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 rounded-full ${
              idx === current ? 'bg-orange-500' : 'bg-gray-500'
            } transition-all duration-300`}
          ></div>
        ))}
      </div>
    </section>
  );
}
