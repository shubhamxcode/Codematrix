import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LottieAnimation from '../../animationimg/Ai';
import { FaRocket, FaBrain, FaLightbulb, FaGraduationCap } from 'react-icons/fa';

const FeatureCard = ({ icon: Icon, title, description, theme }) => (
  <div className={`p-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${
    theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/50'
  } backdrop-blur-lg`}>
    <Icon className="w-8 h-8 text-green-500 mb-4" />
    <h3 className={`text-xl font-semibold mb-2 ${
      theme === 'dark' ? 'text-white' : 'text-gray-900'
    }`}>{title}</h3>
    <p className={`${
      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
    }`}>{description}</p>
  </div>
);

function AI() {
  const theme = useSelector((state) => state.Theme.theme);
  
  const features = [
    {
      icon: FaBrain,
      title: "Adaptive Learning",
      description: "Personalized learning paths that adapt to your progress and learning style"
    },
    {
      icon: FaLightbulb,
      title: "Instant Feedback",
      description: "Get immediate responses and corrections to enhance your understanding"
    },
    {
      icon: FaGraduationCap,
      title: "Expert Guidance",
      description: "Access comprehensive knowledge across multiple domains and subjects"
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      theme === 'dark'
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r ${
            theme === 'dark'
              ? 'from-green-400 via-blue-500 to-purple-500'
              : 'from-green-600 via-blue-600 to-purple-600'
          } bg-clip-text`}>
            Level Up Your Knowledge
          </h1>
          <p  className=''>
            Transform your learning journey with our AI-powered chatbot
          </p>
        </div>

        {/* Main Content */}
        <Link to="chatai" className="block hover:no-underline">
          <div className={`rounded-2xl p-8 mb-16 transition-all duration-500 transform hover:scale-102 ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-gray-800 to-gray-900'
              : 'bg-gradient-to-r from-white to-gray-50'
          } shadow-xl hover:shadow-2xl`}>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2">
                <LottieAnimation />
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className={`text-3xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  <FaRocket className="inline-block mr-3 text-green-500 animate-bounce" />
                  Start Your Learning Journey
                </h2>
                <p className={`text-lg ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  From coding to complex concepts, get instant guidance and personalized learning 
                  experiences tailored to your needs. Learn at your own pace with interactive 
                  support available 24/7.
                </p>
                <button className={`w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-green-400 to-blue-500'
                    : 'bg-gradient-to-r from-green-600 to-blue-700'
                } text-white hover:from-pink-500 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105`}>
                  Get Started Now
                </button>
              </div>
            </div>
          </div>
        </Link>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} theme={theme} />
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="fixed bottom-0 left-0 right-0 flex justify-center space-x-6 pb-8 opacity-40">
          <div className="w-16 h-16 bg-green-500 rounded-full blur-xl animate-pulse"></div>
          <div className="w-16 h-16 bg-blue-500 rounded-full blur-xl animate-pulse delay-300"></div>
          <div className="w-16 h-16 bg-purple-500 rounded-full blur-xl animate-pulse delay-600"></div>
        </div>
      </div>
    </div>
  );
}

export default AI;