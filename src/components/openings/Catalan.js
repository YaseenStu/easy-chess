import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Catalan = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Catalan Opening</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/nMuvv1HksL4"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          The Queen's Gambit and Reti Opening are combined to create the Catalan Opening, which gives 
          White a large amount of center control while fianchettingtoing the king's bishop. It is opened 
          with 1.d4 Nf6 2.c4 e6 3.g3. The persistent pressure in the center and on the queenside of this 
          opening is well-known for producing positions that are strong in both strategy and tactics. Because 
          of its stability and dynamic potential, the Catalan is favored at the top levels.

          </p>
        </div>
      </div>
    </div>
  );
};

export default Catalan;
