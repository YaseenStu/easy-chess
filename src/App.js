import React, {useContext} from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { ThemeContext, ThemeProvider } from './components/ThemeContext';
import HomePage from './HomePage';
import About from './About';
import Learn from './Learn';
import Settings from './components/SettingsPage'
import PlayVsComputer from './components/PlayVsComputer';
import PlayVsPlayer from './components/PlayVsPlayer';
import PracticePage from './components/PracticePage';
import ChessBasics from './components/ChessBasics';
import ChessTactics from './components/ChessTactics';
import ChessOpenings from './components/ChessOpenings ';

import Fork from './components/tactics/Fork';
import DoubleChecks from './components/tactics/DdChecks';
import Decoy from './components/tactics/Decoy';
import Deflection from './components/tactics/Deflection';
import DiscoveredAttack from './components/tactics/DisAttacks';
import Overloading from './components/tactics/Overloading';
import Pins from './components/tactics/Pins';
import Skewers from './components/tactics/Skewers';

import SicilianDefense from './components/openings/SicilianDefence';
import FrenchDefense from './components/openings/FrenchDefense';
import Benko from './components/openings/Benko';
import Bird from './components/openings/Bird';
import BishopOpening from './components/openings/BishopOpening';
import Bongcloud from './components/openings/Bongcloud';
import CaroKannDefense from './components/openings/CaroKannDefense';
import Catalan from './components/openings/Catalan';
import Dutch from './components/openings/Dutch';
import EnglishOpening from './components/openings/EnglishOpening';
import FourKnightsGame from './components/openings/FourKnightsGame';
import Grob from './components/openings/Grob';
import ItalianGame from './components/openings/ItalianGame';
import KingGAccepted from './components/openings/KingGAccepted';
import KingIndianAttack from './components/openings/KingIndianAttack';
import KingIndianDefense from './components/openings/KingIndianDefense';
import LondonSystem from './components/openings/LondonSystem';
import NimzoIndian from './components/openings/NimzoIndian';
import Philidor from './components/openings/Philidor';
import Pirc from './components/openings/Pirc';
import Polish from './components/openings/Polish';
import Ponziani from './components/openings/Ponziani';
import QueenGAccepted from './components/openings/QueenGAccepted';
import QueenGDeclined from './components/openings/QueenGDeclined';
import Reti from './components/openings/Reti';
import RussDef from './components/openings/Russ';
import RuyLopez from './components/openings/RuyLopez';
import ScandinavianDefense from './components/openings/ScandinavianDefense';
import Scotch from './components/openings/Scotch';
import Trompowsky from './components/openings/Trompowsky';
import VanGeet from './components/openings/VanGeet';
import Vienna from './components/openings/Vienna';

import SettingsIcon from './images/settings.png';
import HomeIcon from './images/home.png';
import LearnIcon from './images/learn.png';
import AboutIcon from './images/about.png';
import Logo from './images/logo.jpg';
import MoonIcon from './images/moon.png';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <ApplicationContent />
      </Router>
    </ThemeProvider>

  );
};

