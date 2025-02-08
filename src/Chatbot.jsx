import axios from 'axios';
import { useState } from 'react';
import React from 'react';

function Chatai() {
  const [questions, setquestions] = useState('');
  const [answer, setanswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;

  async function chatbot() {
    if (!questions.trim()) return;
    setIsLoading(true);
    setanswer("Thinking...");
    try {
      const response = await axios({
        url: apiUrl,
        method: "post",
        data: { contents: [{ parts: [{ text: questions }] }] }
      });
      setanswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
    } catch (error) {
      setanswer("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isLoading) {
      chatbot();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Main container with padding-top to avoid navbar overlap */}
      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-3">
              AI Assistant
            </h1>
            <p className="text-gray-300">Ask me anything and I'll help you find the answer</p>
          </div>

          {/* Input Section */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                value={questions}
                onChange={(e) => setquestions(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full bg-gray-800 text-white px-6 py-4 rounded-xl
                  border border-gray-700 focus:border-purple-500
                  shadow-lg backdrop-blur-sm
                  placeholder-gray-400 focus:outline-none focus:ring-2
                  focus:ring-purple-500 focus:ring-opacity-50
                  transition-all duration-300"
                placeholder="Type your question here..."
                disabled={isLoading}
              />
              <button
                className={`absolute right-2 top-1/2 -translate-y-1/2
                  px-6 py-2 rounded-lg font-medium
                  transition-all duration-300
                  ${isLoading
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-purple-600 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/20'
                  }
                  text-white`}
                onClick={chatbot}
                disabled={isLoading}
              >
                {isLoading ? 'Thinking...' : 'Ask'}
              </button>
            </div>
          </div>

          {/* Answer Section - Added margin-bottom for spacing */}
          {answer && (
            <div className="mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl blur-xl" />
                <div className="relative bg-gray-800 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                    <h2 className="text-gray-400 font-medium">Response</h2>
                  </div>
                  <div className="prose prose-invert max-w-none">
                    <pre className="text-gray-300 whitespace-pre-wrap break-words font-sans">
                      {answer}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chatai;