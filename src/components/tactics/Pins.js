import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Pins = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Understanding Pins in Chess</h1>
      <div className="gap-8">
        <div className="flex-initial w-1/2">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/cbk4dRe0y_Y"
            title="Chess Pins Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/2 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
            A <strong>pin</strong> is a powerful tactical weapon in chess where a defending piece is immobilized because moving it would expose a more valuable piece behind it, usually the king or queen. This tactic can paralyze an opponent’s piece and restrict their options, leading to gains in material or other advantages.
          </p>
          <p className="text-xl text-gray-700 mt-4">
            There are two types of pins in chess:
            <ul>
              <li><strong>Absolute pin:</strong> where the piece is pinned against the king, making it illegal to move the pinned piece because it would put the king in check.</li>
              <li><strong>Relative pin:</strong> where moving the pinned piece would expose a more valuable piece to capture but is not illegal.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pins;
