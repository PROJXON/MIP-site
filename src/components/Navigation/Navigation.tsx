import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import "./Navigation.css"; 

const navItems = [
  { to: "/about", label: "About" },
  { to: "/companies", label: "For Companies" },
  { to: "/universities", label: "For Universities" },
  { to: "/interns", label: "For Interns" },
  { to: "/contact", label: "Contact" },
];

const NavLinkItem: React.FC<{
  to: string;
  label: string;
  className?: string;
  onClick?: () => void;
}> = ({ to, label, className = "", onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      className={`navigation-link${isActive ? " active" : ""} ${className}`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (menuContainerRef.current && !menuContainerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="navigation-nav">
      <div className="navigation-container">
        <div className="navigation-flex">
          <div ref={menuContainerRef} className="navigation-mobile">
            <button
              aria-label="Toggle navigation menu"
              className="navigation-hamburger-btn"
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
            {isOpen && (
              <ul className="navigation-dropdown">
                {navItems.map(({ to, label }) => (
                  <li key={to}>
                    <NavLinkItem to={to} label={label} onClick={() => setIsOpen(false)} />
                  </li>
                ))}
              </ul>
            )}
          </div>
          <ul className="navigation-desktop navigation-desktop-list">
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <NavLinkItem to={to} label={label} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};