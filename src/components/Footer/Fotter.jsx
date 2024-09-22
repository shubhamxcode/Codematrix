import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../images/logomatrix.jpg';

function Fotter() {
  return (
    <footer className='py-16 px-6'>
      <hr className='border-gray-700'/>
      <div className='flex justify-between items-center'>
        <div>
          {/* <img src="" alt="Logo" className='w-64' /> */}
        </div>
        <div className='space-y-4'>
          <h2 className='text-white font-bold'>RESOURCES</h2>
          <ul className='text-white space-y-4 cursor-pointer'>
            <li className='hover:underline'>Home</li>
            <li className='hover:underline'>About</li>
          </ul>
        </div>
        <div className='space-y-4'>
          <h2 className='text-white font-bold'>FOLLOW US</h2>
          <ul className='text-white space-y-4 cursor-pointer'>
            <li className='hover:underline'>LinkedIn</li>
            <li className='hover:underline'>GitHub</li>
          </ul>
        </div>
        <div className='space-y-4'>
          <h2 className='text-white font-bold'>LEGAL</h2>
          <ul className='text-white space-y-4 cursor-pointer'>
            <li className='hover:underline'>Privacy Policy</li>
            <li className='hover:underline'>Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <hr className='border-gray-700 mt-8'/>
      <div className='flex justify-between mt-4'>
        <h2 className='text-white'>©2024 Shubham Varshney. All Rights Reserved.</h2>
        <div className='text-white gap-7 text-2xl flex'>
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

export default Fotter;
