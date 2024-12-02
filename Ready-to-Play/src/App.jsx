import { useState, version } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Loading from './components/Loading.jsx';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import Venue from './components/VenueFinder.jsx'
import Brainrot from './components/Brainrot.jsx'
// import BookingPage from './components/BookingPage.jsx';
import Respite from './components/Respite.jsx';
import DetailsPage from './components/DetailsPage.jsx';
import About from './components/About.jsx'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Game1 from './components/games/GuessTheNumber.jsx'
import Game2 from './components/games/TicTacToe.jsx'
import Game3 from './components/games/mathsmagic.jsx'
import './App.css';

const venues = [
  { id: 1, name: 'Mercedez Benz Stadium', city: "Atlanta", latitude: 33.7555, longitude: -84.4008, country: "United States", image: 'https://s44872.pcdn.co/wp-content/uploads/2018/06/CREDIT-MBS.jpg.webp' },
      { id: 2, name: 'Narendra Modi Stadium', city: "Ahmedabad", latitude: 23.0906, longitude: 72.5976,country: "India", image: 'https://panethos.wordpress.com/wp-content/uploads/2023/01/img_1614155148638_800-992765294.jpeg?w=1024' },
      { id: 3, name: 'Replay Lounge', city: "Alberta", latitude: 53.9333, longitude: -116.5765, country: "Canada", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFW33k21hLxV2E30ar7pmv2kE35jbUgNnFQ&s' },
      { id: 4, name: 'HyperX Arena', city: "Las Vegas", latitude: 36.1699, longitude: -115.1398, country: "United States", image: 'https://assets.simpleviewcms.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://lasvegas.simpleviewcrm.com/images/listings/original_hyperX-vmb_3840907B-912D-3346-A8DF7E61234AEB72-38408e8bec3f3f7.jpg'},
      { id: 5, name: 'Sofi Stadium', city: "Los Angeles", latitude: 33.9535, longitude: -118.3393,country: "United States", image: 'https://www.sofistadium.com/assets/img/thumb-0fab6f1c38.jpg' },
      { id: 6, name: 'Lusail Stadium', city: "Lusail", latitude: 25.3548, longitude: 51.4900,country: "Qatar", image: 'https://www.japantimes.co.jp/uploads/imported_images/uploads/2022/09/np_file_181882.jpeg'},
];

function AppContent() {
  const location = useLocation();
  const isLoading = location.pathname === '/';

  return (
    <>
      {!isLoading && <Header />}
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:id" element={<DetailsPage venues={venues}/>} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/brainrot" element={<Brainrot />} />
        <Route path="/about" element={<About />} />
        <Route path="/respite" element={<Respite/>} />
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
