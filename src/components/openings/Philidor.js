import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Philidor = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Philidor Defense</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"  // Increased height for better visibility
            src="https://www.youtube.com/embed/bZl0phd70l4"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          The Philidor Defense arises after 1.e4 e5 2.Nf3 d6, offering solid if somewhat passive defense against White's opening play. It aims for a strong pawn structure and prepares to undermine White’s center from a secure setup. This defense can lead to slow maneuvering games with opportunities for both sides to fight for a long-term strategic advantage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Philidor;
