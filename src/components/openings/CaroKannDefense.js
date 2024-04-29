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
          The Caro-Kann Defense is renowned for its strong and stable structure, which starts with 1.e4 c6. 
          In the next move, Black might support the center advance...d5, aiming for a stable and symmetrical 
          pawn structure. Players that prioritize solid positional foundation over intricate tactical clashes tend 
          to favor the Caro-Kann. Diverse strategic play is provided by notable variants including as the Classical, 
          Advance, and Panov-Botvinnik Attack.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaroKannDefense;
