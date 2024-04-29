import React, {useContext} from 'react';
import { ThemeContext } from './ThemeContext';
const ChessBasics = () => {
  const { theme } = useContext(ThemeContext); 
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Chess Basics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <VideoSection
          title="Introduction to Chess"
          description="Learn what chess is all about and understand the objectives of the game."
          videoId="fwRH2m_2Yl4"
        />
        <VideoSection
          title="How Each Chess Piece Moves"
          description="Detailed explanations of how each chess piece moves, with focus on unique movements like the knight's L-shape move."
          videoId="i3CbQ_YNBNc"
        />
        <VideoSection
          title="Basic Chess Strategies"
          description="Discover basic opening strategies and tactics like the pin, fork, and skewer to gain an advantage over your opponent."
          videoId="2y_jUGO5agg"
        />
        <VideoSection
          title="Special Rules"
          description="Understand special chess rules such as castling, en passant, and promotion."
          videoId="Pk1Y2qvieX0"
        />
      </div>
    </div>
  );
};

const VideoSection = ({ title, description, videoId }) => {
  return (
    <div className="bg-white rounded shadow p-4 hover:scale-105 transition transform duration-300 ease-in-out">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ChessBasics;
