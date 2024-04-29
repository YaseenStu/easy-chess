import React, { useContext } from 'react';
import { ThemeContext } from './components/ThemeContext';
import AboutImage from './images/chess-about.png';

const About = () => {
  const { theme } = useContext(ThemeContext); 
  return (
    <div className={`container mx-auto px-6 py-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <h1 className="text-4xl font-bold mb-8">About Easy Chess</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-xl mb-4">
            Easy Chess is an online platform dedicated to teaching chess to players of all levels. Whether you're a beginner looking to learn the basics or an experienced player seeking to improve your skills, we've got you covered.
          </p>
          <p className="text-xl">
            Our interactive educational content is designed to make learning chess enjoyable and easy to learn. We believe that everyone can benefit from the mental stimulation and strategic thinking that chess provides.
          </p>
        </div>
        <div className='mx-auto px-6'>
          <img src={AboutImage} alt="Chess pieces" width={380} className="rounded-lg shadow-lg" />
          
        </div>
      </div>
    </div>
  );
};

export default About;
