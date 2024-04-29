import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Overloading = () => {
    const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Overloading in Chess</h1>
      <div className="gap-8">
        <div className="flex-initial w-1/2">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/vQ3skxwrp40"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/2 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
            <strong>Overloading</strong> is a tactical theme in chess where a piece is given too many defensive tasks, making it vulnerable to tactical strikes. This tactic can force the overloaded piece to abandon one of its defensive responsibilities, leading to material loss or a deteriorating position.
          </p>
          <p className="text-xl text-gray-700 mt-4">
            In practical play, overloading often targets pieces that protect crucial squares, pieces, or threats of checkmate. By tactically attacking these critical points simultaneously, a player can 'overload' a defender until it can no longer cope with all its defensive duties.
          </p>
          <p className="text-xl text-gray-700 mt-4">
            Effective use of overloading requires foresight and the ability to pressure multiple points in your opponent’s position simultaneously. Recognizing opportunities to overload an opponent’s piece is a skill that improves with practice and study.
          </p>
          <p className="text-xl text-gray-700 mt-4">
            To counter overloading, it's vital to maintain flexibility in your position, redistribute defensive tasks among multiple pieces when possible, and anticipate the opponent's tactical setups.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overloading;
