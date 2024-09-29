import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../constants/images';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`h-[70px] lg:h-[100px] text-[#868686] dark:bg-darkBgColor dark:text-[#B0B0B0] p-4 flex justify-between items-center 
        ${isDarkMode ? 'shadow-white mb-2' : 'shadow-md mb-2'}`}
      role="banner"
    >
      <div className='flex gap-4 items-center ml-5'>
        <img src={images.gdgLogo} alt="GDG Logo" className='w-[75px]' />
        <h1 className="text-2xl cursor-default">GDG RCOEM</h1>
      </div>
      
      {/* Burger Menu Icon */}
      <button 
        className="lg:hidden flex items-center" 
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <svg 
          className={`w-8 h-8 ${isOpen ? 'transform rotate-90' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Navigation Links */}
      <nav 
        className={`mr-5 gap-4 flex-col justify-center items-center lg:flex lg:flex-row lg:items-center lg:static lg:shadow-none absolute top-16 left-0 w-full lg:w-auto xl:gap-16 lg:gap-8 bg-white dark:bg-darkBgColor shadow-md p-4 transition-all duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'} lg:flex`}
        role="navigation"
      >
        <Link className="hover:text-black dark:hover:text-white text-2xl text-center leading-8 flex-1" to="/">Home</Link>
        <Link className="hover:text-black dark:hover:text-white text-2xl text-center leading-8 flex-1" to="/events">Events</Link>
        <Link className="hover:text-black dark:hover:text-white text-2xl text-center leading-8 flex-1" to="/team">Team</Link>
        <Link className="hover:text-black dark:hover:text-white text-2xl text-center leading-8 flex-1" to="/alumni">Alumni</Link>
        <Link className="hover:text-black dark:hover:text-white text-2xl text-center leading-8 flex-1" to="/contact">Contact</Link>
        <button 
          onClick={toggleTheme}
          className={`w-16 h-8 rounded-full flex items-center justify-start p-1 transition-colors bg-[#7A7A7A]`}
          aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        >
          <span className={`w-6 h-6 rounded-full bg-white dark:bg-darkBgColor transition-transform ${isDarkMode ? 'translate-x-8' : 'translate-x-0'}`}>
            {isDarkMode ? '🌙' : '☀️'}
          </span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
