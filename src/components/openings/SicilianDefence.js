import React from 'react';

const SicilianDefense = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Sicilian Defense</h1>
      <iframe
        width="50%"
        height="300" // Adjust height as needed
        src="https://www.youtube.com/embed/[VideoID]" // Replace [VideoID] with the actual ID
        title="Sicilian Defense Tutorial"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p className="text-xl text-gray-700 mt-4">
        The Sicilian Defense is one of the most popular and best-scoring responses to White's first move 1.e4. Learn about the key concepts, variations, and strategies to play this opening effectively.
      </p>
    </div>
  );
};

export default SicilianDefense;
