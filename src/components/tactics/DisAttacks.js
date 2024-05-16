import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const DiscoveredAttack = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Discovered Attack in Chess</h1>
      <div className="gap-8">
        <div className="flex-initial w-1/2">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/-MSZCCuRz88"
            title="Chess Discovered Attacks Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/2 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
            A <strong>Discovered Attack</strong> occurs when one piece moves out of the way of another, unveiling a threat from the second piece. This type of attack can be extremely powerful, especially when it results in check or a threat of capture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscoveredAttack;
