import React, { useState } from 'react';
import { User, Github, Mail, Linkedin, Phone, Calendar } from 'lucide-react';

export default function ProfileCard() {
  const [imgError, setImgError] = useState(false);

  return (
    <aside className="relative bg-white/80 dark:bg-white/90 text-black rounded-2xl p-6 w-full max-w-full sm:max-w-md lg:max-w-xs sticky top-24 self-start shadow-xl backdrop-blur-sm border border-orange-300 dark:border-orange-400 overflow-hidden">

      {/* Image or Placeholder */}
      {imgError ? (
        <div className="w-full aspect-video flex items-center justify-center bg-gray-200 rounded-xl mb-4 z-10 relative">
          <User className="w-12 h-12 text-gray-500" />
        </div>
      ) : (
        <img
          src="/assets/image.png"
          alt="Sagar Teotia"
          onError={() => setImgError(true)}
          className="rounded-xl w-full aspect-video object-cover mb-4 shadow-md hover:shadow-orange-300 transition-shadow duration-300 z-10 relative"
        />
      )}

      {/* Name */}
      <h2 className="text-xl sm:text-2xl font-extrabold tracking-wide mb-1 z-10 relative text-center">
        Sagar Teotia
      </h2>

      {/* Role */}
      <p className="text-sm font-medium text-orange-600 dark:text-orange-700 mb-3 z-10 relative text-center">
        Full Stack Developer | XR Engineer
      </p>

      {/* Short Bio */}
      <p className="text-sm text-gray-700 dark:text-gray-800 leading-relaxed z-10 relative">
        AR/VR enthusiast & software craftsman building impactful, scalable, and immersive digital solutions that bridge tech and imagination.
      </p>

      {/* Divider */}
      <div className="w-full border-t border-dashed border-orange-400 mt-6 mb-4 opacity-60 z-10 relative"></div>

      {/* Book Meet Button */}
      <div className="flex justify-center mb-4">
        <a
          href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1vJZpL4yiN6JkNvuPACsGupuR2UTSSn2jdG5BcVbiIKGS_SD4Kkxe-z0pndzK0-nGuhWoAsQhQ?gv=true"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md transition-all duration-300 z-10 relative"
          style={{ color: 'white' }} // Enforce white text
        >
          <Calendar className="w-5 h-5 text-white" /> {/* White icon */}
          Schedule a Meeting
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-4 z-10 relative">
        <a
          href="https://github.com/SagarTeotia1"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-orange-100 hover:bg-orange-200 transition"
        >
          <Github className="w-5 h-5 text-orange-600" />
        </a>
        <a
          href="mailto:sagar1teotia@gmail.com"
          className="p-2 rounded-full bg-orange-100 hover:bg-orange-200 transition"
        >
          <Mail className="w-5 h-5 text-orange-600" />
        </a>
        <a
          href="https://linkedin.com/in/sagar1teotia/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-orange-100 hover:bg-orange-200 transition"
        >
          <Linkedin className="w-5 h-5 text-orange-600" />
        </a>
        <a
          href="tel:+919319811170"
          className="p-2 rounded-full bg-orange-100 hover:bg-orange-200 transition"
        >
          <Phone className="w-5 h-5 text-orange-600" />
        </a>
      </div>
    </aside>
  );
}
