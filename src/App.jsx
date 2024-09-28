import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './index.css'; // Import the Tailwind CSS file

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Effect to apply dark mode class to the body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <div className="">
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
            {/* Add more routes for other pages like Events, Team, etc. */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
