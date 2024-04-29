import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './components/ThemeContext';

const HomePage = () => {
  const { theme } = useContext(ThemeContext); 
  const userFeedbacks = [
    {
      id:1,
      quote: "The platform is good to improve chess skills",
      author: "Participant A"
    },
    {
      id:2,
      quote: "Good and user-friendly for beginners",
      author: "Participant B"
    },
    {
      id:3,
      quote: "The toturials are clear and very helpful",
      author: "Participant C"
    },
  ]

  return (
    <div className={`container mx-auto px-6 py-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to Easy Chess</h1>
        <p className="text-xl mb-8">Learn chess online with our instructional videos and by playing with AI and friends.</p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/play-vs-computer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
          >
            Player Vs Computer
          </Link>
          <Link
            to="/play-vs-player"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
          >
            Multi-Player
          </Link>
          <Link
            to="/practice"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
          >
            Practice
          </Link>
        </div>
        <div className='text-center text-4xl font-bold mb-14'></div>
        <div className='text-center text-4xl font-bold mb-8'>
          <h1>User Feedback</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {userFeedbacks.map(feedback => (
            <div key={feedback.id} className={`p-6 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg shadow-lg`}>
              <p className="text-lg">{feedback.quote}</p>
              <p className="text-sm mt-4 italic">{feedback.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
