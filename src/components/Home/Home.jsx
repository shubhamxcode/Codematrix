import { useRef } from "react";
import ytchannel6 from "../../images/hitesh.png";
import ytchannel7 from "../../images/khapra dii.jpg";
import ytchannel8 from "../../images/codecamp.png";

import ytchannel1 from "../../images/Hitesh choudhry.jpg";
import ytchannel2 from "../../images/freecodecamp.jpeg";
import ytchannel3 from "../../images/code with harry.jpg";
import ytchannel4 from "../../images/Apni kaksha .jpg";
import ytchannel5 from "../../images/ezsnippet.jpg";
import intro from "../../images/illustration-intro.png";
import { Link } from "react-router-dom";
import Frontend from "../languages/Frontend";
import Card from "../../Resuable/Carousel";
function Home() {
  const scrollRef = useRef();

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      if (direction === "right") {
        scrollRef.current.scrollLeft += 100; // Scrolls right by 100px
      } else {
        scrollRef.current.scrollLeft -= 100; // Scrolls left by 100px
      }
    }
  };

  return (
    <div className="bg-black">
      <div className="py-10">
        <div className="">
          <div className="text-gray-300 text-center mb-8">
            <h1 className="text-7xl font-bold">The Future Skill</h1>
            <h2 className="text-5xl font-bold mt-4">It's Code Matrix</h2>
          </div>
          <div className="text-gray-400 text-2xl flex flex-col lg:flex-row items-center justify-around">
            <p className="lg:w-2/3 mb-8 lg:mb-0">
              Our project is dedicated to providing comprehensive information
              about various coding-related fields, catering to both beginners
              and experienced developers. The platform serves as a one-stop
              resource for learning about different aspects of programming,
              including full-stack development, front-end and back-end
              technologies, data science, artificial intelligence, and more. By
              offering well-organized content, insightful tutorials, and
              practical examples, our goal is to empower users to navigate the
              ever-evolving tech landscape with confidence and build a solid
              foundation in coding.
            </p>
            <img
              src={intro}
              alt="Illustration of coding and technology"
              className="w-full lg:w-[30%] inline-block mt-[-50px] lg:mt-0"
            />
          </div>
          <div className="text-center mt-10">
            <button className="text-white text-3xl border rounded-xl px-8 py-3 bg-blue-500 hover:bg-blue-600 hover:scale-125 hover:opacity-60 transition-all duration-700">
              {" "}
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center h-96 justify-center text- font-bold">
        <h1 className="text-5xl text-white hover:underline">
          Tech Resources for Developers
        </h1>
      </div>
      <div id="Cardparent" className="flex flex-wrap justify-between">
        <Card />
      </div>
      <h1 className="text-white font-bold flex justify-center mt-24 text-5xl hover:underline ">
        Some Great Coding Channel Suggestions
      </h1>
      <div className="text-white relative mt-32">
        <div className="absolute top-1/2  transform -translate-y-1/2">
          <button onClick={() => handleScroll("left")} className="text-7xl">
            {"<"}
          </button>
        </div>
        <div
          ref={scrollRef}
          className="flex whitespace-nowrap w-[80%] h-64 overflow-hidden m-auto rounded-2xl aspect-3/2 space-x-4 "
        >
          <img
            src={ytchannel7}
            alt="channel1"
            className="w-64 h-64 rounded-lg"
          />
          <img
            src={ytchannel7}
            alt="channel2"
            className="w-64 h-64 rounded-lg"
          />
          <img
            src={ytchannel7}
            alt="channel3"
            className="w-64 h-64 rounded-lg"
          />
          <img
            src={ytchannel7}
            alt="channel4"
            className="w-64 h-64 rounded-lg"
          />
          <img
            src={ytchannel7}
            alt="channel5"
            className="w-64 h-64 rounded-lg"
          />
          <img
            src={ytchannel7}
            alt="channel6"
            className="w-64 h-64 rounded-lg"
          />
          <img
            src={ytchannel7}
            alt="channel7"
            className="w-64 h-64 rounded-lg"
          />
          <img
            src={ytchannel7}
            alt="channel8"
            className="w-64 h-64 rounded-lg"
          />
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <button onClick={() => handleScroll("right")} className="text-7xl">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
