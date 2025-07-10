import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 py-4 border-b border-gray-800 bg-black px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo links to main */}
        <Link to="/" className="flex items-center">
          <img
            src="/projxon-mip-logo.png"
            alt="PROJXON Logo"
            className="h-10 w-10 mr-2"
          />
          <span className="text-2xl md:text-3xl text-yellow-500 font-bold tracking-wide">PROJXON</span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
};