import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from './components/Loading.jsx'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Loading />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
