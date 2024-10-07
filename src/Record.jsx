import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Record() {
    const color=useSelector((state)=>state.Theme.theme);
    const [Data, setData] = useState([]);

    function shubham() {
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
        shubham();
    }, []);

    return (
        <div className=' flex justify-center items-center min-h-screen'>
            {Data.html && (
                <div className={` text-gray-800 shadow-lg rounded-lg p-8 border max-w-7xl mx-auto ${color==='dark'?'bg-slate-500':'bg-slate-500'}`}>
                    <div className='space-y-8'>
                        <h1 className='text-4xl font-bold '>{Data.html.overview.title}</h1>
                        <p className='text-lg text-gray-700 leading-relaxed'>{Data.html.overview.p1}</p>
                        <p className='text-lg text-gray-700 leading-relaxed'>{Data.html.overview.p2}</p>
                        <p className='text-lg text-gray-700 leading-relaxed'>{Data.html.overview.p3}</p>
                        <h2 className='text-3xl font-semibold mt-10'>Tags in HTML</h2>
                        <p className='bg-gray-100 text-gray-700 p-4 rounded-md font-mono'>{Data.html.basics.tags.examples.paragraph.code}</p>
                        <h2 className='text-3xl font-semibold mt-10'>Attributes</h2>
                        <p className='bg-gray-100 text-gray-700 p-4 rounded-md font-mono'>{Data.html.basics.attributes.description}</p>
                        <p className='bg-gray-100 text-gray-700 p-4 rounded-md font-mono'>href:  {Data.html.basics.attributes.examples.href.code}</p>
                        <p className='bg-gray-100 text-gray-700 p-4 rounded-md font-mono'>src:   {Data.html.basics.attributes.examples.src.code}</p>
                        <h2 className='text-3xl font-semibold mt-10'>Forms</h2>                       
                    </div>
                </div>
            )}
        </div>
    );
}

export default Record;
