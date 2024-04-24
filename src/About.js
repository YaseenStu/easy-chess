import React from 'react';

const About = () => {
  return (
    <main className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">About Easy Chess</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-xl text-gray-700 mb-4">
            Easy Chess is an online platform dedicated to teaching chess to players of all levels. Whether you're a beginner looking to learn the basics or an experienced player seeking to improve your skills, we've got you covered.
          </p>
          <p className="text-xl text-gray-700">
            Our interactive tutorials and puzzles are designed to make learning chess engaging and enjoyable. We believe that everyone can benefit from the mental stimulation and strategic thinking that chess provides.
          </p>
        </div>
        <div>
          <img src="chess-about.jpg" alt="Chess pieces" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </main>
  );
};

export default About;