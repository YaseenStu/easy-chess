import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Skewers = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Mastering Skewers in Chess</h1>
      <div className="gap-8">
        <div className="flex-initial w-1/2">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/vgmcQantPe0"
            title="Chess Skewers Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/2 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
            A <strong>skewer</strong> is a tactical motif in chess similar to a pin, but the roles of the attacked pieces are reversed. In a skewer, a valuable piece is directly attacked, and moving it exposes a less valuable piece behind it. Skewers can force the opponent to make undesirable trades and lose material.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skewers;
