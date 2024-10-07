import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BiLogoCodepen } from "react-icons/bi";

function Footer() {
  return (
    <footer className='py-8 md:py-16 px-4 md:px-6'>
      <hr className='border-gray-700' />
      <div className='flex flex-col md:flex-row justify-between items-center text-center md:text-left'>
        <div className='mb-4 md:mb-0'>
          <BiLogoCodepen className='text-6xl md:text-7xl' />
        </div>
        <div className='space-y-2 mb-4 md:mb-0'>
          <h2 className='font-bold text-lg md:text-xl'>RESOURCES</h2>
          <ul className='space-y-1 cursor-pointer'>
            <li className='hover:underline'>Home</li>
            <li className='hover:underline'>About</li>
          </ul>
        </div>
        <div className='space-y-2 mb-4 md:mb-0'>
          <h2 className='font-bold text-lg md:text-xl'>FOLLOW US</h2>
          <ul className='space-y-1 cursor-pointer'>
            <li className='hover:underline'>LinkedIn</li>
            <li className='hover:underline'>GitHub</li>
          </ul>
        </div>
        <div className='space-y-2'>
          <h2 className='font-bold text-lg md:text-xl'>LEGAL</h2>
          <ul className='space-y-1 cursor-pointer'>
            <li className='hover:underline'>Privacy Policy</li>
            <li className='hover:underline'>Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <hr className='border-gray-700 mt-8' />
      <div className='flex flex-col md:flex-row justify-between items-center mt-4'>
        <h2 className='text-center md:text-left text-sm md:text-base'>©2024 Shubham Varshney. All Rights Reserved.</h2>
        <div className='flex justify-center md:justify-end gap-5 text-2xl mt-4 md:mt-0'>
          <Link to="https://www.instagram.com/shubhamvarshney61/">
            <FaInstagram />
          </Link>
          <Link to="https://www.linkedin.com/in/shubham-varshney-1b49b4294/">
            <CiLinkedin />
          </Link>
          <Link to="https://github.com/shubhamxcode">
            <FaGithub />
          </Link>
          <Link to="https://x.com/shubhamXcode">
            <CiTwitter />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
