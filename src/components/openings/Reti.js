import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Reti = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Reti Gambit</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/R1fFb-1QUX8"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          The Reti Opening starts with 1.Nf3, resulting in a hypermodern style in which White 
          controls the center with pieces rather than pawns. This adaptable opening can translate 
          into a variety of pawn structures and systems, allowing White to preserve a solid setup while 
          responding to Black's moves. It is named after Richard Réti, a pioneer of this hypermodern technique.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reti;
