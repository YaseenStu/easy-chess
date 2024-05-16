import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Polish = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Polish Opening</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/U1AnrPSqau8"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
            The Polish Opening begins with 1.b4, with the goal of eventually controlling the center with the c5 pawn break.
            This unconventional beginning can lead to unexpected and quirky positions, offering players with a thorough understanding
            of the lines a practical advantage. It is notorious for producing asymmetrical pawn arrangements with open flanks, which
            are ideal for strategic fights.
            The opening is separated into numerous significant varieties according on Black's response,
            including the Najdorf, Dragon, Sveshnikov, and Accelerated Dragon, each with their own deep
            theory and strategic motifs. Black's primary approach in the Sicilian is to struggle for central
            control while employing a flank pawn to assault White's center, resulting in imbalanced positions
            that can benefit both tactical and strategic players.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Polish;
