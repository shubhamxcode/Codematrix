// Header.js
import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../../images/logomatrix.jpg';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const favoriteCount = useSelector((state) => state.favorites.items.length);

  return (
    <header className='bg-black text-white'>
      <nav>
        <div className='flex justify-between items-center shadow-2xl '>
          <img src={logo} alt="Matrix Logo" className='sm:w-36 w-24 cursor-pointer' />
          <ul className='flex sm:space-x-12 space-x-6 sm:text-[22px] text-[12px]'>
            <li>
              <NavLink to="/" className={({ isActive }) => `${isActive ? "text-red-700" : "text-gray-700"}`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => `${isActive ? "text-red-700" : "text-gray-700"}`}>
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `${isActive ? "text-red-700" : "text-gray-700"}`}>
                Contact us
              </NavLink>
            </li>
            <li>
              <NavLink to="/shipyard" className={({ isActive }) => `${isActive ? "text-red-700" : "text-gray-700"}`}>
                Shipyard
              </NavLink>
            </li>
          </ul>
          <div className='flex space-x-3'>
            <Link to="#" className='text-white font-bold border hover:bg-green-600 border-white bg-black px-4 rounded-2xl'>
              Login
            </Link>
            <Link to="#" className='text-white font-bold border hover:bg-green-600 border-white bg-black px-4 rounded-2xl'>
              &hearts; Your Fav ({favoriteCount})
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
