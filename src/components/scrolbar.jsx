import React from 'react'
import { useRef } from 'react';
import Img1 from '../images/code with harry.jpg'
import Img2 from '../images/HackerSploit.webp'
import Img3 from '../images/Hitesh choudhry.jpg'
import Img4 from '../images/ezsnippet.jpg'
import Img5 from '../images/Apnikaksha .jpg'
import Img6 from '../images/kunal kushwah.jpg'
import Img7 from "../images/freecodecamp.jpeg"
import Img8 from '../images/WsCube Tech.jpg'
import Img9 from '../images/linux.avif'
import Img10 from '../images/aws.png'
import { Link } from 'react-router-dom';


const images=[
    {id:"1",image:Img1,to:"https://youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&si=08WFcZPu4LkJPssQ",text:"Frontend"},
    {id:"2",image:Img2,to:"https://www.youtube.com/HackerSploit/videos",text:"Hacking"},
    {id:"3",image:Img3, to:"https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW",text:"Backend"},
    {id:"4",image:Img4,to:"https://www.youtube.com/@ezsnippat/videos",text:"Guidance"},
    {id:"5",image:Img5,to:"https://youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&si=uC5kZAeP9LwylMV8",text:"Dsa"},
    {id:"6",image:Img6,to:"https://www.youtube.com/watch?v=ZbG0c87wcM8&list=PL9gnSGHSqcnoqBXdMwUTRod4Gi3eac2Ak",text:"Devops"},
    {id:"7",image:Img7,to:"https://www.youtube.com/watch?v=mEsleV16qdo",text:"AI"},
    {id:"8",image:Img8,to:"https://www.youtube.com/watch?v=u64gyCdqawU",text:"App development"},
    {id:"9",image:Img9,to:"https://www.youtube.com/watch?v=sWbUDq4S6Y8&t=8072s",text:"Linux"},
    {id:"10",image:Img10,to:"https://www.youtube.com/watch?v=NhDYbskXRgc",text:"AWS"},
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
    <div className="absolute top-1/2  transform -translate-y-1/2 hover:border hover:bg-gray-400 ">
      <button onClick={() => handleScroll("left")} className="text-7xl">
        {"<"}
      </button>
    </div>
    <div ref={scrollRef}  className="flex gap-4 overflow-hidden">
       {images.map((image)=>(
        <Link to={image.to} key={image.id} className='flex-shrink-0 '>
          <img src={image.image} alt={image.id} className=' rounded-lg w-48 h-52 hover:cursor-pointer'/>
          <button className='bg-blue-500 text-white font-bold py-2 px-28 rounded hover:bg-blue-700 transition duration-300'>{image.text}</button>
        </Link>
       ))}
    </div>
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 hover:border hover:bg-gray-400">
      <button onClick={() => handleScroll("right")} className="text-7xl">
        {">"}
      </button>
    </div>
  </div>
  )
}

export default scrolbar