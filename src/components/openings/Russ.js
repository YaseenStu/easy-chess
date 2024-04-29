import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Russ = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Russian Defense</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"  // Increased height for better visibility
            src="https://www.youtube.com/embed/YSLU0ed3quc"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          Russian Defense, Also known as the Petrov Defense, this opening begins with the moves 1.e4 e5 2.Nf3 Nf6, challenging White’s center immediately and mirroring White’s knight development. It is known for its symmetrical structure and solid properties, allowing Black to solve development issues quickly. The Russian Defense requires accurate play from Black to counter White’s initiative and can lead to drawish tendencies in some lines.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Russ;
