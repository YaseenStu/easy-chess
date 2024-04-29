import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const LondonSystem = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>London System</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"  // Increased height for better visibility
            src="https://www.youtube.com/embed/49H728S_VjM"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          The London System is a system opening that White can play against virtually any of Black's setups. It starts typically with d4 followed by Nf3, Bf4, e3, c3, and Bd3. This opening is renowned for its solidity and requires minimal theoretical knowledge compared to more mainstream openings. It leads to a slow buildup and strategic gameplay, making it a favorite among club players and grandmasters alike.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LondonSystem;
