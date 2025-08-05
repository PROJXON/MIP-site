import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import { useState, useEffect } from "react";

export const Header: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100); 

    return () => clearTimeout(timer);
  }, []);
  return (
    <header className="fixed top-0 z-50 py-4 w-full border-b border-gray-800 bg-black px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
        <Link to="/" className="flex items-center">
          <div 
            className={`
              flex items-center transform transition-all duration-700 ease-out
              ${isLoaded 
                ? 'translate-y-0 opacity-100' 
                : '-translate-y-20 opacity-0'
              }
            `}
          >
            <img
              src="/projxon-mip-logo.png"
              alt="PROJXON Logo"
              className="h-10 w-10 mr-2"
            />
            <span className="text-2xl md:text-3xl text-yellow-500 font-bold tracking-wide">
              PROJXON
            </span>
          </div>
        </Link>
        <Navigation />
      </div>
    </header>
  );
};