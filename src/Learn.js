import React from 'react';

const Learn = () => {
  return (
    <main className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Learn Chess</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="basics.jpg" alt="Chess basics" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Chess Basics</h2>
            <p className="text-gray-700">Learn the fundamentals of chess, including piece movements and basic strategies.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="tactics.jpg" alt="Chess tactics" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Tactics and Puzzles</h2>
            <p className="text-gray-700">Improve your tactical skills with our collection of chess puzzles and exercises.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="openings.jpg" alt="Chess openings" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Opening Strategies</h2>
            <p className="text-gray-700">Explore popular chess openings and learn how to develop your pieces effectively.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Learn;