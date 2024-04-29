import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Skewers = () => {
    const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Mastering Skewers in Chess</h1>
      <div className="gap-8">
        <div className="flex-initial w-1/2">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/vgmcQantPe0"
            title="Chess Skewers Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/2 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
            A <strong>skewer</strong> is a tactical motif in chess similar to a pin, but the roles of the attacked pieces are reversed. In a skewer, a valuable piece is directly attacked, and moving it exposes a less valuable piece behind it. Skewers can force the opponent to make undesirable trades and lose material.
          </p>
          <p className="text-xl text-gray-700 mt-4">
            Skewers commonly occur along lines that bishops, rooks, and queens can control, such as diagonals, ranks, and files. The key to executing a skewer is aligning the opponent's pieces such that moving the more valuable piece at the front will lose the less valuable one behind it.
          </p>
          <p className="text-xl text-gray-700 mt-4">
            Effective use of skewers requires foresight and positioning. Players should look for opportunities where their long-range pieces can capitalize on aligned enemy pieces. Always be on the lookout for the king and queen or rook alignments, which are prime targets for skewers.
          </p>
          <p className="text-xl text-gray-700 mt-4">
            Defending against skewers involves careful piece coordination and avoiding alignments of valuable pieces along the same line. Sometimes, it's possible to counter a skewer threat by interposing another piece, changing the alignment, or escaping the line of attack with a tactical response.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skewers;