const ApplicationContent = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
    <nav className="bg-white shadow">
      {/* styling navbar */}
      <div className={`${theme === 'dark' ? 'bg-gray-600' : 'bg-white'} shadow`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">

        <div className="flex items-center space-x-4 ">
          <NavLink to="/" className="p-1"><img src={HomeIcon} alt="Home" className='h-8 w-8' /></NavLink>
          <NavLink to="/learn" className="p-1"><img src={LearnIcon} alt="Learn" className='h-8 w-8' /></NavLink>
          <NavLink to="/about" className="p-1"><img src={AboutIcon} alt="About" className='h-8 w-8' /></NavLink>
        </div>

        <div className="flex items-center justify-center">
          <img src={Logo} alt="Easy Chess" className="rounded-full bg-gray-200 h-12 w-12 flex items-center justify-center" />
          <span className="font-bold text-xl ml-2">Easy Chess</span>
        </div>

        <div className='flex item-center space-x-4'>
          <NavLink to="/settings"><img src={SettingsIcon} alt="Settings" className="h-8 w-8" /></NavLink>
          <button onClick={toggleTheme}>
                <img src={MoonIcon} alt="Toggle Theme" className="h-8 w-8" />
              </button>
        </div>
      </div>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/settings" element={<Settings />} />

      <Route path="/play-vs-computer" element={<PlayVsComputer />} />
      <Route path="/play-vs-player" element={<PlayVsPlayer />} />
      <Route path="/practice" element={<PracticePage />} />

      <Route path="/chess-basics" element={<ChessBasics />} />

      <Route path="/chess-tactics" element={<ChessTactics />} />
      <Route path="/tactics/forks" element={<Fork />} />
      <Route path="/tactics/pins" element={<Pins />} />
      <Route path="/tactics/skewers" element={<Skewers />} />
      <Route path="/tactics/discovered-attacks" element={<DiscoveredAttack />} />
      <Route path="/tactics/double-checks" element={<DoubleChecks />} />
      <Route path="/tactics/overloading" element={<Overloading />} />
      <Route path="/tactics/deflection" element={<Deflection />} />
      <Route path="/tactics/decoy" element={<Decoy />} />

      <Route path="/chess-openings" element={<ChessOpenings />} />

      <Route path="/openings/sicilian-defense" element={<SicilianDefense />} />
      <Route path="/openings/french-defense" element={<FrenchDefense />} />
      <Route path="/openings/english-opening" element={<EnglishOpening />} />
      <Route path="/openings/ruy-lopez" element={<RuyLopez />} />
      <Route path="/openings/caro-kann-defense" element={<CaroKannDefense />} />
      <Route path="/openings/italian-game" element={<ItalianGame />} />
      <Route path="/openings/scandinavian-defense" element={<ScandinavianDefense />} />
      <Route path="/openings/bishops-opening" element={<BishopOpening />} />
      <Route path="/openings/catalan" element={<Catalan />} />
      <Route path="/openings/dutch-defense" element={<Dutch />} />
      <Route path="/openings/four-knights-game" element={<FourKnightsGame />} />
      <Route path="/openings/kings-gambit-accepted" element={<KingGAccepted />} />
      <Route path="/openings/kings-indian-attack" element={<KingIndianAttack />} />
      <Route path="/openings/kings-indian-defense" element={<KingIndianDefense />} />
      <Route path="/openings/london-system" element={<LondonSystem />} />
      <Route path="/openings/ponziani-opening" element={<Ponziani />} />
      <Route path="/openings/pirc-defense" element={<Pirc />} />
      <Route path="/openings/philidor-defense" element={<Philidor />} />
      <Route path="/openings/nimzo-indian" element={<NimzoIndian />} />
      <Route path="/openings/queens-gambit-accepted" element={<QueenGAccepted />} />
      <Route path="/openings/queens-gambit-declined" element={<QueenGDeclined />} />
      <Route path="/openings/russian-defense" element={<RussDef />} />
      <Route path="/openings/bongcloud" element={<Bongcloud />} />
      <Route path="/openings/van-geet-opening" element={<VanGeet />} />
      <Route path="/openings/scotch-game" element={<Scotch />} />
      <Route path="/openings/vienna-game" element={<Vienna />} />
      <Route path="/openings/trompowsky-attack" element={<Trompowsky />} />
      <Route path="/openings/benko-gambit" element={<Benko />} />
      <Route path="/openings/reti-opening" element={<Reti />} />
      <Route path="/openings/birds-opening" element={<Bird />} />
      <Route path="/openings/polish-opening" element={<Polish />} />
      <Route path="/openings/grob-opening" element={<Grob />} />

    </Routes>

    <footer className={`${theme === 'dark' ? 'bg-gray-600' : 'bg-white'} border-t border-gray-400 shadow`}>
      <div className="container mx-auto px-6 py-4">
        <div className="text-center">
          <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>&copy; 2024 Easy Chess. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>

  );
}



export default App;
