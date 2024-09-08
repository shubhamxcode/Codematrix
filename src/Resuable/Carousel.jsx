import React from "react";

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
import { addtofav,removetofav } from "../Feature/addtofav/Addtofav";
import { nanoid } from "@reduxjs/toolkit";

const cards = [
  {
    id:nanoid(),
    title: "FRONTEND",
    description: "The complete guide for frontend",
    image: <FaCode />,
    to: "/frontend",
  },
  {
    id:nanoid(),
    title: "BACKEND",
    description: "The complete guide for Backend",
    image: <FaLaptopCode />,
    to: "/backend",
    
  },
  {
    id:nanoid(),
    title: "HACKING",
    description: "The complete guide for Hacking",
    image: <FaHackerrank />,
    
  },
  {
    id:nanoid(),
    title: "APP DEVELOPMENT",
    description: "The complete guide for App dev",
    image: <FaAppStoreIos />,
    
  },
  {
    id:nanoid(),
    title: "GAME DEV",
    description: "The complete guide for Game dev",
    image: <VscGame />,
    
  },
  {
    id:nanoid(),
    title: "DATA SCIENCE",
    description: "The complete guide for Data science",
    image: <FaDatabase />,
    
  },
  {
    id:nanoid(),
    title: "ARTIFICIAL INTELLIGENCE",
    description: "The complete guide for AI",
    image: <BsRobot />,
    
  },
  {
    id:nanoid(),
    title: "CYBER SECURITY",
    description: "The complete guide for Cyber security",
    image: <PiSecurityCameraFill />,
    
  },
  {
    id:nanoid(),
    title: "MERN STACK",
    description: "The complete guide for MERN stack",
    image: <TbStackFront />,
    
  },
  {
    id:nanoid(),
    title: "DEV OPS",
    description: "The complete guide for DevOps",
    image: <FaDev />,
    
  },
  {
    id:nanoid(),
    title: "CLOUD COMPUTING",
    description: "The complete guide for Cloud computing",
    image: <FaCloud />,
    
  },
  {
    id:nanoid(),
    title: "LINUX",
    description: "The complete guide for Linux",
    image: <FaLinux />,
    
  },
];


const Carousel = () => {
  const dispatch=useDispatch();
  const favitem=useSelector((state) => state.favorites.items)
  const isfav=(card)=>favitem.includes(card)
  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card) => (
        <div  key={card.id} className="">
        <Link
          to={card.to ||"we are still working"}
          className="cursor-pointer bg-black border border-gray-700 shadow-lg p-6 rounded-lg hover:bg-green-700 hover:shadow-xl m-4 w-96 h-80 flex flex-col items-center justify-center text-center transition-transform   transform hover:scale-110"
        >
          <div className="text-5xl text-white mb-4">
            {card.image}
          </div>
          <h1 className="font-bold text-green-500 mb-2">{card.title}</h1>
          <p className="font-semibold text-white">{card.description}</p>
        </Link>
        <div className="flex justify-evenly">
          {isfav(card)? (
              <button  onClick={()=>dispatch(removetofav(card.id))} className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Remove</button>
          ):(
            <button  onClick={()=>dispatch(addtofav(card))} className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300">AddFav</button>
          )}
      
        </div>
        </div>
      ))}
    </div>
    

    
    
  );
};

export default Carousel;