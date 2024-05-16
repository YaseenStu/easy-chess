import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
const Bird = () => {
  const { theme } = useContext(ThemeContext);
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
            Beginning with 1.f4, the Bird's Opening seeks to launch a king's-side attack from White's position
            that is similar to the Dutch Defense. As a result, games become aggressive and unbalanced, with
            strategies centered around control and breakthrough at e5. Players seeking intricate strategic
            battles and prepared to accept somewhat weaker positions in exchange for lively play might
            consider this opening.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Bird;
