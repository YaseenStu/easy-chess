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
            height="450"
            src="https://www.youtube.com/embed/MhNs8GLo894"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          The opening movements of the Italian game are 1.e4 e5 2.Nf3 Nc6 3.Bc4, 
          with an emphasis on quick center growth and control. One of the oldest openings 
          in chess, this classical style is distinguished by its open and strategic play. It 
          creates the conditions for both players to compete for the center without having to 
          rush into any rough play. Rich middle-game positions can be reached with both the Giuoco 
          Piano and the Two Knights Defense key variations.          
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItalianGame;
