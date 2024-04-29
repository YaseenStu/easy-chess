import React, {useContext} from 'react';
import { ThemeContext } from '../ThemeContext';
const Deflection = () => {
    const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Deflection in Chess</h1>
      <div className="gap-8">
        <div className="flex-initial w-1/2">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/gHO0FWAztTc"
            title="Chess Deflection Tactics"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/2 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
            <strong>Deflection</strong> is a tactical theme in chess that targets a key defending piece, forcing it to leave its post. This can expose an enemy king to check, allow for a capture of material, or create other weaknesses in the opponent's position.
          </p>
          <p className="text-xl text-gray-700 mt-4">
            The tactic is typically executed by attacking a crucial piece that is defending another essential piece or area on the board. The defender is forced to move, which leads to the subsequent fallouts such as loss of material, a mating net, or a crucial pawn breakthrough.
          </p>
          <p className="text-xl text-gray-700 mt-4">
            A classic example of deflection is attacking a piece that defends an entry square or a piece that guards a key attacking piece, thereby weakening the opponent’s position strategically. Understanding and applying deflection can often lead to decisive gains in a game, turning a balanced situation into a winning one.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Deflection;
