import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Overloading = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Overloading in Chess</h1>
      <div className="gap-8">
        <div className="flex-initial w-1/2">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/vQ3skxwrp40"
            title="Overloading"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/2 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
            <strong>Overloading</strong> is a tactical theme in chess where a piece is given too many defensive tasks, making it vulnerable to tactical strikes. This tactic can force the overloaded piece to abandon one of its defensive responsibilities, leading to material loss or a deteriorating position.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overloading;
