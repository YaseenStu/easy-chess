import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const DiscoveredAttack = () => {
    const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Discovered Attack in Chess</h1>
      <div className="gap-8">
        <div className="flex-initial w-1/2">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/-MSZCCuRz88"
            title="Chess Discovered Attacks Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/2 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
            A <strong>Discovered Attack</strong> occurs when one piece moves out of the way of another, unveiling a threat from the second piece. This type of attack can be extremely powerful, especially when it results in check or a threat of capture.
          </p>
          <p className="text-xl text-gray-700 mt-4">
            The effectiveness of a discovered attack often hinges on the dual threats posed by the moving piece and the piece it reveals. For example, moving a bishop that reveals a rook's line of attack can simultaneously create threats at two different points on the board.
          </p>
          <p className="text-xl text-gray-700 mt-4">
            To defend against a discovered attack, one must often anticipate the opponent’s possibilities and maintain a solid and protective position. Sometimes, however, the threat is unavoidable and may lead to significant material loss or checkmate.
          </p>
          <p className="text-xl text-gray-700 mt-4">
            Mastering discovered attacks involves understanding the coordination between your pieces and seeing multiple moves ahead, recognizing opportunities not just for the piece being moved but also for the piece it reveals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscoveredAttack;
