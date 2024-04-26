import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/About';
import Learn from './components/Learn';
import PlayVsComputer from './components/PlayVsComputer';
import PlayVsPlayer from './components/PlayVsPlayer';
import PracticePage from './components/PracticePage';
import SettingsIcon from './images/settings.png'; // Import your settings icon
import HomeIcon from './images/home.png'; // Import your home icon
import LearnIcon from './images/learn.png'; // Import your learn icon
import AboutIcon from './images/about.png'; // Import your about icon
import Logo from './images/logo.jpg'; // Import your logo

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow">
          <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            {/* Left side icons */}
            <div className="flex items-center space-x-4">
              <NavLink to="/" className="p-1"><img src={HomeIcon} alt="Home" className='h-8 w-8'/></NavLink>
              <NavLink to="/learn" className="p-1"><img src={LearnIcon} alt="Learn" className='h-8 w-8'/></NavLink>
              <NavLink to="/about" className="p-1"><img src={AboutIcon} alt="About" className='h-8 w-8'/></NavLink>
            </div>

            {/* Center logo */}
            <div className="flex items-center justify-center">
              <img src={Logo} alt="Easy Chess" className="rounded-full bg-gray-200 h-12 w-12 flex items-center justify-center" />
              <span className="font-bold text-xl ml-2">Easy Chess</span>
            </div>

            {/* Right side settings icon */}
            <div>
              <NavLink to="/settings"><img src={SettingsIcon} alt="Settings" className="h-8 w-8" /></NavLink>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/play-vs-computer" element={<PlayVsComputer />} />
          <Route path="/play-vs-player" element={<PlayVsPlayer />} />
          <Route path="/practice" element={<PracticePage />} />
        </Routes>

        <footer className="bg-white border-t border-gray-400 shadow">
          <div className="container mx-auto px-6 py-4">
            <div className="text-center">
              <p className="text-gray-600">&copy; 2024 Easy Chess. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>

  );
};

export default App;
