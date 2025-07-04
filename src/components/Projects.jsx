import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const sampleProjects = [
  {
    title: "MetaLearn",
    desc: "Immersive VR classroom system for experiential learning.",
    image: "/assets/Project 1.png",
    link: "#",
  },
  {
    title: "MarkitLift",
    desc: "No-code AI-powered tool to build websites, branding, and marketing materials.",
    image: "/assets/Project 2.png",
    link: "#",
  },
  {
    title: "Clum V",
    desc: "Student-first app for printing, food orders, events & carpooling.",
    image: "/assets/Project 3.png",
    link: "#",
  },
    {
    title: "Clum V",
    desc: "Student-first app for printing, food orders, events & carpooling.",
    image: "/assets/Project 4.png",
    link: "#",
  },
];

export default function ProjectList() {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const handleImageLoad = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: false }));
  };

  return (
    <section id="projects" className="mt-20 text-white px-4 md:px-8 lg:px-5 scroll-mt-24">
      {/* Heading */}
      <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
        RECENT <br />
        <span className="text-gray-600 dark:text-gray-500">PROJECTS</span>
      </h2>

      {/* Projects */}
      <div className="mt-10 flex flex-col gap-8">
        {sampleProjects.map((proj, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row sm:items-start justify-between border border-gray-800 rounded-xl p-4 hover:shadow-lg hover:shadow-orange-500/30 hover:border-orange-500 transition-all duration-300 group hover:scale-[1.015]"
          >
            {/* Project Info */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 flex-1">
              {/* Thumbnail */}
              <div className="w-full sm:w-20 h-40 sm:h-20 rounded-xl border border-gray-700 group-hover:border-orange-500 transition overflow-hidden relative bg-gray-800">
                {imageErrors[i] ? (
                  // Fallback placeholder
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800 text-gray-400">
                    <div className="text-center">
                      <div className="text-2xl mb-1">📱</div>
                      <div className="text-xs">Project</div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(i)}
                    onLoad={() => handleImageLoad(i)}
                  />
                )}
              </div>

              {/* Text Info */}
              <div>
                <h3 className="text-xl font-bold group-hover:text-orange-400 transition">
                  {proj.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{proj.desc}</p>
              </div>
            </div>

            {/* External Link Icon */}
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 p-2 hover:bg-orange-500/20 rounded-full transition mt-4 sm:mt-0 sm:ml-4 self-start sm:self-center"
            >
              <ArrowUpRight size={20} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}