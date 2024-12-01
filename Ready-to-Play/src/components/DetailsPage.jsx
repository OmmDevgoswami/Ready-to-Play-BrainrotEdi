import React from "react";
import { useParams } from "react-router-dom";
import "./DetailsPage.css";

const DetailsPage = ({ venues }) => {
  const { id } = useParams(); // finds venue via url
  const venue = venues.find((v) => v.id === parseInt(id)); // finds venue depending on id

  if (!venue) {
    return <h2>Venue not found!</h2>; 
  }

  return (
    <div className="details-page">
      <div className="image-section">
        <img src={venue.image} alt={venue.name} />
      </div>
      <div className="info-section">
        <h2>{venue.name}</h2>
        <p>City: {venue.city}</p>
        <p>Country: {venue.country}</p>
        <ul>
          <li>Great location</li>
          <li>Spacious seating</li>
          <li>Modern amenities</li>
          <li>Ample parking</li>
        </ul>
        <button className="book-button">Book Now</button>
      </div>
      <div className="map-section">
        <h3>Location</h3>
        <div className="map-image">
          <img
            src={`https://maps.googleapis.com/maps/api/staticmap?center=${venue.city},${venue.country}&zoom=13&size=600x300&maptype=roadmap`}
            alt={`Map of ${venue.city}`}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;