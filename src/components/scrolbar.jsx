import React from 'react'
import { useRef } from 'react';
import Img1 from '../images/Apnikaksha .jpg'
import Img2 from '../images/code with harry.jpg'
import Img3 from '../images/codecamp.png'
import Img4 from '../images/ezsnippet.jpg'
import Img5 from '../images/Hitesh choudhry.jpg'
import { Link } from 'react-router-dom';


const images=[
    {id:"1",image:Img2,to:"https://www.youtube.com/@CodeWithHarry"},
    {id:"2",image:Img3},
    {id:"3",image:Img4},
    {id:"4",image:Img5},
    {id:"5",image:Img1},
    {id:"6",image:Img1},
    {id:"7",image:Img1},
    {id:"8",image:Img1},
    {id:"9",image:Img1},
    {id:"10",image:Img1},
    {id:"11",image:Img1},
    {id:"12",image:Img1},
]

function scrolbar() {
    const scrollRef = useRef();
    const handleScroll = (direction) => {
          if (direction === "right") {
            scrollRef.current.scrollLeft += 100; // Scrolls right by 100px
          } else {
            scrollRef.current.scrollLeft -= 100; // Scrolls left by 100px
        }
      };
  return (
  <div className="text-white relative space-y-12 ">
    <h1 className="text-white font-bold flex justify-center mt-24 text-5xl hover:underline ">
        Some Great Coding Channel Suggestions
      </h1>
    <div className="absolute top-1/2  transform -translate-y-1/2">
      <button onClick={() => handleScroll("left")} className="text-7xl">
        {"<"}
      </button>
    </div>
    <div ref={scrollRef}  className="flex gap-2 overflow-hidden">
       {images.map((image)=>(
        <Link to={image.to} key={image.id} className='flex-shrink-0 '>
          <img src={image.image} alt={image.id} className=' rounded-lg w-44 h-44 hover:cursor-pointer'/>
        </Link>
       ))}
    </div>
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
      <button onClick={() => handleScroll("right")} className="text-7xl">
        {">"}
      </button>
    </div>
  </div>
  )
}

export default scrolbar