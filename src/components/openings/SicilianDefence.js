import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const SicilianDefense = () => {
  const { theme } = useContext(ThemeContext);
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
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
            The Sicilian Defense is a chess opening that begins with the moves 1.e4 c5. It is the most popular and best-scoring response to White's first move 1.e4. Named after the Italian priest and chess theoretician Pietro Carrera, the Sicilian Defense is a staple of competitive chess, known for its complexity and asymmetrical structure which leads to varied and dynamic play.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SicilianDefense;
