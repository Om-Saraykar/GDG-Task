import React from 'react';
import { Link } from 'react-router-dom';
import images from '../constants/images';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <header 
    className={`h-[100px] bg-white text-[#868686] dark:bg-darkBgColor dark:text-[#B0B0B0] p-4 flex justify-between items-center 
      ${isDarkMode ? 'shadow-white mb-2' : 'shadow-md mb-2'}`}
    >
      <div className='flex gap-4 items-center ml-5'>
        <img src={images.gdgLogo} alt="GDG Logo" className='w-[75px]' />
        <div className="text-2xl cursor-default">GDG RCOEM</div>
      </div>
      <nav className="mr-5 flex items-center gap-12">
        <Link className="hover:text-black dark:hover:text-white text-2xl" to="/">Home</Link>
        <Link className="hover:text-black dark:hover:text-white text-2xl" to="/events">Events</Link>
        <Link className="hover:text-black dark:hover:text-white text-2xl" to="/team">Team</Link>
        <Link className="hover:text-black dark:hover:text-white text-2xl" to="/alumni">Alumni</Link>
        <Link className="hover:text-black dark:hover:text-white text-2xl" to="/contact">Contact</Link>
        <button 
          onClick={toggleTheme}
          className={`w-16 h-8 rounded-full flex items-center justify-start p-1 transition-colors bg-[#7A7A7A]`}
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
