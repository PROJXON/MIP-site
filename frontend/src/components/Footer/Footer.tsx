import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800 bg-black px-4 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Logo & Legal */}
        <div className="flex flex-col items-center md:items-start">
          {/* Logo Row */}
          <div className="flex items-center mb-2">
            {/* Left: PROJXON Logo */}
            <div className="flex items-center mr-4">
              <img
                src="/assets/images/projxon-mip-logo.png"
                alt="PROJXON Logo"
                className="h-20 w-20 mr-2"
              />
              <span className="text-sm tracking-wide flex items-center">
                <span className="text-yellow-500 font-bold">Powered by&nbsp;</span>
                <span style={{ color: 'white', fontFamily: 'Geologica, sans-serif' }}>
                  PROJXON
                </span>
              </span>
            </div>

            {/* Right: Veteran Owned Business */}
            <img
              src="/assets/images/veteranOwnedBusiness.png"
              alt="Veteran Owned Business"
              className="h-32 w-32"
            />
          </div>

          <div className="mt-1 text-gray-500 text-xs">
            &copy; 2025 PROJXON. All rights reserved.
          </div>
        </div>

        {/* Right: Social & Contact */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex flex-row gap-4 items-center mb-1">
            <a
              href="https://www.linkedin.com/company/momentum-internship-program/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-80 transition"
            >
              <img
                src="/assets/images/linkedin.png"
                alt="LinkedIn"
                className="w-7 h-7"
              />
            </a>

            <a
              href="/contact"
              aria-label="Email"
              className="hover:opacity-80 transition"
            >
              <img
                src="/assets/images/email.png"
                alt="Email"
                className="w-7 h-7"
              />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
