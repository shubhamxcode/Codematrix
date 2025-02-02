import React from 'react';
import { useSelector } from 'react-redux';
import intro from "../../images/illustration-intro.png";
import Card from "../../Resuable/Carousel";
import Scrolbar from "../scrolbar";
import Ai from '../AI/ai';
import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';

function Home() {
  const theme = useSelector((state) => state.Theme.theme);
  
  return (
    <div className={`bg-gradient-to-r from-gray-900 via-black to-gray-900  min-h-screen transition-all duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900'
        : 'bg-gradient-to-b from-gray-100 via-white to-gray-100'
    }`}>
      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-20 pb-16 text-center relative">
        <div className="space-y-4">
          <h1 className={`text-5xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
            theme === 'dark'
              ? 'from-blue-400 to-purple-500'
              : 'from-blue-600 to-purple-700'
          }`}>
            The Future Skill
          </h1>
          <p className={`text-2xl lg:text-4xl font-bold ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            It's Code Matrix
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <p className={`text-lg lg:text-xl leading-relaxed mb-8 rounded-xl p-6 ${
              theme === 'dark'
                ? 'text-gray-300 bg-gray-800/50'
                : 'text-gray-700 bg-gray-100/50'
            }`}>
              Our website is dedicated to providing comprehensive information
              about various coding-related fields, catering to both beginners
              and experienced developers. The platform serves as a one-stop
              resource for learning about different aspects of programming,
              including full-stack development, front-end and back-end
              technologies, data science, artificial intelligence, and more.
            </p>
            <button
              aria-label="Learn more about coding"
              className={`group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl overflow-hidden transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              <FaRocket className="mr-2 animate-bounce" />
              Learn More
              <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
          <div className="lg:w-1/2">
            <img
              src={intro}
              alt="Illustration of coding and technology"
              className="w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300 rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className={`text-3xl lg:text-6xl font-bold text-center mb-12 relative ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Tech Resources for Developers
          <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full ${
            theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'
          }`}></div>
        </h2>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: FaCode,
              title: "Learn to Code",
              description: "Master programming fundamentals and advanced concepts"
            },
            {
              icon: FaLaptopCode,
              title: "Build Projects",
              description: "Apply your skills with hands-on coding projects"
            },
            {
              icon: FaRocket,
              title: "Launch Career",
              description: "Prepare for tech interviews and land your dream job"
            }
          ].map((feature, index) => (
            <div key={index} className={`rounded-xl p-6 transform hover:scale-105 transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gray-800/50 border border-gray-700 hover:border-blue-500/50'
                : 'bg-white/50 border border-gray-200 hover:border-blue-500/50'
            }`}>
              <feature.icon className={`w-12 h-12 mb-4 ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`} />
              <h3 className={`text-xl font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>{feature.title}</h3>
              <p className={
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cards Section */}
      <section className="container mx-auto px-4 mb-20">
        <div id="Cardparent" className="flex flex-wrap justify-center gap-6">
          <Card />
        </div>
      </section>

      {/* AI Section */}
      <section className="mb-20">
        <Ai />
      </section>

      {/* Scrollbar */}
      <Scrolbar />

      {/* Background Decorations */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${
          theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-500/5'
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 ${
          theme === 'dark' ? 'bg-purple-500/10' : 'bg-purple-500/5'
        }`}></div>
      </div>
    </div>
  );
}

export default Home;