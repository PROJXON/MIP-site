import React from "react";
import { Link } from "react-router-dom";

export const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="flex space-x-4 md:space-x-8 text-sm md:text-base font-medium">
        <li>
          <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
        </li>
        <li>
          <Link to="/companies" className="hover:text-yellow-400 transition">For Companies</Link>
        </li>
        <li>
          <Link to="/universities" className="hover:text-yellow-400 transition">For Universities</Link>
        </li>
        <li>
          <Link to="/interns" className="hover:text-yellow-400 transition">For Interns</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}