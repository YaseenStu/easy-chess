import React, { useState, useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { useNavigate } from 'react-router-dom';
import SicilianDefense from '../images/sicilian.png';
import FrenchDefense from '../images/french.png';
import RuyLopezOpening from '../images/ruy-lopez.png';
import CaroKannDefense from '../images/caro-kann.png';
import ItalianGame from '../images/italian.png';
import ScandinavianDefense from '../images/scandinavian.png';
import BishopOpening from '../images/bishop.png';
import CatalanOpening from '../images/catalan.png';
import DutchDefence from '../images/dutch.png';
import EnglishOpening from '../images/english.png';
import FourKnightsGame from '../images/fourknights.png';
import KingsGambitAccepted from '../images/kingsgambitaccepted.png';
import KingsIndianAttack from '../images/kingsindianattack.png';
import KingsIndianDefense from '../images/kingsindiandefense.png';
import LondonSystem from '../images/londonsystem.png';
import PonzianiOpening from '../images/ponzianiopening.png';
import PircDefense from '../images/pircdefense.png';
import PhilidorDefense from '../images/philidordefense.png';
import NimzoIndianDefense from '../images/nimzoindian.png';
import QueensGambitAccepted from '../images/queengaccepted.png';
import QueensGambitDeclined from '../images/queengdeclined.png';
import RussianDefense from '../images/russdefense.png';
import TheBongcloud from '../images/bongcloud.png';
import VanGeetOpening from '../images/vangeet.png';
import ScothGame from '../images/scotch.png';
import ViennaGame from '../images/vienna.png';
import TrompowskyAttack from '../images/trompowsky.png';
import BenkoGambit from '../images/benko.png';
import RetiOpening from '../images/reti.png';
import BirdsOpening from '../images/birdsopening.png';
import PolishOpening from '../images/polishopening.png';
import GropOpening from '../images/grop.png';

const openings = [
    { name: "Sicilian Defense", image: SicilianDefense, route: "/openings/sicilian-defense" },
    { name: "French Defense", image: FrenchDefense, route: "/openings/french-defense" },
    { name: "Ruy López", image: RuyLopezOpening, route: "/openings/ruy-lopez" },
    { name: "Caro-Kann Defense", image: CaroKannDefense, route: "/openings/caro-kann-defense" },
    { name: "Italian Game", image: ItalianGame, route: "/openings/italian-game" },
    { name: "Scandinavian Defense", image: ScandinavianDefense, route: "/openings/scandinavian-defense" },
    { name: "Bishop's Opening", image: BishopOpening, route: "/openings/bishops-opening" },
    { name: "Catalan Opening", image: CatalanOpening, route: "/openings/catalan" },
    { name: "Dutch Defense", image: DutchDefence, route: "/openings/dutch-defense" },
    { name: "English Opening", image: EnglishOpening, route: "/openings/english-opening" },
    { name: "Four Knights Game", image: FourKnightsGame, route: "/openings/four-knights-game" },
    { name: "King's Gambit Accepted", image: KingsGambitAccepted, route: "/openings/kings-gambit-accepted" },
    { name: "King's Indian Attack", image: KingsIndianAttack, route: "/openings/kings-indian-attack" },
    { name: "King's Indian Defense", image: KingsIndianDefense, route: "/openings/kings-indian-defense" },
    { name: "London System", image: LondonSystem, route: "/openings/london-system" },
    { name: "Ponziani Opening", image: PonzianiOpening, route: "/openings/ponziani-opening" },
    { name: "Pirc Defense", image: PircDefense, route: "/openings/pirc-defense" },
    { name: "Philidor Defense", image: PhilidorDefense, route: "/openings/philidor-defense" },
    { name: "Nimzo-Indian Defense", image: NimzoIndianDefense, route: "/openings/nimzo-indian" },
    { name: "Queen's Gambit Accepted", image: QueensGambitAccepted, route: "/openings/queens-gambit-accepted" },
    { name: "Queen's Gambit Declined", image: QueensGambitDeclined, route: "/openings/queens-gambit-declined" },
    { name: "Russian Defense", image: RussianDefense, route: "/openings/russian-defense" },
    { name: "The Bongcloud", image: TheBongcloud, route: "/openings/bongcloud" },
    { name: "Van Geet Opening", image: VanGeetOpening, route: "/openings/van-geet-opening" },
    { name: "Scotch Game", image: ScothGame, route: "/openings/scotch-game" },
    { name: "Vienna Game", image: ViennaGame, route: "/openings/vienna-game" },
    { name: "Trompowsky Defense", image: TrompowskyAttack, route: "/openings/trompowsky-attack" },
    { name: "Benko Gambit", image: BenkoGambit, route: "/openings/benko-gambit" },
    { name: "Reti Opening", image: RetiOpening, route: "/openings/reti-opening" },
    { name: "Bird's Opening", image: BirdsOpening, route: "/openings/birds-opening" },
    { name: "Polish Opening", image: PolishOpening, route: "/openings/polish-opening" },
    { name: "Grob Opening", image: GropOpening, route: "/openings/grob-opening" }
];

const ChessOpenings = () => {
    const {theme} = useContext(ThemeContext);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredOpenings = searchTerm.length === 0 ? openings : openings.filter(opening =>
        opening.name.toLowerCase().includes(searchTerm.toLowerCase()));

        return (
            <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Chess Openings</h1>
                <input
                    type="text"
                    placeholder="Search"
                    className="mb-8 px-4 py-2 border rounded-lg w-full"
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredOpenings.length > 0 ? (
                        filteredOpenings.map((opening) => (
                            <div
                                key={opening.name}
                                className="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
                                onClick={() => navigate(opening.route)}
                            >
                                <img src={opening.image} alt={opening.name} className="w-full object-cover" />
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold text-gray-800">{opening.name}</h2>
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
    
    export default ChessOpenings;
