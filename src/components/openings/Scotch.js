import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Scotch = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Scotch Opening</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"  // Increased height for better visibility
            src="https://www.youtube.com/embed/F-6yH2huMUY"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          The Scotch Game opens with 1.e4 e5 2.Nf3 Nc6 3.d4, immediately challenging Black in the center and leading to open positions with lots of tactical opportunities. This opening has regained popularity due to its straightforward nature and the potential for White to secure a central advantage early in the game.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scotch;
