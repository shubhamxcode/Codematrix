import React from 'react';
import {
  FaLaptopCode,
  FaCode,
  FaHackerrank,
  FaAppStoreIos,
  FaDatabase,
  FaLinux,
  FaCloud,
  FaDev,
} from "react-icons/fa";
import { VscGame } from "react-icons/vsc";
import { BsRobot } from "react-icons/bs";
import { PiSecurityCameraFill } from "react-icons/pi";
import { TbStackFront } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addtofav, removetofav } from "../Feature/addtofav/Addtofav";

const cards = [
  {
  id:1,
  title: "FRONTEND",
  description: "The complete guide for frontend",
  image: <FaCode />,
  to: "/frontend",
  },
  {
  id:2,
  title: "BACKEND",
  description: "The complete guide for Backend",
  image: <FaLaptopCode />,
  to: "/backend",
  },
  {
  id:3,
  title: "HACKING",
  description: "The complete guide for Hacking",
  image: <FaHackerrank />,
  },
  {
  id:4,
  title: "APP DEVELOPMENT",
  description: "The complete guide for App dev",
  image: <FaAppStoreIos />,
  },
  {
  id:5,
  title: "Game dev",
  description: "The complete guide for Game dev",
  image: <VscGame />,
  },
  {
  id:6,
  title: "DATA SCIENCE",
  description: "The complete guide for Data science",
  image: <FaDatabase />,
  },
  {
  id:7,
  title: "ARTIFICIAL INTELLIGENCE",
  description: "The complete guide for AI",
  image: <BsRobot />,
  },
  {
  id:8,
  title: "CYBER SECURITY",
  description: "The complete guide for Cyber security",
  image: <PiSecurityCameraFill />,
  },
  {
  id:9,
  title: "MERN STACK",
  description: "The complete guide for MERN stack",
  image: <TbStackFront />,
  },
  {
  id:10,
  title: "DEV OPS",
  description: "The complete guide for DevOps",
  image: <FaDev />,
  },
  {
  id:11,
  title: "CLOUD COMPUTING",
  description: "The complete guide for Cloud computing",
  image: <FaCloud />,
  },
  {
  id:12,
  title: "LINUX",
  description: "The complete guide for Linux",
  image: <FaLinux />,
  },
 ];

const Carousel = () => {
  const dispatch = useDispatch();
  const favitem = useSelector((state) => state.favorites.items);
  const isfav = (id) => favitem.some((item) => item.id === id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Learning Paths
          </h1>
          <p className="text-gray-400 text-lg">Choose your path to mastery</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.id} className="group">
              <Link
                to={card.to || "we are still working"}
                className="block h-full"
              >
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 h-full 
                             transform transition-all duration-500 
                             group-hover:scale-[1.02] group-hover:-translate-y-2
                             border border-gray-700/50 group-hover:border-green-500/50
                             hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-blue-500/0 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  <div className="relative flex flex-col items-center justify-between h-full gap-6">
                    <div className="text-green-400 text-6xl transform transition-all duration-500 
                                group-hover:scale-110 group-hover:text-green-300
                                group-hover:rotate-3">
                      {card.image}
                    </div>
                    
                    <div className="text-center space-y-3">
                      <h2 className="text-2xl font-bold text-white group-hover:text-green-400 
                                 transition-colors duration-300">
                        {card.title}
                      </h2>
                      <p className="text-gray-400 group-hover:text-gray-300">
                        {card.description}
                      </p>
                    </div>
                    
                    <div className="w-full">
                      {isfav(card.id) ? (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(removetofav(card.id));
                          }}
                          className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 
                                   text-white rounded-xl font-medium
                                   transform transition-all duration-300 
                                   hover:from-red-600 hover:to-red-700
                                   hover:scale-[1.02] hover:shadow-lg
                                   focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                        >
                          Remove from Favorites
                        </button>
                      ) : (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(addtofav(card));
                          }}
                          className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 
                                   text-white rounded-xl font-medium
                                   transform transition-all duration-300 
                                   hover:from-green-600 hover:to-green-700
                                   hover:scale-[1.02] hover:shadow-lg
                                   focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                        >
                          Add to Favorites
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;