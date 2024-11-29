import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Loading from './components/Loading.jsx';
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  const location = useLocation();
  const isLoading = location.pathname === '/';

  return (
    <>
      {!isLoading && <Header />}
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      {!isLoading && <Footer />}
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
