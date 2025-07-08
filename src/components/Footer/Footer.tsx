import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800 bg-black px-4 py-8">
      <div className="max-w-4xl mx-auto text-center text-gray-400">
        <p className="mb-4">
          © {new Date().getFullYear()} PROJXON. All rights reserved.
        </p>
        {/* Add social links here */}
        <p className="text-sm">
          Designed with ❤️ by PROJXON Team

        </p>
      </div>
    </footer>
  );
}
