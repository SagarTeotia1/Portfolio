import React from 'react';
import { Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-gray-800 bg-transparent">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 md:px-12 lg:px-24 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6 md:gap-0">

          {/* Left Section */}
          <div className="space-y-2">
            <p className="text-sm text-gray-500">
              © {currentYear} Sagar Teotia. All rights reserved.
            </p>
          </div>

          {/* Right Section */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-gray-300">Contact</h4>
            <a
              href="mailto:Support@sagarteotia.in"
              className="inline-flex items-center gap-2 text-sm text-orange-500 hover:text-orange-400 transition"
            >
              <Mail className="w-4 h-4" />
              Support@sagarteotia.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
