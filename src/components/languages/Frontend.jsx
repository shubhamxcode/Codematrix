import React from 'react'
import { Link } from 'react-router-dom';
function Frontend() {
  const cards = [
    { id: 1, title: "HTML", description: "The complete guide for  HTML", to:"/record" },
    { id: 2, title: "CSS", description: "The complete guide for CSS ", },
    { id: 3, title: "TAILWIND", description: "The complete guide for TAILWIND", },
    { id: 4, title: "JAVA SCRIPT", description: "The complete guide for JAVASCRIPT ", },
    { id: 5, title: "REACT", description: "The complete guide for REACT ",},
    { id: 6, title: "ChatBot", description: "Clear your all douts using our chatbot",to:"/chatai"},
  ];
  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card) => (
        <Link
          to={card.to}
          key={card.id}
          className="cursor-pointer border border-gray-700 shadow-lg p-6 rounded-lg hover:bg-green-700 hover:shadow-xl m-4 w-80 h-80 flex flex-col items-center justify-center text-center transition-transform  transform hover:scale-110"
        >
          <div className="text-5xl mb-4">
            {card.image}
          </div>
          <h1 className="font-bold text-green-500 mb-2">{card.title}</h1>
          <p className="font-semibold">{card.description}</p>
        </Link>
      ))}
    </div>
  );
};
export default Frontend
