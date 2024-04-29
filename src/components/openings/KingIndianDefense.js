import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const KingIndianDefense = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>King's Indian Defense</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/eDSpqAABgME"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          The King's Indian Defense is defined by the movements 1.d4 Nf6 2.c4 g6, 
          with Black permitting White central dominance in the beginning with the intention 
          of undermining and counterattacking the center later. It allows for deep strategic 
          and sophisticated tactical gameplay and has been a favorite weapon of many World Champions. 
          The major lines frequently result in fast play, with both sides having opportunities for a kingside attack.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KingIndianDefense;
