import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Loading from './components/Loading.jsx';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Game from './components/games/GuessTheNumber.jsx';
import VenueFinder from './components/VenueFinder.jsx';
import BookingPage from './components/BookingPage.jsx';
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
        <Route path="/game" element={<Game />} />
        <Route path="/venue-finder" element={<VenueFinder />} />
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
