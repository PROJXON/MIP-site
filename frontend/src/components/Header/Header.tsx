import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { useState, useEffect } from 'react';
import projxonMipLogo from '/assets/images/projxon-mip-logo.png';

export const Header: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <header className="sticky top-0 z-50 py-4 border-b border-gray-800 bg-black px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div
            className={`
              flex items-center transform transition-all duration-700 ease-out
              ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}
            `}
          >
            <img src={projxonMipLogo} alt="PROJXON Logo" className="h-28 w-28 mr-2" />
          </div>
        </Link>
        <Navigation />
      </div>
    </header>
  );
};
