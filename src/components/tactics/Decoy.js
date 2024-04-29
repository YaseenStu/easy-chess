import React, {useContext} from 'react';
import {ThemeContext} from '../ThemeContext';
const Decoy = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Decoy in Chess</h1>
      <div className="gap-8">
        <div className="flex-initial w-1/2">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/2tZKhJfuruY"
            title="Chess Decoy Tactics"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/2 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
            A <strong>decoy</strong> is a tactical maneuver in chess aimed at drawing a piece to a particular square, where it becomes vulnerable to attack or creates a disadvantageous situation for the opponent. Decoys are used to force key pieces into unfavorable positions, often leading to captures, checkmates, or significant material advantage.
          </p>
          <p className="text-xl text-gray-700 mt-4">
            The essence of the decoy tactic lies in compelling an opponent to move a piece where it can be attacked more easily or where it must perform a defensive duty that disrupts the opponent's position. This can be particularly effective in setting up forks, pins, and other tactics.
          </p>
          <p className="text-xl text-gray-700 mt-4">
            Mastering decoys requires a good understanding of the opponent’s potential reactions and the ability to foresee sequences of moves that can maximize the effectiveness of this tactic. It often works best when combined with other threats, making it harder for the opponent to address all threats simultaneously.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Decoy;
