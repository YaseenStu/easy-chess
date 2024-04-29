import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const KingGAccepted = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>King's Gambit Accepted</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"  // Increased height for better visibility
            src="https://www.youtube.com/embed/92XYzS-vUOc"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          The King's Gambit Accepted begins with 1.e4 e5 2.f4 exf4, featuring an aggressive attempt by White to dominate the center by sacrificing a pawn for rapid development and kingside attacking chances. This opening leads to highly dynamic and tactical play, where both sides can launch attacks. It was immensely popular in the 19th century and remains a favorite among players looking to unbalance the game early.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KingGAccepted;
