import React, { useRef, useEffect } from 'react';

const awards = [
  {
    icon: '🏆',
    title: 'Winner – Smart India Hackathon (SIH) 2023',
    desc: 'Developed a defense training system recognized at national level.',
    bg: '/assets/award-bg-1.jpg',
  },
  {
    icon: '🥇',
    title: 'Best All-Freshers Team – BitBox 4.0',
    desc: 'Awarded at hackathon by GDSC JIIT for exceptional innovation.',
    bg: '/assets/award-bg-2.jpg',
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
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold mb-4 text-white dark:text-white px-4">Awards & Recognition</h2>
      <div className="relative px-2">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-orange-600 hover:bg-orange-700 text-white p-1 rounded-full text-xs"
        >
          ←
        </button>

        <div
          ref={scrollRef}
          className="overflow-x-auto whitespace-nowrap scroll-smooth py-6 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          <div className="inline-flex gap-6">
            {awards.map((award, i) => (
              <div
                key={i}
                className="relative min-w-[340px] md:min-w-[440px] h-[300px] bg-cover bg-center rounded-xl overflow-hidden shadow-md border border-gray-700 hover:shadow-orange-400 transition duration-300"
                style={{ backgroundImage: `url(${award.bg})` }}
              >
                <div className="bg-black/60 p-4 h-full flex flex-col justify-end">
                  <div className="text-5xl mb-2">{award.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-1">{award.title}</h3>
                  <p className="text-sm text-gray-300 leading-snug">{award.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-orange-600 hover:bg-orange-700 text-white p-1 rounded-full text-xs"
        >
          →
        </button>
      </div>
    </div>
  );
}