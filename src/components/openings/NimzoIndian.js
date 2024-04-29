import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const NimzoIndian = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Nimzo Indian</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"  // Increased height for better visibility
            src="https://www.youtube.com/embed/ZHzl8RpUyRo"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          The Nimzo-Indian Defense, beginning with 1.d4 Nf6 2.c4 e6 3.Nc3 Bb4, directly challenges White's control of the center while pinning the knight on c3. This opening is renowned for its rich strategic complexity and flexibility, providing Black with several plans based on solid pawn structures and piece activity. It has numerous variations, each with deep theoretical lines that can lead to vastly different types of positions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NimzoIndian;
