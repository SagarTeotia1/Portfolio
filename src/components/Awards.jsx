import React, { useState, useEffect } from 'react';

const awards = [
  {
    title: 'World Gov Summit 2025, Dubai',
    // desc: 'Honored globally for our AR+AI solution aiding the differently-abled under the M-Gov GovTech Awards.',
    bg: '/assets/Award1.jpeg',
  },
  {
    title: 'Smart India Hackathon 2023',
    // desc: 'Built a VR disaster training system for the Ministry of Home Affairs; won at SVCET Chittoor.',
    bg: '/assets/Award2.jpeg',
  },
  {
    title: 'IDE Startup Bootcamp 2024',
    // desc: 'XR Labs stood out for immersive metaverse solutions across EdTech and sustainability domains.',
    bg: '/assets/Award3.jpeg',
  },
  {
    title: 'BitBox 4.0',
    // desc: 'Won for creating an innovative Metaverse EdTech platform at GDSC-JIIT’s national hackathon.',
    bg: '/assets/Award4.jpeg',
  },
  {
    title: 'XR-VERSE',
    // desc: 'Recognized at Startup Sphere Pitchathon for impactful AR/VR startup with real-world use cases.',
    bg: '/assets/Award5.jpeg',
  },
];

export default function AwardsScroller() {
  const [current, setCurrent] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

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

  const handleImageError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const award = awards[current];

  return (
    <section id="awards" className="mt-16">
      <div className="relative w-full flex justify-center items-center px-4 sm:px-8">
        {/* Prev Button */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 sm:left-12 top-1/2 transform -translate-y-1/2 z-10
            w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-800 text-white text-xl
            flex items-center justify-center transition-all duration-300
            hover:bg-orange-500 hover:scale-110"
        >
          ←
        </button>

        {/* Card with improved design */}
        <div className="w-full max-w-[90vw] sm:max-w-[600px] rounded-3xl overflow-hidden shadow-2xl border border-orange-200 dark:border-orange-400 transition-all duration-700 bg-white/70 dark:bg-white/10 backdrop-blur-md hover:scale-[1.01] hover:shadow-orange-200 dark:hover:shadow-orange-500 group">
          {/* Image */}
          <div
            className="h-[300px] sm:h-[340px] bg-cover bg-center"
            style={{
              backgroundImage: imageErrors[current]
                ? 'linear-gradient(135deg, #1f2937, #374151)'
                : `url(${award.bg})`,
              backgroundColor: '#1f2937',
            }}
          >
            <img
              src={award.bg}
              alt=""
              className="hidden"
              onError={() => handleImageError(current)}
              onLoad={() =>
                setImageErrors((prev) => ({ ...prev, [current]: false }))
              }
            />
          </div>

          {/* Content box */}
          <div className="p-6 sm:p-7 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
              {award.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              {award.desc}
            </p>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={scrollNext}
          className="absolute right-4 sm:right-12 top-1/2 transform -translate-y-1/2 z-10
            w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-800 text-white text-xl
            flex items-center justify-center transition-all duration-300
            hover:bg-orange-500 hover:scale-110"
        >
          →
        </button>
      </div>

      {/* Dots / Pagination */}
      <div className="mt-6 flex justify-center gap-2">
        {awards.map((_, idx) => (
          <div
            key={idx}
            className={`h-2.5 w-2.5 rounded-full ${
              idx === current ? 'bg-orange-500' : 'bg-gray-400'
            } transition-all duration-300`}
          ></div>
        ))}
      </div>
    </section>
  );
}
