import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from './components/Loading.jsx';
import HomePage from './components/Homepage.jsx';
import VenueFinder from './components/VenueFinder.jsx';
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/VenueFinder" element ={<VenueFinder />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
