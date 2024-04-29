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
            height="450"
            src="https://www.youtube.com/embed/ogmGNIk6W7I"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          The move 1...f5 defines the Dutch Defense, which is a combative answer to 1.d4. 
          In order to control the e4-square and get ready for kingside attacks, this opening is played. 
          Depending on variants like the Stonewall, Classical, or Leningrad Dutch, the Dutch can result in very 
          tactical games or strong strategic contests. It is highly praised for being aggressive and unconventional, 
          giving Black people opportunities to take the lead right away.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dutch;
