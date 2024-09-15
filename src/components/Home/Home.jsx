import { useRef } from "react";

import intro from "../../images/illustration-intro.png";
import Card from "../../Resuable/Carousel";
import Scrolbar from "../scrolbar";
function Home() {
  const scrollRef = useRef();

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
              Our website is dedicated to providing comprehensive information
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
      <div>
        <Scrolbar/>
      </div>
    </div>
  );
}

export default Home;
