import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Trompowsky = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Trompowsky Attack</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/lmYWdrMhZso"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
            The Trompowsky Attack, starting with 1.d4 Nf6 2.Bg5, is an aggressive alternative to the traditional Queen's Gambit lines, aiming to disrupt Black's knight without committing to the pawn structure. This opening can lead to rapid attacks and complicated positions, especially if Black chooses to accept doubled pawns on the f-file.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trompowsky;
