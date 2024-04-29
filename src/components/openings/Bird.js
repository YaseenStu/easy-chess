import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
const Bird = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}> Bird's Opening</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/YbX1l6qDSaE"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          Bird's Opening starts with 1.f4, aiming for a king’s-side attack similar to the Dutch Defense but from White's perspective. It leads to aggressive and unbalanced games, with strategies revolving around the control and breakthrough at e5. This opening is suited for players looking for complex strategic fights and willing to take on slightly inferior positions for dynamic play.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Bird;
