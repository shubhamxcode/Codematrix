import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';
import Img1 from '../images/code with harry.jpg';
import Img2 from '../images/HackerSploit.webp';
import Img3 from '../images/Hitesh choudhry.jpg';
import Img4 from '../images/ezsnippet.jpg';
import Img5 from '../images/Apnikaksha .jpg';
import Img6 from '../images/kunal kushwah.jpg';
import Img7 from "../images/freecodecamp.jpeg";
import Img8 from '../images/WsCube Tech.jpg';
import Img9 from '../images/linux.avif';
import Img10 from '../images/aws.png';

const images = [
  { id: "1", image: Img1, to: "https://youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&si=08WFcZPu4LkJPssQ", text: "Frontend", desc: "Master modern web development" },
  { id: "2", image: Img2, to: "https://www.youtube.com/HackerSploit/videos", text: "Hacking", desc: "Learn ethical hacking & security" },
  { id: "3", image: Img3, to: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW", text: "Backend", desc: "Build robust server applications" },
  { id: "4", image: Img4, to: "https://www.youtube.com/@ezsnippat/videos", text: "Guidance", desc: "Career advice & best practices" },
  { id: "5", image: Img5, to: "https://youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&si=uC5kZAeP9LwylMV8", text: "DSA", desc: "Master data structures & algorithms" },
  { id: "6", image: Img6, to: "https://www.youtube.com/watch?v=ZbG0c87wcM8&list=PL9gnSGHSqcnoqBXdMwUTRod4Gi3eac2Ak", text: "DevOps", desc: "Learn modern deployment practices" },
  { id: "7", image: Img7, to: "https://www.youtube.com/watch?v=mEsleV16qdo", text: "AI", desc: "Explore artificial intelligence" },
  { id: "8", image: Img8, to: "https://www.youtube.com/watch?v=u64gyCdqawU", text: "App Dev", desc: "Create mobile applications" },
  { id: "9", image: Img9, to: "https://www.youtube.com/watch?v=sWbUDq4S6Y8&t=8072s", text: "Linux", desc: "Master Linux administration" },
  { id: "10", image: Img10, to: "https://www.youtube.com/watch?v=NhDYbskXRgc", text: "AWS", desc: "Cloud computing fundamentals" },
];

function Scrollbar() {
  const scrollRef = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = direction === "right" ? 400 : -400;
    
    if (container) {
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      
      // Update scroll position after animation
      setTimeout(() => {
        setScrollPosition(container.scrollLeft);
      }, 500);
    }
  };

  return (
    <div className="relative py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 ">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Premium Learning Resources
            </span>
          </h1>
          <p className="mt-4 text-gray-400 text-lg">Discover the best programming tutorials and courses</p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => handleScroll("left")}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 group"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-white transition-all duration-300 group-hover:bg-blue-500">
              <FaChevronLeft className="w-5 h-5" />
            </div>
          </button>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="overflow-hidden"
            onScroll={(e) => setScrollPosition(e.currentTarget.scrollLeft)}
          >
            <div className="flex gap-6 pb-4">
              {images.map((item) => (
                <Link
                  to={item.to}
                  key={item.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-none"
                >
                  <div className="w-80 bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.text}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80"></div>
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500/80 text-white transform scale-75 group-hover:scale-100 transition-all duration-300">
                          <FaPlay className="w-6 h-6 ml-1" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{item.text}</h3>
                      <p className="text-gray-400 mb-4">{item.desc}</p>
                      <div className="transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="inline-flex items-center text-blue-400 font-semibold">
                          Watch Now
                          <FaChevronRight className="ml-2 w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <button
            onClick={() => handleScroll("right")}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 group"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-white transition-all duration-300 group-hover:bg-blue-500">
              <FaChevronRight className="w-5 h-5" />
            </div>
          </button>
        </div>

        {/* Scroll Progress */}
        <div className="mt-8 flex justify-center">
          <div className="w-64 h-1 rounded-full bg-gray-700 overflow-hidden">
            <div 
              className="h-full bg-blue-500 transition-all duration-300 rounded-full"
              style={{ 
                width: `${Math.min((scrollPosition / ((images.length * 320) - 320)) * 100, 100)}%`
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scrollbar;