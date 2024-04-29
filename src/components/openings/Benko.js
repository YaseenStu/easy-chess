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
          The Benko Gambit, which is started by 1.d4 Nf6 2.c4 c5 3.d5 b5, gives up a pawn in exchange for 
          considerable long-term pressure on the queenside. In order to make up for the material delays, 
          black attempts to actively play and gain control of the a and b files with rooks. Those who are 
          proactive and looking for dynamic opportunities against White's setup often start with this opening.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benko;
