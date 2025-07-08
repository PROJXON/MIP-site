import React from 'react';
import {Navigation} from '../Navigation/Navigation';


export const Header: React.FC = () => {
    return(
    <header className="py-4 border-b border-gray-800 bg-black px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            {/* Replace the src with your logo path if available */}
            <img
              src="/projxon-mip-logo.png"
              alt="Yellow and black PROJXON logo with stylized X, modern and bold, set against a dark background, conveying innovation and professionalism"
              className="h-40 w-40 mr-2"
            />
            {/* <span className="text-2xl md:text-3xl text-yellow-500 font-bold tracking-wide">PROJXON</span> */}
          </div>
        
          <Navigation/>
         
          {/* Navigation */}
          </div>
        
     </header>
    );
}