import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800 bg-black px-4 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-8">
        {/* Left: Logo & Legal & Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center mb-2">
            <img
              src="/projxon-mip-logo.png"
              alt="PROJXON Logo"
              className="h-8 w-8 mr-2"
            />
            <span className="text-xl text-yellow-500 font-bold tracking-wide">PROJXON</span>
          </div>
          <div className="flex space-x-4 text-gray-400 text-sm mb-1">
            <a href="/privacy" className="hover:text-yellow-400">Privacy Policy</a>
            <a href="/terms" className="hover:text-yellow-400">Terms of Service</a>
          </div>
          <div className="mt-1 text-gray-500 text-xs">&copy; 2025 PROJXON. All rights reserved.</div>
        </div>
        {/* Right: Social & Contact */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex flex-row gap-4 items-center md:items-end space-y-3 mb-1">
            <a
              href="https://www.linkedin.com/company/momentum-internship-program/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-80 transition"
            >
              <img src="/linkedin.png" alt="LinkedIn" className="w-7 h-7" />
            </a>
            <a
              href="mailto:info@projxon.com"
              aria-label="Email"
              className="hover:opacity-80 transition"
            >
              <img src="/email.png" alt="Email" className="w-7 h-7" />
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
