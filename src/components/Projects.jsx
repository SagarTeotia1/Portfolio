import React from 'react';

const sampleProjects = [
  {
    title: "MetaLearn",
    desc: "Immersive VR classroom system for experiential learning.",
    tech: ["Unity", "WebRTC", "XR"],
  },
  {
    title: "MarkitLift",
    desc: "No-code AI-powered tool to build websites, branding, and marketing materials.",
    tech: ["React", "OpenAI", "Tailwind"],
  },
  {
    title: "Clum V",
    desc: "Student-first app for document printing, food orders, events, and carpooling.",
    tech: ["MERN", "Redis", "Kafka"],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {sampleProjects.map((proj, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-transparent hover:border-blue-500"
          >
            <h3 className="text-xl font-semibold text-black dark:text-white">{proj.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{proj.desc}</p>

            <div className="flex gap-2 mt-4 flex-wrap">
              {proj.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
