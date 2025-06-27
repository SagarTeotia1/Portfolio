import React from 'react';

const techStacks = {
  Frontend: ['React', 'Tailwind CSS', 'HTML5', 'CSS3'],
  Backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
  DevOps: ['Docker', 'Kubernetes', 'GitHub', 'CI/CD'],
  Tools: ['Figma', 'VS Code', 'Postman'],
};

export default function TechStack() {
  return (
    <section id="techstack">
      <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(techStacks).map(([category, tools]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-3 text-white dark:text-white">{category}</h3>

            <div className="flex flex-wrap gap-3">
              {tools.map((tool, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md hover:scale-105 transition-all duration-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
