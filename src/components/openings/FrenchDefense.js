import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const FrenchDefense = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>French Defense</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/5pec-u6PSvA"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          The French Defense is renowned for its strength and durability, especially 
          after starting with 1.e4 e6. By keeping up a solid pawn chain from d5 to e6, 
          Black can threaten White's core. When Black tries to counterplay on the queenside 
          while defending the kingside, the French Defense typically results in closed constructions. 
          The Winawer, Tarrasch, and Classical are notable variations that provide various pawn layouts 
          and strategies to suit varying tactical inclinations.          
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrenchDefense;
