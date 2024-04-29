import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

//these images have been taken from wikipedia
import ForkImage from '../images/fork.png';
import PinImage from '../images/pin.png';
import SkewerImage from '../images/skewer.png';
import DiscoveredAttackImage from '../images/discattack.png';
import DoubleCheckImage from '../images/ddcheck.png';
import OverloadingImage from '../images/overloading.png';
import DeflectionImage from '../images/deflection.png';
import DecoyImage from '../images/decoy.png';

const tactics = [
  { name: "Forks", description: "Using one piece to attack two or more enemy pieces simultaneously.", image: ForkImage, route: "/tactics/forks" },
  { name: "Pins", description: "Restricting the movement of an enemy piece to create vulnerabilities.", image: PinImage, route: "/tactics/pins" },
  { name: "Skewers", description: "An attack that targets a valuable piece behind a less valuable one.", image: SkewerImage, route: "/tactics/skewers" },
  { name: "Discovered Attacks", description: "An attack revealed when one piece moves out of the way of another.", image: DiscoveredAttackImage, route: "/tactics/discovered-attacks" },
  { name: "Double Checks", description: "A powerful tactic where two pieces check the king simultaneously, often leading to winning material or checkmating.", image: DoubleCheckImage, route: "/tactics/double-checks" },
  { name: "Overloading", description: "Forcing a piece to defend more than one point, thus overloading its defensive capabilities.", image: OverloadingImage, route: "/tactics/overloading" },
  { name: "Deflection", description: "Forcing an opposing piece to move away from defending a crucial square.", image: DeflectionImage, route: "/tactics/deflection" },
  { name: "Decoy", description: "Luring an opponent's piece into a detrimental position.", image: DecoyImage, route: "/tactics/decoy" },
];

const ChessTactics = () => {
  const {theme} = useContext(ThemeContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTactics = searchTerm.length === 0 ? tactics : tactics.filter(tactic =>
    tactic.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Chess Tactics</h1>
      <input
        type="text"
        placeholder="Search Tactics"
        className="mb-8 px-4 py-2 border rounded-lg w-full"
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTactics.length > 0 ? (
          filteredTactics.map((tactic) => (
            <div
              key={tactic.name}
              className="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              onClick={() => navigate(tactic.route)}
            >
              <img src={tactic.image} alt={tactic.name} className="w-full object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">{tactic.name}</h2>
                <p className="text-gray-600">{tactic.description}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center">
            <p className="text-xl">No Results</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChessTactics;
