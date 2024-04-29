import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Grob = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Grob Opening</h1>
            <div className="gap-8">
                <div className="flex-initial w-2/3">
                    <iframe
                        width="100%"
                        height="450"
                        src="https://www.youtube.com/embed/6u60XEgTAAg"
                        title="Sicilian Defense Tutorial"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
                    <p className="text-xl text-gray-700">
                    The Grob Opening, one of the more unusual and uncommon opening moves, 
                    begins with 1.g4. Its goal is to disturb the standard pawn structure and piece 
                    development from the very first move. At the highest levels of play, it is uncommon, 
                    but it can result in very crisp games with opportunities for both players, usually in 
                    favor of the well-prepared player.                    
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Grob;
