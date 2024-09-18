// Header
import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../../images/logomatrix.jpg';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const favoriteCount = useSelector((state) => state.favorites.items.length);

  return (
    <header className=''>
      <nav className='text-white'>
          <ul>
          <div className='flex items-center justify-between'>
            <li>
              <img src={logo} alt="Matrix Logo" className='w-40 md:w-40 sm:w-20 cursor-pointer' />
            </li>
            <div className='flex space-x-4 text-[16px] sm:text-[18px] md:text-[22px]'>
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
            </div>
            <li className='flex gap-2'>
            <Link to="#" className=''>
              <button className='sm:px-4 px-4 border border-white sm:border-white rounded-xl '>Login</button>
            </Link>
            <Link to="/addedcards">
              <button className='text-nowrap sm:px-2 px-4 border border-white rounded-xl  hover:bg-green-600 '>&hearts; Your Fav ({favoriteCount})</button>
            </Link>
          </li>
          </div>
          </ul>
      </nav>
    </header>
  );
}

export default Header;
