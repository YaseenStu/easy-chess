import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Dutch = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Dutch Defense</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"  // Increased height for better visibility
            src="https://www.youtube.com/embed/ogmGNIk6W7I"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          The Dutch Defense is a fighting response to 1.d4, characterized by the move 1...f5. This opening aims to control the e4-square and prepare for kingside attacks. The Dutch can lead to highly tactical games or solid strategic contests, depending on variations like the Stonewall, Classical, or Leningrad Dutch. It is well-regarded for its aggressive and unorthodox nature, offering Black chances to seize the initiative from the outset.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dutch;
