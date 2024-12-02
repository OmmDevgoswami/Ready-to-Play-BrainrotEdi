import React from "react";
import "./Homepage.css"; 
import imgPlayer from '../assets/Resources/gaming_enthusiast_image.jpg'; 

const Home = () => {
  return (
    <main className="home-container">
      
      <section className="text-section">
        <h1 className="title">Welcome to Ready to Play....</h1>
        <p className="tagline">
        Striking out in love? No worries—it's game time! Book the perfect venue and let us match you with your true soulmate: a killer gaming experience!
        Your one-stop solution for booking venues and finding your perfect match for your gaming !
        </p>

        
        <div className="button-group">
          <button className="filter-button"><a href="https://www.ign.com/news">⚡Hottest Gaming News </a></button>
          <button className="filter-button"><a href="https://escharts.com/upcoming-tournaments">🎮 E-sports Charts</a></button>
          <button className="filter-button"><a href="https://www.thehindu.com/sport/"> 🏅 Trendy Sports News </a></button>
        </div>
      </section>

      
      <section className="image-section">
        <img
          // src={imgPlayer} 
          src={imgPlayer} 
          alt="Venue Preview"
          className="image"
        />
      </section>
    </main>
  );
};

export default Home;
