import React from 'react';

const SuggestionBox = ({ suggestions, onSuggestionClick }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {suggestions.map((suggestion, index) => (
        <button
        VITE_API_URL="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBL422fkzoPV4FkukRse8p2PwyZker2Xps"
          key={index}
          onClick={() => onSuggestionClick(suggestion)}
          className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600"
        >
          <span className="mr-2">{suggestion.icon}</span>
          {suggestion.text}
        </button>
      ))}
    </div>
  );
};

export default SuggestionBox;
