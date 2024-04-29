import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Bongcloud = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>The Bongclod</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/bfVOMbuIMDA"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          The Bongcloud Attack is a somewhat unconventional and often humorous chess opening, which involves an early advance of the king to e2 with the moves 1.e4 e5 2.Ke2. This move is typically seen as an infringement of classical opening principles, which advise against early king movements. The primary appeal of the Bongcloud is not rooted in its strategic soundness but rather in its shock value and the challenge it poses to conventional chess norms.          </p>
        </div>
      </div>
    </div>
  );
};

export default Bongcloud;
