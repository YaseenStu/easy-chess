import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './components/ThemeContext';

//these images have been taken from pixaby.com
import LearnChessImage from './images/LearnChess.jpg';
import PracticeChessImage from './images/PracticeChess.jpg';
import ChessWithFriends from './images/ChessWithFriends.png';
import ChessAgainstAi from './images/ChessAgainstAi.png';

const HomePage = () => {
  const { theme } = useContext(ThemeContext);

  const userFeedbacks = [
    {
      id: 1,
      quote: "The platform is good to improve chess skills",
      author: "Participant A"
    },
    {
      id: 2,
      quote: "Good and user-friendly for beginners",
      author: "Participant B"
    },
    {
      id: 3,
      quote: "The tutorials are clear and very helpful",
      author: "Participant C"
    },
  ];

  const features = [
    {
      id: 1,
      title: "Play Against Computer",
      description: "Test your skills against computer opponent.",
      link: "/play-vs-computer",
      image: ChessAgainstAi
    },
    {
      id: 2,
      title: "Play with Friends",
      description: "Enjoy multiplayer chess with friends.",
      link: "/play-vs-player",
      image: ChessWithFriends
    },
    {
      id: 3,
      title: "Practice",
      description: "Practice your chess skills.",
      link: "/practice",
      image: PracticeChessImage
    },
    {
      id: 4,
      title: "Learn Chess",
      description: "Access tutorials to learn chess basics, tactics, and openings.",
      link: "/learn",
      image: LearnChessImage
    }
  ];

  return (
    <div className={`container mx-auto px-6 py-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to Easy Chess</h1>
        <p className="text-xl mb-8">Learn chess online with our instructional videos and by playing with AI and friends.</p>

        <div className="flex justify-center space-x-4 mb-8">
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

        <div className='text-center text-4xl font-bold mb-8'>
          <h1>Features</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {features.map(feature => (
            <Link
              key={feature.id}
              to={feature.link}
              className={`transition-transform transform hover:scale-105 p-6 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg shadow-lg`}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-64 h-64 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-bold mb-2">{feature.title}</h2>
              <p className="text-lg">{feature.description}</p>
            </Link>
          ))}
        </div>

        <div className='text-center text-4xl font-bold mb-8'>
          <h1>Target Audience</h1>
        </div>

        <div className={`p-6 mb-14 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg shadow-lg`}>
          <p className="text-lg">
            Easy Chess is perfect for anyone who wants to learn chess for free. Whether you want to play against a computer, enjoy games with friends, or practice your skills, our platform is ideal for players of all levels.
          </p>
        </div>

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
