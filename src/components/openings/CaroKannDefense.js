import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const CaroKannDefense = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Caro-Kann Defense</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450" 
            src="https://www.youtube.com/embed/rmbU97iftC8"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          The Caro-Kann Defense, beginning with 1.e4 c6, is known for its solid and robust structure. It allows Black to support the central advance ...d5, on the next move, aiming for a symmetrical and stable pawn structure. The Caro-Kann is favored by players who prefer a sound positional foundation over complex tactical skirmishes. Notable variations like the Classical, Advance, and Panov-Botvinnik Attack offer diverse strategic play.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaroKannDefense;
