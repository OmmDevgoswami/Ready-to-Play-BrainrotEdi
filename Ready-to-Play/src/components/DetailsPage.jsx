import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./DetailsPage.css";

const DetailsPage = ({ venues }) => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const time = queryParams.get("time");
  const venue = venues.find((v) => v.id === parseInt(id));

  // Array of routes for the booking pages
  const bookingRoutes = ["/buffer1", "/buffer2", "/buffer3"];
  // const bookingRoutes = ["/respite"];

  // Function to handle booking button click
  const handleBooking = () => {
    // Select a random route from the array
    const randomRoute = bookingRoutes[Math.floor(Math.random() * bookingRoutes.length)];
    // Navigate to the chosen route
    navigate(randomRoute, { state: { event: venue.name, location: venue.city } });
  };

  if (!venue) {
    return <h2>Venue not found!</h2>;
  }

  return (
    <div className="details-page">
      <div className="venue-details">
        <div className="image-section">
          <img src={venue.image} alt={venue.name} />
        </div>
        <div className="info-section">
          <h2>{venue.name}</h2>
          <p><strong>City:</strong> {venue.city}</p>
          <p><strong>Country:</strong> {venue.country}</p>
          <ul>
            <li>Great location</li>
            <li>Spacious seating</li>
            <li>Modern amenities</li>
            <li>Ample parking</li>
          </ul>
          <button className="book-button" onClick={handleBooking}>
            Book Now
          </button>
        </div>
      </div>
      <div className="map-section">
        <h3>Location</h3>
        <div className="map-image">
          <img
            src={`https://maps.googleapis.com/maps/api/staticmap?center=${venue.latitude},${venue.longitude}&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7C${venue.latitude},${venue.longitude}&key=AIzaSyApc7QOlhXLQf7p4QyB37MO6xbis5ipWAM`}
            alt={`Map of ${venue.city}`}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
