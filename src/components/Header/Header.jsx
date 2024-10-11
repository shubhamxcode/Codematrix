import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { BiLogoCodepen } from "react-icons/bi";
import { toggletheme } from '../../Feature/addtofav/Addtofav';
function Header() {
  const favoriteCount = useSelector((state) => state.favorites.items.length);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.Theme.theme);
  return (
    <header className={`pt-4  ${theme === 'dark' ? 'bg-black' : 'bg-slate-400'}`}>
      <nav>
        <ul className='flex justify-between flex-col sm:flex-row'>
          <li>
            <BiLogoCodepen className='sm:text-[34px] md:text-[40px] lg:text-[52px] text-[28px]' />
          </li>
          <div className='flex space-x-8 text-[16px] sm:text-[20px] md:text-[27px]'>
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
            <div>
              <button
                onClick={() => dispatch(toggletheme())}
                className='md:text-lg sm:px-4 text-sm lg:text-xl px-4 rounded-xl'
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </div>
            <Link to="#">
              <button className='hover:bg-green-600 md:text-lg sm:px-4 text-sm lg:text-xl px-4 rounded-xl'>Login</button>
            </Link>
            <Link to="/addedcards">
              <button className='md:text-lg lg:text-xl text-sm text-nowrap sm:px-2 px-4 rounded-xl hover:bg-green-600'>
                &hearts; Your Fav ({favoriteCount})
              </button>
            </Link>
          </li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
