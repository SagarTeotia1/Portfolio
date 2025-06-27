import React from 'react';

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>

      <div className="space-y-6">
        {/* Experience 1 */}
        <div>
          <h3 className="text-lg font-semibold text-white dark:text-white">
            Founder @ XR-VERSE
          </h3>
          <p className="text-sm text-gray-400">Jul 2023 – Present</p>
          <p className="mt-2 text-sm text-gray-300">
            Built scalable AR/VR solutions for disaster simulation and edtech training.
            Led a team of 6, secured grants, and delivered simulation platforms to national agencies.
          </p>
        </div>

        {/* Experience 2 */}
        <div>
          <h3 className="text-lg font-semibold text-white dark:text-white">
            Full-Stack Developer Intern @ MetaFoundry
          </h3>
          <p className="text-sm text-gray-400">May 2024 – Aug 2024</p>
          <p className="mt-2 text-sm text-gray-300">
            Developed internal tools using React and FastAPI. Deployed scalable microservices,
            implemented CI/CD pipelines, and collaborated with the design team for better UX.
          </p>
        </div>
      </div>
    </section>
  );
}
