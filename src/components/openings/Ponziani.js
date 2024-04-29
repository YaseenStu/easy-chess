import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Ponziani = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Ponziani Opening</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/TemLSMDKSMw"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          The Ponziani Opening, which begins with the moves 1.e4 e5 2.Nf3 Nc6 3.c3, seeks to 
          challenge Black's center while preparing to d4. It is one of the earliest chess openings, 
          and it can lead to extremely intricate games. The opening has fallen out of favor at the highest 
          levels due to early equality solutions for Black, but it remains a strong surprise weapon with opportunities for both sides.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ponziani;
