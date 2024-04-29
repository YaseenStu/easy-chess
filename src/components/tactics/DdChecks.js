import React, {useContext} from 'react';
import { ThemeContext } from '../ThemeContext';

const DoubleChecks = () => {
    const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Double Checks in Chess</h1>
      <div className="gap-8">
        <div className="flex-initial w-1/2">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/Bu43yfofAfA"
            title="Chess Double Checks"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/2 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
            A <strong>double check</strong> occurs in chess when two pieces check the opposing king simultaneously. This is one of the most powerful tactics in the game because the king must move; no other piece can block or capture to alleviate the check.
          </p>
          <p className="text-xl text-gray-700 mt-4">
            Double checks are highly disruptive because they force the opponent's king to move, often leading to significant positional advantages or even checkmate. They usually occur during a combination where one piece moves to reveal a check from another piece, simultaneously creating a second threat with the moving piece itself.
          </p>
          <p className="text-xl text-gray-700 mt-4">
            To employ this tactic effectively, players should look for opportunities where their pieces can coordinate to unleash this dual attack. Conversely, defending against double checks involves careful piece coordination and preventing the opponent from positioning their pieces in a way that could lead to such threats.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoubleChecks;
