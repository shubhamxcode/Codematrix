import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removetofav } from "./Feature/addtofav/Addtofav";
import { Link } from "react-router-dom";

const AddedCardsHeader = () => {
  const totalcards = useSelector((state) => state.favorites.items.length);
  const displaycards = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.Theme.theme);

  return (
    <div className={`mt-2 ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'} min-h-screen p-4`}>
      <div className={`mt-11 flex justify-between items-center ${theme === 'light' 
        ? 'bg-white shadow-md border-gray-200' 
        : 'bg-gray-800 shadow-lg border-gray-700'} 
        rounded-lg max-w-sm mx-auto p-4 border`}>
        <h3 className={`text-lg font-semibold ${theme === 'light' 
          ? 'text-gray-800' 
          : 'text-gray-100'}`}>
          Added Cards
        </h3>
        <div className={`${theme === 'light' 
          ? 'bg-blue-500 text-white' 
          : 'bg-blue-700 text-gray-100'} 
          text-sm font-medium px-4 py-2 rounded-full`}>
          {totalcards}
        </div>
      </div>
      
      {displaycards.length === 0 ? (
        <div className={`flex items-center justify-center mt-16 ${theme === 'light' 
          ? 'text-gray-600' 
          : 'text-gray-400'}`}>
          <div className="text-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-24 w-24 mx-auto mb-4 ${theme === 'light' 
                ? 'text-gray-400' 
                : 'text-gray-600'}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <h2 className="text-2xl font-semibold mb-2">
              No Favorite Cards Yet
            </h2>
            <p className="text-sm">
              Start adding cards to your favorites to see them here.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap md:justify-start justify-center">
          {displaycards.map((card) => (
            <div key={card.id} className="m-4">
              <Link 
                to={card.to || "#"} 
                className={`cursor-pointer border ${theme === 'light' 
                  ? 'border-gray-300 bg-white hover:bg-green-100 text-gray-800' 
                  : 'border-gray-700 bg-gray-800 hover:bg-green-900 text-gray-100'} 
                  shadow-lg rounded-lg w-72 h-72 sm:w-96 sm:h-96 
                  hover:shadow-xl flex flex-col items-center justify-center text-center 
                  transition-transform transform hover:scale-110`}
              >
                <div className={`text-5xl mb-4 ${theme === 'light' 
                  ? 'text-blue-600' 
                  : 'text-cyan-400'}`}>
                  {React.isValidElement(card.image) ? card.image : null}
                </div>
                <h1 className={`font-bold mb-2 ${theme === 'light' 
                  ? 'text-green-600' 
                  : 'text-green-400'}`}>
                  {card.title}
                </h1>
                <p className={`font-semibold ${theme === 'light' 
                  ? 'text-gray-700' 
                  : 'text-gray-300'}`}>
                  {card.description}
                </p>
              </Link>
              <div className="flex justify-center mt-2">
                <button
                  className={`font-bold py-2 px-4 rounded transition duration-300 ${theme === 'light' 
                    ? 'bg-blue-500 text-white hover:bg-blue-600' 
                    : 'bg-blue-700 text-gray-100 hover:bg-blue-800'}`}
                  onClick={() => dispatch(removetofav(card.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddedCardsHeader;