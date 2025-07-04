import React from 'react';

const experiences = [
  {
    role: 'Project Lead @ Ministry of Home Affairs (MHA), Govt. of India',
    time: 'Jan 2025 – Present',
    desc: `Leading 'Project Sangrakshan'—a VR training simulator for the NDRF to prepare for CBRN disasters. Coordinating deployment, training, and real-world integration.`,
  },
  {
    role: 'Freelancer',
    time: 'Jan 2023 – Present',
    desc: `Delivered 20+ projects including SaaS dashboards, XR demos, and e-commerce apps. Built custom solutions for startups across India using MERN, Unity, and Firebase.`,
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
