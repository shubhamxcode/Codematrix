import React from 'react';
import { Link } from 'react-router-dom';
import Chatai from '../../Chatbot'
import { useSelector } from 'react-redux';

function AI() {
  const theme=useSelector((state)=>state.Theme.theme)
  return (
    <div className={`space-y-10  p-6 border border-gray-700 rounded-lg shadow-lg ${theme==='dark'? ' bg-slate-800':'bg-white'}`}>
      <div className='flex justify-center'>
        <h1 className={`text-5xl font-bold hover:underline text-center text-white ${theme==='dark'?'text-white':'text-black'}`}>
          Level Up Your Knowledge with Our Learning Chatbot
        </h1>
      </div>
      <Link to="chatai" className=' flex flex-col lg:flex-row items-center justify-around gap-12'>
        <div className='border border-gray-600 rounded-lg text-center py-20 px-16 hover:bg-green-700 transition duration-300'>
          <h1 className='text-green-500 text-4xl font-semibold mb-4'>Chatbot</h1>
          <p className='text-gray-400 text-2xl'>Unlock Better Learning</p>
        </div>
        <div className='max-w-4xl text-center'>
          <h1 className='text-2xl lg:text-3xl font-medium text-gray-500'>
            Boost your skills with our chatbot! From coding to other domains, get instant guidance, interactive learning, and personalized tips to grow your expertise at your own pace.
          </h1>
        </div>
      </Link>
    </div>
  );
}

export default AI;
