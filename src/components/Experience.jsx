import React from 'react';

const experiences = [
  {
    role: 'Founder @ XR-VERSE',
    time: 'Jul 2023 – Present',
    desc: `Built scalable AR/VR solutions for disaster simulation and edtech training.\nLed a team of 6, secured grants, and delivered simulation platforms to national agencies.`,
  },
  {
    role: 'Full-Stack Developer Intern @ MetaFoundry',
    time: 'May 2024 – Aug 2024',
    desc: `Developed internal tools using React and FastAPI. Deployed scalable microservices,\nimplemented CI/CD pipelines, and collaborated with the design team for better UX.`,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mt-24 px-4 sm:px-6 lg:px-5">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-white">
        EXPERIENCE
      </h2>

      {/* Timeline Container */}
      <div className="relative border-l border-orange-500/40 pl-6 sm:pl-8 space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
          

            {/* Experience Card */}
            <div className="backdrop-blur-md bg-white/5 dark:bg-black/10 border border-gray-700 rounded-xl p-5 sm:p-6 transition-all duration-300 hover:border-orange-500 hover:shadow-orange-500/10 shadow-inner">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 group-hover:text-orange-400 transition">
                {exp.role}
              </h3>
              <p className="text-sm text-gray-400 mb-3 italic">{exp.time}</p>
              <p className="text-sm text-gray-300 whitespace-pre-line leading-relaxed">
                {exp.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
