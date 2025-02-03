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
    <div className={`min-h-screen transition-all duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-black via-gray-900 to-black text-white' 
        : 'bg-gradient-to-b from-white via-gray-100 to-white text-black'
    }`}>
      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-20 pb-16 text-center relative">
        <div className="space-y-4">
          <h1 className={`text-5xl lg:text-8xl font-bold bg-gradient-to-r ${
            theme === 'dark'
              ? ''
              : 'from-blue-600 to-purple-700'
          }`}>
            The Future Skill
          </h1>
          <p className={`text-2xl lg:text-4xl font-semibold ${
            theme === 'dark' ? 'text-white' : 'text-gray-700'
          }`}>
            It's Code Matrix
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <p className={`text-lg lg:text-xl leading-relaxed mb-8 rounded-xl p-6 transition duration-300 ${
              theme === 'dark'
                ? 'bg-gray-800 text-white'
                : 'bg-gray-100 text-gray-800'
            }`}>
              Our website provides comprehensive coding information, catering to beginners and professionals alike. Explore full-stack development, data science, AI, and more.
            </p>
            <button
              className={`px-8 py-4 rounded-xl text-lg font-bold transition duration-300 shadow-md ${
                theme === 'dark'
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              <FaRocket className="inline-block mr-2 animate-bounce" /> Learn More
            </button>
          </div>
          <div className="lg:w-1/2">
            <img
              src={intro}
              alt="Coding Illustration"
              className="w-full max-w-md mx-auto rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className={`text-3xl lg:text-6xl font-bold text-center mb-12 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Tech Resources for Developers
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[{ icon: FaCode, title: "Learn to Code", desc: "Master programming fundamentals." },
            { icon: FaLaptopCode, title: "Build Projects", desc: "Hands-on coding projects." },
            { icon: FaRocket, title: "Launch Career", desc: "Prepare for tech interviews." }]
            .map((feature, index) => (
              <div key={index} className={`p-6 rounded-xl transition-transform hover:scale-105 duration-300 ${
                theme === 'dark'
                  ? 'bg-gray-800 text-white border border-gray-700'
                  : 'bg-white text-gray-800 border border-gray-200'
              }`}>
                <feature.icon className={`w-12 h-12 mb-4 ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                }`} />
                <h3 className={`text-xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>{feature.title}</h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{feature.desc}</p>
              </div>
            ))}
        </div>
      </section>

      {/* Cards Section */}
      <section className="container mx-auto px-4 mb-20">
        <Card />
      </section>

      {/* AI Section */}
      <section className="mb-20">
        <Ai />
      </section>

      {/* Scrollbar */}
      <Scrolbar />
    </div>
  );
}

export default Home;