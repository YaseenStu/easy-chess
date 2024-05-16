import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Fork = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Forks in Chess</h1>
      <div className=" gap-8">
        <div className="flex-initial w-1/2">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/mbiR0tcdqBY"
            title="Chess Fork Tactics"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/2 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
            A <strong>fork</strong> is a chess tactic where a single piece makes two or more direct attacks simultaneously. Most commonly performed by knights, pawns, and queens, forks can decisively shift the balance of a game by capturing multiple pieces or posing double threats.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fork;
