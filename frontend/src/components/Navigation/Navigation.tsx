import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';

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
      <div className="md:hidden absolute -right-7 bottom-0 z-20">
        <Hamburger
          toggled={open}
          toggle={setOpen}
          size={24}
          rounded
          label="Toggle menu"
          color="#facc15"
        />
      </div>
      {/* Navigation Links */}
      <ul
        className={`flex-col md:flex-row md:flex items-end md:items-center space-y-2 md:space-y-0 space-x-0 md:space-x-8 text-sm md:text-base font-medium absolute md:static w-full md:w-auto z-10 transition-all w-auto p-2 -top-2 -right-4 ${
          open ? 'flex bg-zinc-500/30 rounded-xl' : 'hidden md:flex'
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
