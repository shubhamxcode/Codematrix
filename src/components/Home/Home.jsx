
import intro from "../../images/illustration-intro.png";
import Card from "../../Resuable/Carousel";
import Scrolbar from "../scrolbar";
function Home() {
  return (
    <div className="">
      <div className="py-10">
        <div className="">
        <div className="text-gray-300 text-center">
          <h1 className="text-4xl lg:text-7xl font-bold">The Future Skill</h1>
          <p className="text-xl lg:text-3xl font-bold mt-4">It's Code Matrix</p>
        </div>
          <div className="flex flex-col  lg:flex-row items-center ">
            <p className="text-gray-400 text-justify md:text-[18px] lg:text-[21px] mb-8  sm:text-[18px]">
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
              className=" sm:mt-2  sm:w-[70%] md:mt-2 w-[50%] lg:w-[30%] inline-block mt-1"
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
      <div className="flex items-center justify-center font-bold">
        <h1 className="text-white text-center hover:underline text-2xl md:text-5x">
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
