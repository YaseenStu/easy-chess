import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const ItalianGame = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Italian Game</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"  // Increased height for better visibility
            src="https://www.youtube.com/embed/MhNs8GLo894"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          The Italian Game is initiated with the moves 1.e4 e5 2.Nf3 Nc6 3.Bc4, focusing on a rapid development and control of the center. This classical opening is one of the oldest in chess, characterized by its open and tactical gameplay. It sets the stage for both players to fight for the center without committing to aggressive maneuvers too early. Key variations include the Giuoco Piano and the Two Knights Defense, each leading to rich middle-game positions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItalianGame;
