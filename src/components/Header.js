import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white">
      <div className="max-w-5xl mx-auto px-4 py-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Name</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;