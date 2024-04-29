import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Polish = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Polish Opening</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"  // Increased height for better visibility
            src="https://www.youtube.com/embed/U1AnrPSqau8"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          The Polish Opening begins with 1.b4, aiming to control the center with the c5 pawn break later in the game. This somewhat unusual opening can lead to unique and offbeat positions, giving players with deep knowledge of the lines a practical edge. It is known for leading to asymmetrical pawn structures and open flanks, suitable for strategic battles.
            The opening is divided into several major variations depending on Black's response, including the Najdorf, Dragon, Sveshnikov, and Accelerated Dragon, each with its deep theory and strategic motifs. Black's fundamental strategy in the Sicilian is to fight for central control while using a flank pawn to challenge White's center, leading to unbalanced positions that can benefit both tactical and strategic players.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Polish;
