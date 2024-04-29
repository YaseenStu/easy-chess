import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const KingIndianAttack = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>King's Indian Attack</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"  // Increased height for better visibility
            src="https://www.youtube.com/embed/QhdoA4EvMzI"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          The King's Indian Attack is a flexible, system-like opening used by White, beginning typically with 1.Nf3, 2.g3, followed by Bg2, and O-O. It can be played against various Black setups, providing White with a solid structure and the potential for a strong kingside offensive. The setup mirrors the strategic ideas of the King's Indian Defense but from the white side, focusing on control of the e5-square and preparation for a central or kingside pawn advance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KingIndianAttack;
