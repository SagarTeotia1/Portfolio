import React from 'react';

export default function Awards() {
  return (
    <section id="awards">
      <h2 className="text-3xl font-bold mb-6">Achievements & Awards</h2>

      <ul className="list-disc list-inside space-y-3 text-gray-400 text-sm">
        <li>
          🏆 <strong>Winner</strong> – Smart India Hackathon (SIH) 2023 for developing a defense training system
        </li>
        <li>
          🥇 <strong>Best All-Freshers Team</strong> – BitBox 4.0 Hackathon by GDSC JIIT
        </li>
        <li>
          🎖️ <strong>Finalist</strong> – Solve for Tomorrow Challenge 2024 by Samsung
        </li>
        <li>
          🚀 <strong>2nd Place</strong> – Startup Pitchathon @ MAIT organized by Startup Sphere
        </li>
      </ul>
    </section>
  );
}
