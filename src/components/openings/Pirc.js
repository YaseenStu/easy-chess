import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Pirc = () => {
  const {theme}= useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Pirc Defense</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/cd6PjqBm-vA"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          The Pirc Defense is described by the movements 1.e4 d6, 2.d4 Nf6, 
          and 3.Nc3 g6, which allow White to establish a large pawn center 
          that Black can undermine and assault from a hypermodern position. It may 
          produce a number of structures, including opposite-sided castling and mutual 
          attacks, making it an adaptable alternative for counter-attacking players.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pirc;
