import React from 'react';

export default function ProfileCard() {
  return (
    <aside className="bg-white text-black dark:bg-white dark:text-black rounded-2xl p-6 w-full md:max-w-xs sticky top-24 self-start shadow-lg">
      {/* Profile Image */}
      <img
        src="/profile.jpg" // Replace with your image path or external URL
        alt="Sagar Teotia"
        className="rounded-xl w-full object-cover mb-4"
      />

      {/* Name */}
      <h2 className="text-2xl font-bold">Sagar Teotia</h2>

      {/* Role */}
      <p className="text-sm text-gray-500 mt-1">Software Engineer</p>

      {/* Short Bio */}
      <p className="mt-4 text-sm">
        Full-stack developer & AR/VR enthusiast crafting immersive and scalable solutions for real-world challenges.
      </p>

      {/* Decorative Divider (Optional) */}
      <div className="w-full border-t-2 border-dashed border-orange-500 mt-6"></div>
    </aside>
  );
}
