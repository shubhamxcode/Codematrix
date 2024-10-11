import intro from "../../images/illustration-intro.png";
import Card from "../../Resuable/Carousel";
import Scrolbar from "../scrolbar";
import { motion } from "framer-motion";
function Home() {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.3,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: "spring",
        damping: 3,
        stiffness:100,
        restDelta: 0.001
      }
    }}>
    <div className="flex flex-col justify-center mt-4 px-4 overflow-hidden">
      <header className="text-gray-400 text-center mb-6">
        <h1 className="text-4xl lg:text-7xl font-bold">The Future Skill</h1>
        <p className="text-xl lg:text-3xl font-bold">It's Code Matrix</p>
      </header>
      <section className="flex flex-col items-center">
        <p className="text-gray-500 text-justify text-[12px] lg:text-[25px] sm:text-[18px] mb-4">
          Our website is dedicated to providing comprehensive information
          about various coding-related fields, catering to both beginners
          and experienced developers. The platform serves as a one-stop
          resource for learning about different aspects of programming,
          including full-stack development, front-end and back-end
          technologies, data science, artificial intelligence, and more.
          By offering well-organized content, insightful tutorials, and
          practical examples, our goal is to empower users to navigate the
          ever-evolving tech landscape with confidence and build a solid
          foundation in coding.
        </p>
        <img
          src={intro}
          alt="Illustration of coding and technology"
          className="sm:mt-2 w-[50%] sm:w-[40%] inline-block mt-1 max-w-full"
        />
      </section>

      <div className="text-center mt-10">
        <button
          aria-label="Learn more about coding"
          className="text-white text-3xl border rounded-xl px-8 py-3 bg-blue-500 hover:bg-blue-600 hover:scale-110 hover:opacity-80 transition-all duration-300"
        >
          Learn More
        </button>
      </div>

      <div className="flex items-center justify-center font-bold pt-6">
        <h1 className="text-white text-center hover:underline text-2xl md:text-5xl">
          Tech Resources for Developers
        </h1>
      </div>

      <div id="Cardparent" className="flex flex-wrap justify-center mt-6">
        <Card />
      </div>

      <div>
        <Scrolbar />
      </div>
    </div>
    </motion.div>
  );
}

export default Home;