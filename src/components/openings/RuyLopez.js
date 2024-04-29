import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const RuyLopez = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Ruy López</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450" 
            src="https://www.youtube.com/embed/IQrtrPvU3bQ"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          Ruy Lopez, Also known as the Spanish Opening, the Ruy Lopez starts with the moves 1.e4 e5 2.Nf3 Nc6 3.Bb5. It is one of the oldest and most classical openings, aiming to pressure Black’s center right from the outset. The opening is characterized by deep strategy, manifold pawn structures, and complex piece play. Variations such as the Closed, Open, and Berlin Defense provide a wide range of middle and endgame positions that have been deeply explored at all levels of chess.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RuyLopez;
