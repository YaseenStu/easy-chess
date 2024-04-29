import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const BishopOpening = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Bishop Opening</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/Qb3PWiIbIJs"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          With movements 1.e4 e5 2.Bc4, the Bishop's Opening takes aim at the vulnerable f7 square 
          right away in the opening phase of the game. White can choose to lead the game into either 
          an open or closed structure with this opening, which is a forerunner to many lines in the Italian Game. 
          To give Black something to work on right away in the beginning phase, piece development and central control are prioritized.
          </p>

        </div>
      </div>
    </div>
  );
};

export default BishopOpening;
