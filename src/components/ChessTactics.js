import React from 'react';
import { useNavigate } from 'react-router-dom';

//following images have been taken from wikipedia
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
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Chess Tactics</h1>
      <p className="text-xl text-gray-700 mb-8">
        Learn key tactical concepts like forks, pins, skewers, and more to enhance your gameplay.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tactics.map((tactic) => (
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
        ))}
      </div>
    </div>
  );
};

export default ChessTactics;
