import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const ScandinavianDefense = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Scandinavian Defense</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/sKoBj-kL0hg"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
            The Scandinavian Defense arises after 1.e4 d5, immediately challenging White's control of the center. This opening leads to an asymmetrical structure that can favor both sharp and strategic styles of play. Black aims to achieve rapid development and queenside castling, often leading to dynamic and unbalanced positions. The Scandinavian is appreciated for its straightforwardness and the quick activation of Black's pieces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScandinavianDefense;
