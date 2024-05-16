import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const FourKnightsGame = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Four Knights Game</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/432VtltHVaA"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
            The Four Knights Game starts with 1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6, developing both knights
            symmetrically before any significant center pawn encounters. The Spanish Four Knights, with
            their excellent blend of tactical and strategic themes and opportunities to switch to either
            quieter or sharper play, are frequently played after this start. For players who want to explore
            open games without having to deal with a lot of theory, it is a great fit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FourKnightsGame;
