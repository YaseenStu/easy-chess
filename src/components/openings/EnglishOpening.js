import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const EnglishOpening = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>English Opening</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/va0s92praEM"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          The English Opening, starting with 1.c4, is a flexible, strategic system aiming to 
          control the central squares from the flank. This opening can transpose into many other 
          openings such as the Queen`s Gambit Declined, King`s Indian Defense, or English symmetrical variations. The English is popular at all levels for its less-theoretical nature and the complex middlegame play it offers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnglishOpening;
