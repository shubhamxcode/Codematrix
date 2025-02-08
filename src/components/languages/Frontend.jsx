import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Frontend() {
  const [theme, setTheme] = useState('light');

  const cards = [
    {
      id: 1,
      title: "HTML",
      description: "The complete guide for HTML",
      to: "/record",
      image: "path/to/html-image.png",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 2,
      title: "CSS",
      description: "The complete guide for CSS",
      to: "/css",
      image: "path/to/css-image.png",
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 3,
      title: "TAILWIND",
      description: "The complete guide for TAILWIND",
      to: "/tailwind",
      image: "path/to/tailwind-image.png",
      color: "from-cyan-500 to-cyan-700"
    },
    {
      id: 4,
      title: "JAVASCRIPT",
      description: "The complete guide for JAVASCRIPT",
      to: "/javascript",
      image: "path/to/javascript-image.png",
      color: "from-yellow-500 to-yellow-700"
    },
    {
      id: 5,
      title: "REACT",
      description: "The complete guide for REACT",
      to: "/react",
      image: "path/to/react-image.png",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const handleThemeToggle = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`min-h-screen py-16 px-6 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      {/* Theme Toggle Button */}
      <button
        onClick={handleThemeToggle}
        className={`fixed top-6 right-6 p-3 rounded-full shadow-lg transition-all duration-300 ${
          theme === 'dark' 
            ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </button>

      {/* Title Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className={`text-5xl font-bold mb-6 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Frontend Development Path
        </h1>
        <p className={`text-xl ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Master the essential technologies of modern web development
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <Link
            to={card.to}
            key={card.id}
            className={`group relative overflow-hidden rounded-xl ${
              theme === 'dark'
                ? 'bg-gray-900 hover:bg-gray-800'
                : 'bg-gray-50 hover:bg-gray-100'
            } p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
          >
            {/* Background Gradient */}
            <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${card.color}`} />
            
            {/* Card Content */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-28 h-28 mb-6 relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {card.title}
              </h2>
              
              <p className={`text-center text-lg mb-6 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {card.description}
              </p>

              {/* Learn More Button */}
              <div className={`inline-flex items-center font-medium ${
                theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
              }`}>
                <span className="mr-2">Learn More</span>
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Frontend;