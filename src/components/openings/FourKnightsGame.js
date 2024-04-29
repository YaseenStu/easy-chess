import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const FourKnightsGame = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Four Knights Game</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"  // Increased height for better visibility
            src="https://www.youtube.com/embed/432VtltHVaA"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          Commencing with 1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6, the Four Knights Game symmetrically develops both knights before any major pawn confrontations in the center. This opening often leads to the Spanish Four Knights, featuring a rich mix of strategic and tactical themes, with options to transition into quieter or sharper play. It is well-suited for players looking to explore open games without excessive theoretical burden.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FourKnightsGame;
