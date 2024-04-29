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
          Bishop's Opening begins with the moves 1.e4 e5 2.Bc4, directly targeting the weak f7 square early in the game. This opening is a precursor to many Italian Game lines and offers White the flexibility to steer the game into either open or closed structures. The focus is on piece development and central control, aiming to create immediate problems for Black to solve in the opening phase.
          </p>

        </div>
      </div>
    </div>
  );
};

export default BishopOpening;
