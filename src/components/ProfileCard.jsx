import React, { useState } from 'react';
import { User, Github, Mail, Linkedin, Phone } from 'lucide-react';

export default function ProfileCard() {
  const [imgError, setImgError] = useState(false);

  return (
    <aside className="relative bg-white/80 dark:bg-white/90 text-black rounded-2xl p-6 w-full md:max-w-xs sticky top-24 self-start shadow-xl backdrop-blur-sm border border-orange-300 dark:border-orange-400 overflow-hidden">
      
      {/* Top-right orange curve */}
      <div className="absolute top-0 right-0 w-24 h-24 opacity-20 pointer-events-none z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M0,100 C40,60 60,40 100,0" fill="none" stroke="#E0B597FF" strokeWidth="2" />
        </svg>
      </div>

      {/* Top-left orange SVG */}
      <div className="absolute top-[-30px] left-[-30px] w-[270px] h-[166px] z-0 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="270" height="166" fill="none">
          <path d="M 20.39 33.95 L 24.482 33.83 C 24.482 33.83 19.778 31.198 20.39 33.95 L 21.878 42.543 C 21.249 39.703 20.752 36.836 20.39 33.95 Z M 24.194 51.046 L 28.148 50.296 C 29.025 53.022 30.021 55.705 31.134 58.339 L 27.567 59.501 C 26.354 56.686 25.225 53.845 24.194 51.046 Z" fill="rgb(255,122,0)" />
        </svg>
      </div>

      {/* Bottom-right flame-like SVG */}
      <div className="absolute bottom-[-30px] right-[-30px] w-[194px] h-[100px] z-0 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="194" height="100" fill="none">
          <path d="M 0 34.544 L 3.22 33.201 C 4.186 35.732 5.256 38.221 6.429 40.663 L 3.329 42.293 C 2.113 39.757 1.002 37.172 0 34.544 Z M 7.294 49.71 L 10.246 47.806 C 11.613 50.127 13.073 52.392 14.622 54.596 L 11.828 56.748 C 10.223 54.464 8.711 52.116 7.294 49.71 Z" fill="rgb(255,122,0)" />
        </svg>
      </div>

      {/* Profile Image or Icon */}
      {imgError ? (
        <div className="w-full h-48 flex items-center justify-center bg-gray-200 rounded-xl mb-4 z-10 relative">
          <User className="w-12 h-12 text-gray-500" />
        </div>
      ) : (
        <img
          src="/assets/sagar-teotia.png"
          alt="Sagar Teotia"
          onError={() => setImgError(true)}
          className="rounded-xl w-full object-cover mb-4 shadow-md hover:shadow-orange-300 transition-shadow duration-300 z-10 relative"
        />
      )}

      {/* Name */}
      <h2 className="text-2xl font-extrabold tracking-wide mb-1 z-10 relative">Sagar Teotia</h2>

      {/* Role */}
      <p className="text-sm font-medium text-orange-600 dark:text-orange-700 mb-3 z-10 relative">
        Full Stack Developer | XR Engineer
      </p>

      {/* Short Bio */}
      <p className="text-sm text-gray-700 dark:text-gray-800 leading-relaxed z-10 relative">
        AR/VR enthusiast & software craftsman building impactful, scalable, and immersive digital solutions that bridge tech and imagination.
      </p>

      {/* Divider */}
      <div className="w-full border-t border-dashed border-orange-400 mt-6 mb-4 opacity-60 z-10 relative"></div>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-6 z-10 relative">
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
