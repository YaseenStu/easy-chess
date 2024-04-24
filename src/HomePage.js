import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main className="container mx-auto px-6 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome to Easy Chess</h1>
        <p className="text-xl text-gray-700 mb-8">Learn chess online with our interactive tutorials and by playing with AI and friends.</p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/play-vs-computer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
          >
            Play With Computer
          </Link>
          <Link
            to="/play-vs-player"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
          >
            Play With Friends
          </Link>
          <Link
            to="/practice"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
          >
            Practice
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
