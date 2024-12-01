import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Loading from './components/Loading.jsx';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import Venue from './components/VenueFinder.jsx'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Game1 from './components/games/GuessTheNumber.jsx'
import Game2 from './components/games/TicTacToe.jsx'
import Game3 from './components/games/mathsmagic.jsx'
import './App.css';

function AppContent() {
  const location = useLocation();
  const isLoading = location.pathname === '/' ;

  return (
    <>
      {!isLoading && <Header />}
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/buffer1" element={<Game1 />} />
        <Route path="/buffer2" element={<Game2 />} />
        <Route path="/buffer3" element={<Game3 />} />
      </Routes>
      {!isLoading && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
