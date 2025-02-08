import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Record() {
  const color = useSelector((state) => state.Theme.theme);
  const [Data, setData] = useState([]);

  function fetchData() {
    try {
      fetch('/data.json')
        .then(res => res.json())
        .then(data => {
          setData(data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="pt-24 pb-12 px-4 min-h-screen">
      {Data.html && (
        <div className={`
          max-w-4xl mx-auto rounded-xl shadow-xl
          ${color === 'dark' 
            ? 'bg-gray-800 text-gray-100' 
            : 'bg-white text-gray-800'}
        `}>
          <div className="p-8 space-y-10">
            {/* Title Section */}
            <div className="border-b pb-6">
              <h1 className={`text-4xl font-bold mb-6 ${
                color === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {Data.html.overview.title}
              </h1>
              <div className="space-y-4">
                <p className={`text-lg leading-relaxed ${
                  color === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>{Data.html.overview.p1}</p>
                <p className={`text-lg leading-relaxed ${
                  color === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>{Data.html.overview.p2}</p>
                <p className={`text-lg leading-relaxed ${
                  color === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>{Data.html.overview.p3}</p>
              </div>
            </div>

            {/* Tags Section */}
            <div className="space-y-6">
              <h2 className={`text-3xl font-semibold ${
                color === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Tags in HTML
              </h2>
              <div className={`p-6 rounded-lg font-mono text-base ${
                color === 'dark' 
                  ? 'bg-gray-900 text-gray-300' 
                  : 'bg-gray-50 text-gray-700'
              }`}>
                {Data.html.basics.tags.examples.paragraph.code}
              </div>
            </div>

            {/* Attributes Section */}
            <div className="space-y-6">
              <h2 className={`text-3xl font-semibold ${
                color === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Attributes
              </h2>
              <div className={`space-y-4 ${
                color === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <div className={`p-6 rounded-lg ${
                  color === 'dark' 
                    ? 'bg-gray-900' 
                    : 'bg-gray-50'
                }`}>
                  {Data.html.basics.attributes.description}
                </div>
                <div className={`p-6 rounded-lg font-mono ${
                  color === 'dark' 
                    ? 'bg-gray-900' 
                    : 'bg-gray-50'
                }`}>
                  <span className="font-semibold">href: </span>
                  {Data.html.basics.attributes.examples.href.code}
                </div>
                <div className={`p-6 rounded-lg font-mono ${
                  color === 'dark' 
                    ? 'bg-gray-900' 
                    : 'bg-gray-50'
                }`}>
                  <span className="font-semibold">src: </span>
                  {Data.html.basics.attributes.examples.src.code}
                </div>
              </div>
            </div>

            {/* Forms Section */}
            <div>
              <h2 className={`text-3xl font-semibold ${
                color === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Forms
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Record;