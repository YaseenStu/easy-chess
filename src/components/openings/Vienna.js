import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Vienna = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Vienna Gambit</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/PbteFFxkZIc"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
            The Vienna Game starts with 1.e4 e5 2.Nc3, aiming to bolster White's center control while keeping options open for various tactical and strategic plans. This opening can lead to both quiet, positional play and wild, tactical melees, depending on the chosen variations and Black’s responses. It offers a flexible approach with plans similar to the Italian Game but with a different move order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vienna;
