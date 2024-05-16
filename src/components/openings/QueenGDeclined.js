import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const QueenGDeclined = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Queen's Gambit Declined</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/ZEQWwuAa2-o"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
            The Queen's Gambit Declined is defined by the movements 1.d4 d5 2.c4 e6,
            which create a solid and robust framework by supporting the central d5 pawn.
            It is noted for its classical significance and strategic depth, providing Black
            with a compact structure that allows for gradual freeing actions. It has various
            varieties, including Orthodox, Ragozin, and Lasker, all of which contribute to its deep theory.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QueenGDeclined;
