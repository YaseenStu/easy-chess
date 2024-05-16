import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ChessBasicImage from './images/basics.png';
import ChessTacticsImage from './images/tactics.png';
import ChessOpeningsImage from './images/openings.png';
import { ThemeContext } from './components/ThemeContext';
const Learn = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={` text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Learn Chess</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="transform hover:scale-105 transition duration-300 cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden"
          onClick={() => navigateTo('/chess-basics')}>
          <img src={ChessBasicImage} alt="Chess basics" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Chess Basics</h2>
            <p className="text-gray-700">Learn the fundamentals of chess, including piece movements and basic strategies.</p>
          </div>
        </div>
        <div className="transform hover:scale-105 transition duration-300 cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden"
          onClick={() => navigateTo('/chess-tactics')}>
          <img src={ChessTacticsImage} alt="Chess tactics" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Tactics</h2>
            <p className="text-gray-700">Improve your tactical skills with our collection of chess tactics ideas.</p>
          </div>
        </div>
        <div className="transform hover:scale-105 transition duration-300 cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden"
          onClick={() => navigateTo('/chess-openings')}>
          <img src={ChessOpeningsImage} alt="Chess openings" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Opening Strategies</h2>
            <p className="text-gray-700">Explore popular chess openings and learn how to develop your pieces effectively.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
