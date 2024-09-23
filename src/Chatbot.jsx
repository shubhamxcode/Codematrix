import axios from 'axios';
import { useState } from 'react';
import React from 'react'


function Chatai() {
const [questions, setquestions] = useState('');
const [answer, setanswer] = useState('');
const apiUrl = import.meta.env.VITE_API_URL;
   async function chatbot(){
    setanswer("loading...")
    try {
      const response=await axios({
        url:apiUrl,
        method:"post",
        data:{contents:[{parts:[{text:questions}]}]},
      });
      setanswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
    } catch (error) {
      setanswer("An error occurred. Please try again.");
    }
    
}
return (
  <div className="flex flex-col items-center p-6">
  <h1 className="text-4xl font-bold mb-8">ChatBot</h1>
  
  <input 
    type="text" 
   value={questions}
    onChange={(e) => setquestions(e.target.value)} 
    className="w-full md:w-1/2 lg:w-1/3 text-white bg-gray-600 text-center px-4 py-2 rounded-2xl border-none mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
    placeholder="Ask your question..."
  />

  <button 
    className="bg-indigo-600 text-white py-2 px-6 rounded-xl shadow-md hover:bg-indigo-700 transition duration-300 mb-8" 
    onClick={chatbot}
  >
    ASK
  </button>
  <div className="w-full md:w-1/2 lg:w-1/3 text-left">
    <pre className="bg-gray-500 text-gray-100 p-4 rounded-lg whitespace-pre-wrap break-words">{answer}</pre>
  </div>
</div>
);
}


export default Chatai