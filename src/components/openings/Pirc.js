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
            height="450"  // Increased height for better visibility
            src="https://www.youtube.com/embed/cd6PjqBm-vA"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          The Pirc Defense is characterized by the moves 1.e4 d6 2.d4 Nf6 3.Nc3 g6, allowing White to establish a broad pawn center with the idea for Black to undermine and attack it from a hypermodern setup. It can lead to varied structures, often with opposite-sided castling and mutual attacks, making it a dynamic choice for counter-attacking players.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pirc;
