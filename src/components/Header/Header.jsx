import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { BiLogoCodepen } from "react-icons/bi";
import { toggletheme } from '../../Feature/addtofav/Addtofav';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const favoriteCount = useSelector((state) => state.favorites.items.length);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.Theme.theme);

  return (
    <header className={`fixed w-full top-0 z-50 ${theme === 'dark' 
      ? 'bg-gray-900/95 border-b border-gray-800' 
      : 'bg-white/95 border-b border-gray-200'} 
      backdrop-blur-md shadow-md`}>
      <nav className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <li className="flex items-center gap-2">
            <BiLogoCodepen className={`text-3xl md:text-4xl ${
              theme === 'dark' ? 'text-green-400' : 'text-green-600'
            } transition-colors duration-200`} />
          </li>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <li>
              <NavLink to="/" className={({ isActive }) => 
                `text-lg font-medium transition-colors duration-200 hover:text-green-500 ${
                  isActive 
                    ? 'text-green-500' 
                    : theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => 
                `text-lg font-medium transition-colors duration-200 hover:text-green-500 ${
                  isActive 
                    ? 'text-green-500' 
                    : theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => 
                `text-lg font-medium transition-colors duration-200 hover:text-green-500 ${
                  isActive 
                    ? 'text-green-500' 
                    : theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                Contact us
              </NavLink>
            </li>
            <li>
              <NavLink to="/shipyard" className={({ isActive }) => 
                `text-lg font-medium transition-colors duration-200 hover:text-green-500 ${
                  isActive 
                    ? 'text-green-500' 
                    : theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                Shipyard
              </NavLink>
            </li>
          </div>

          {/* Right Section */}
          <li className="flex items-center gap-3">
            <button
              onClick={() => dispatch(toggletheme())}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                theme === 'dark' 
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
              }`}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            <Link to="#">
              <button className="hidden md:block px-4 py-2 bg-green-500 text-white rounded-lg font-medium 
                               transition-all duration-200 hover:bg-green-600 hover:shadow-lg">
                Login
              </button>
            </Link>

            <Link to="/addedcards" className="hidden md:block">
              <button className={`flex items-center gap-2 px-4 py-2 rounded-lg 
                                transition-all duration-200 ${
                theme === 'dark'
                  ? 'bg-gray-800 hover:bg-gray-700 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}>
                ❤️ {favoriteCount}
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-800/10 hover:bg-gray-800/20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className={`py-4 space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            <NavLink 
              to="/" 
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `
                block px-4 py-2 rounded-lg transition-colors duration-200
                ${isActive 
                  ? 'bg-green-500 text-white' 
                  : theme === 'dark'
                    ? 'hover:bg-gray-800'
                    : 'hover:bg-gray-100'
                }
              `}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about"
              onClick={() => setIsOpen(false)} 
              className={({ isActive }) => `
                block px-4 py-2 rounded-lg transition-colors duration-200
                ${isActive 
                  ? 'bg-green-500 text-white' 
                  : theme === 'dark'
                    ? 'hover:bg-gray-800'
                    : 'hover:bg-gray-100'
                }
              `}
            >
              About us
            </NavLink>
            <NavLink 
              to="/contact"
              onClick={() => setIsOpen(false)} 
              className={({ isActive }) => `
                block px-4 py-2 rounded-lg transition-colors duration-200
                ${isActive 
                  ? 'bg-green-500 text-white' 
                  : theme === 'dark'
                    ? 'hover:bg-gray-800'
                    : 'hover:bg-gray-100'
                }
              `}
            >
              Contact us
            </NavLink>
            <NavLink 
              to="/shipyard"
              onClick={() => setIsOpen(false)} 
              className={({ isActive }) => `
                block px-4 py-2 rounded-lg transition-colors duration-200
                ${isActive 
                  ? 'bg-green-500 text-white' 
                  : theme === 'dark'
                    ? 'hover:bg-gray-800'
                    : 'hover:bg-gray-100'
                }
              `}
            >
              Shipyard
            </NavLink>

            {/* Mobile Menu Action Buttons */}
            <div className="pt-2 space-y-2">
              <Link to="/addedcards" onClick={() => setIsOpen(false)}>
                <button className={`w-full px-4 py-2 rounded-lg transition-colors duration-200 ${
                  theme === 'dark'
                    ? 'bg-gray-800 hover:bg-gray-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}>
                  ❤️ Favorites ({favoriteCount})
                </button>
              </Link>
              
              <Link to="#" onClick={() => setIsOpen(false)}>
                <button className="w-full px-4 py-2 bg-green-500 text-white rounded-lg 
                                 transition-colors duration-200 hover:bg-green-600">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;