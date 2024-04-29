import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const SicilianDefense = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Sicilian Defense</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/qM4e7g2RukI"
            title="Sicilian Defense Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
            The Sicilian Defense is a chess opening that begins with the moves 1.e4 c5. It is the most popular and best-scoring response to White's first move 1.e4. Named after the Italian priest and chess theoretician Pietro Carrera, the Sicilian Defense is a staple of competitive chess, known for its complexity and asymmetrical structure which leads to varied and dynamic play.
          </p>
          <p className="text-xl text-gray-700 mt-4">
            The opening is divided into several major variations depending on Black's response, including the Najdorf, Dragon, Sveshnikov, and Accelerated Dragon, each with its deep theory and strategic motifs. Black's fundamental strategy in the Sicilian is to fight for central control while using a flank pawn to challenge White's center, leading to unbalanced positions that can benefit both tactical and strategic players.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SicilianDefense;
