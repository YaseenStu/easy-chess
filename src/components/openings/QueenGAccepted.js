import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const QueenGAccepted = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Queen's Gambit Accepted</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/6a5p8flI5wc"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          In the Queen's Gambit Accepted, Black accepts White's gambit pawn with 1.d4 d5. 2.c4 dxc4. 
          This opening creates an asymmetrical pawn structure, allowing Black to expand freely and establish 
          solid structural foundations at the expense of a center pawn. It necessitates careful play on both 
          sides and has great middle-game and endgame potential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QueenGAccepted;
