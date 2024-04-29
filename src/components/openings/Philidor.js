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
            height="450"
            src="https://www.youtube.com/embed/bZl0phd70l4"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          The Philidor Defense appears after 1.e4 e5 2.Nf3 d6, providing good, 
          if somewhat passive, defense against White's first move. It aims for a 
          strong pawn structure and plans to damage White's center from a comfortable 
          position. This defense can result in lengthy maneuvering games where both sides
           can compete for a long-term strategic edge.          
           </p>
        </div>
      </div>
    </div>
  );
};

export default Philidor;
