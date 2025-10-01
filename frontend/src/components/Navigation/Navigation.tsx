import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    {
      text: 'About',
      to: '/about',
    },
    {
      text: 'Candidates',
      to: '/candidates',
    },
    {
      text: 'Universities',
      to: '/universities',
    },
    {
      text: 'Companies',
      to: '/companies',
    },
    {
      text: 'Contact',
      to: '/contact',
    },
  ];

  return (
    <nav className="relative">
      {/* Hamburger Icon for mobile */}
      <button
        className="md:hidden absolute right-4 top-2 z-20"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-7 h-7 hover:text-yellow-400 transition"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {/* Navigation Links */}
      <ul
        className={`flex-col md:flex-row md:flex items-end md:items-center space-y-2 md:space-y-0 space-x-0 md:space-x-8 text-sm md:text-base font-medium absolute md:static top-12 w-full md:w-auto z-10 transition-all ${
          open ? 'flex left-0 bg-black' : 'hidden md:flex left-0'
        }`}
      >
        {navLinks.map((link, i) => (
          <li key={i}>
            <Link
              to={link.to}
              className={`hover:text-yellow-400 transition${window.location.pathname === link.to ? ' text-yellow-400' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
