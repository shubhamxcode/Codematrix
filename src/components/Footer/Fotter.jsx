import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BiLogoCodepen } from "react-icons/bi";

function Footer() {
  const theme = useSelector((state) => state.Theme.theme);
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const hoverColor = theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600';
  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-white';

  return (
    <footer className={`py-8 md:py-16 px-4 md:px-6 ${bgColor} ${textColor}`}>
      <hr className='border-gray-700 opacity-50' />
      <div className='flex flex-col md:flex-row justify-between items-center text-center md:text-left max-w-7xl mx-auto'>
        <div className='mb-4 md:mb-0 transform hover:scale-110 transition-transform duration-300 group'>
          <BiLogoCodepen className={`text-6xl md:text-7xl group-hover:text-blue-500 transition-colors duration-300`} />
        </div>
        <div className='space-y-3 mb-6 md:mb-0'>
          <h2 className='font-bold text-lg md:text-xl text-blue-400'>RESOURCES</h2>
          <ul className='space-y-2 cursor-pointer'>
            <li className={`transition-all duration-300 transform hover:translate-x-2 flex items-center gap-2 ${hoverColor}`}>
              <span className='h-[1px] w-4 bg-blue-400 transition-all duration-300'></span>
              Home
            </li>
            <li className={`transition-all duration-300 transform hover:translate-x-2 flex items-center gap-2 ${hoverColor}`}>
              <span className='h-[1px] w-4 bg-blue-400 transition-all duration-300'></span>
              About
            </li>
          </ul>
        </div>
        <div className='space-y-3 mb-6 md:mb-0'>
          <h2 className='font-bold text-lg md:text-xl text-blue-400'>FOLLOW US</h2>
          <ul className='space-y-2 cursor-pointer'>
            <li className={`transition-all duration-300 transform hover:translate-x-2 flex items-center gap-2 ${hoverColor}`}>
              <span className='h-[1px] w-4 bg-blue-400 transition-all duration-300'></span>
              LinkedIn
            </li>
            <li className={`transition-all duration-300 transform hover:translate-x-2 flex items-center gap-2 ${hoverColor}`}>
              <span className='h-[1px] w-4 bg-blue-400 transition-all duration-300'></span>
              GitHub
            </li>
          </ul>
        </div>
        <div className='space-y-3'>
          <h2 className='font-bold text-lg md:text-xl text-blue-400'>LEGAL</h2>
          <ul className='space-y-2 cursor-pointer'>
            <li className={`transition-all duration-300 transform hover:translate-x-2 flex items-center gap-2 ${hoverColor}`}>
              <span className='h-[1px] w-4 bg-blue-400 transition-all duration-300'></span>
              Privacy Policy
            </li>
            <li className={`transition-all duration-300 transform hover:translate-x-2 flex items-center gap-2 ${hoverColor}`}>
              <span className='h-[1px] w-4 bg-blue-400 transition-all duration-300'></span>
              Terms & Conditions
            </li>
          </ul>
        </div>
      </div>
      <hr className='border-gray-700 opacity-50 mt-8' />
      <div className='flex flex-col md:flex-row justify-between items-center mt-6 max-w-7xl mx-auto'>
        <h2 className={`text-center md:text-left text-sm md:text-base ${textColor}`}>
          ©2024 <span className='text-blue-400'>Shubham Varshney</span>. All Rights Reserved.
        </h2>
        <div className='flex justify-center md:justify-end gap-6 text-2xl mt-4 md:mt-0'>
          <Link 
            to="https://www.instagram.com/shubhamvarshney61/" 
            className={`transform hover:scale-125 hover:-translate-y-1 transition-all duration-300 ${hoverColor}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </Link>
          <Link 
            to="https://www.linkedin.com/in/shubham-varshney-1b49b4294/" 
            className={`transform hover:scale-125 hover:-translate-y-1 transition-all duration-300 ${hoverColor}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLinkedin />
          </Link>
          <Link 
            to="https://github.com/shubhamxcode" 
            className={`transform hover:scale-125 hover:-translate-y-1 transition-all duration-300 ${hoverColor}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Link>
          <Link 
            to="https://x.com/shubhamXcode" 
            className={`transform hover:scale-125 hover:-translate-y-1 transition-all duration-300 ${hoverColor}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiTwitter />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
