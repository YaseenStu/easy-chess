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
            height="450"  // Increased height for better visibility
            src="https://www.youtube.com/embed/eDSpqAABgME"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          The King's Indian Defense is characterized by the moves 1.d4 Nf6 2.c4 g6, with Black allowing White central dominance in the opening with the plan to undermine and counterattack the center later. It leads to rich strategic and complex tactical gameplay and has been a favorite weapon of many World Champions. The main lines often lead to sharp play where both sides have chances for a kingside attack.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KingIndianDefense;
