import React from "react";
import { useDispatch } from "react-redux";
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
import { useDispatch } from "react-redux";

const cards = [
  {
    id: 1,
    title: "FRONTEND",
    description: "The complete guide for frontend",
    image: <FaCode />,
    to: "/frontend",

    
  },
  {
    id: 2,
    title: "BACKEND",
    description: "The complete guide for Backend",
    image: <FaLaptopCode />,
    to: "/backend",
    
  },
  {
    id: 3,
    title: "HACKING",
    description: "The complete guide for Hacking",
    image: <FaHackerrank />,
    
  },
  {
    id: 4,
    title: "APP DEVELOPMENT",
    description: "The complete guide for App dev",
    image: <FaAppStoreIos />,
    
  },
  {
    id: 5,
    title: "GAME DEV",
    description: "The complete guide for Game dev",
    image: <VscGame />,
    
  },
  {
    id: 6,
    title: "DATA SCIENCE",
    description: "The complete guide for Data science",
    image: <FaDatabase />,
    
  },
  {
    id: 7,
    title: "ARTIFICIAL INTELLIGENCE",
    description: "The complete guide for AI",
    image: <BsRobot />,
    
  },
  {
    id: 8,
    title: "CYBER SECURITY",
    description: "The complete guide for Cyber security",
    image: <PiSecurityCameraFill />,
    
  },
  {
    id: 9,
    title: "MERN STACK",
    description: "The complete guide for MERN stack",
    image: <TbStackFront />,
    
  },
  {
    id: 10,
    title: "DEV OPS",
    description: "The complete guide for DevOps",
    image: <FaDev />,
    
  },
  {
    id: 11,
    title: "CLOUD COMPUTING",
    description: "The complete guide for Cloud computing",
    image: <FaCloud />,
    
  },
  {
    id: 12,
    title: "LINUX",
    description: "The complete guide for Linux",
    image: <FaLinux />,
    
  },
];


const Carousel = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card) => (
        <div className="">
        <Link
          to={card.to ||"we are still working"}
          key={card.id}
          className="cursor-pointer bg-black border border-gray-700 shadow-lg p-6 rounded-lg hover:bg-green-700 hover:shadow-xl m-4 w-96 h-80 flex flex-col items-center justify-center text-center transition-transform   transform hover:scale-110"
        >
          <div className="text-5xl text-white mb-4">
            {card.image}
          </div>
          <h1 className="font-bold text-green-500 mb-2">{card.title}</h1>
          <p className="font-semibold text-white">{card.description}</p>
        </Link>
        <div className="flex justify-evenly">
        <button   className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">AddFav</button>
        <button   className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Remove</button>
        </div>
        </div>
      ))}
    </div>
    

    
    
  );
};

export default Carousel;