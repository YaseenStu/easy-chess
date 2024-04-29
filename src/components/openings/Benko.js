import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
const Benko = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Benko Gambit</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/NOMC4shNMp8"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          Initiated by 1.d4 Nf6 2.c4 c5 3.d5 b5, the Benko Gambit sacrifices a pawn for significant long-term pressure on the queenside. Black aims for active play and control of the a and b files with rooks, providing compensation for the material deficit. This opening is popular among aggressive players seeking dynamic chances against White's setup.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benko;
