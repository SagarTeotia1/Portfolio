import React from 'react';

const techStack = [
  { name: 'React', icon: '⚛️', color: 'from-blue-400 to-blue-600' },
  { name: 'Next.js', icon: '▲', color: 'from-gray-800 to-black' },
  { name: 'TypeScript', icon: '🔷', color: 'from-blue-600 to-blue-800' },
  { name: 'Tailwind', icon: '🎨', color: 'from-cyan-400 to-cyan-600' },
  { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-700' },
  { name: 'Express', icon: '🚀', color: 'from-gray-600 to-gray-800' },
  { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-green-800' },
  { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-700 to-blue-900' },
  { name: 'Docker', icon: '🐳', color: 'from-blue-500 to-blue-700' },
  { name: 'AWS', icon: '☁️', color: 'from-orange-500 to-orange-700' },
  { name: 'Git', icon: '🔗', color: 'from-red-500 to-red-700' },
  { name: 'Firebase', icon: '🔥', color: 'from-yellow-500 to-orange-500' },
  { name: 'GraphQL', icon: '🕸️', color: 'from-pink-500 to-pink-700' },
  { name: 'Redux', icon: '🔄', color: 'from-purple-500 to-purple-700' },
  { name: 'Three.js', icon: '🎮', color: 'from-gray-700 to-gray-900' },
  { name: 'Vercel', icon: '▲', color: 'from-black to-gray-800' }
];

export default function TechStackStrip() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white overflow-hidden">
      {/* Header */}
      <div className="text-center mb-14 px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">Tech Stack</h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
          Tools & technologies I use to build performant and elegant digital products.
        </p>
      </div>

      {/* Strip Rows */}
      {[false, true].map((reverse, i) => (
        <div key={i} className="relative mb-10">
          <div className={`flex gap-4 md:gap-8 ${reverse ? 'animate-scroll-right' : 'animate-scroll-left'}`}>
            {[...(reverse ? techStack.slice().reverse() : techStack), ...(reverse ? techStack.slice().reverse() : techStack)].map((tech, index) => (
              <div key={`${tech.name}-${index}`} className="flex-shrink-0 group relative">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-white/5 backdrop-blur rounded-2xl flex items-center justify-center border border-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300">
                  <span className="text-xl sm:text-2xl md:text-3xl group-hover:scale-125 transition-transform duration-300">
                    {tech.icon}
                  </span>
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                </div>
                <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 text-xs sm:text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>

          {/* Fade edges */}
          <div className="absolute top-0 left-0 w-10 sm:w-16 md:w-24 h-full bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-10 sm:w-16 md:w-24 h-full bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </div>
      ))}

      {/* Animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 35s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 35s linear infinite;
        }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
