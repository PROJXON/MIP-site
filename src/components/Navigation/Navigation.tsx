import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown when clicking outside both the hamburger and the menu
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuContainerRef.current &&
        !menuContainerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Helper function for nav link classes
  const linkClass = (path: string) =>
    `hover:text-yellow-500 transition ${
      location.pathname === path ? "text-yellow-500" : ""
    }`;

  return (
<nav className="relative right-4">
     <div className="flex items-center w-full max-w-screen-xl mx-auto">
        {/* --- Start mobile menu container --- */}
        <div ref={menuContainerRef} className="md:hidden">
          <button
            aria-label="Toggle navigation menu"
            className="p-2 focus:outline-none"
            type="button"
          >
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              color="#ffd700"
              size={25}
              duration={0.1}
              label="Toggle menu"
            />
          </button>
          {/* Mobile dropdown navigation */}
          {isOpen && (
            <ul
              className="absolute top-full right-4 min-w-[12rem] bg-black text-white flex flex-col space-y-2 p-4 md:hidden z-50 shadow-lg transition-all duration-300"
            >
              <li>
                <Link
                  to="/about"
                  className={linkClass("/about")}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/companies"
                  className={linkClass("/companies")}
                  onClick={() => setIsOpen(false)}
                >
                  For Companies
                </Link>
              </li>
              <li>
                <Link
                  to="/universities"
                  className={linkClass("/universities")}
                  onClick={() => setIsOpen(false)}
                >
                  For Universities
                </Link>
              </li>
              <li>
                <Link
                  to="/interns"
                  className={linkClass("/interns")}
                  onClick={() => setIsOpen(false)}
                >
                  For Interns
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={linkClass("/contact")}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </div>
        {/* Desktop navigation */}
        <ul className="hidden md:flex space-x-4 md:space-x-8 text-sm md:text-base font-medium  p-4 ">
          <li>
            <Link to="/about" className={linkClass("/about")}>
              About
            </Link>
          </li>
          <li>
            <Link to="/companies" className={linkClass("/companies")}>
              For Companies
            </Link>
          </li>
          <li>
            <Link to="/universities" className={linkClass("/universities")}>
              For Universities
            </Link>
          </li>
          <li>
            <Link to="/interns" className={linkClass("/interns")}>
              For Interns
            </Link>
          </li>
          <li>
            <Link to="/contact" className={linkClass("/contact")}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
