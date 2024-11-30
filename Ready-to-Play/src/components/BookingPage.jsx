import React, { useState } from "react";
import "./BookingPage.css";

const BookingPage = () => {
  const [hoveredLocation, setHoveredLocation] = useState(null);

  const locations = [
    { id: 1, name: "Location A", timeSlots: ["9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"] },
    { id: 2, name: "Location B", timeSlots: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"] },
  ];

  return (
    <div className="booking-page">
      <h1>Book a Venue</h1>
      <div className="locations">
        {locations.map((location) => (
          <div
            key={location.id}
            className="location-item"
            onMouseEnter={() => setHoveredLocation(location)}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            {location.name}
            {hoveredLocation?.id === location.id && (
              <div className="hover-popup">
                <h3>{location.name}</h3>
                <ul>
                  {location.timeSlots.map((slot, index) => (
                    <li key={index}>
                      <button onClick={() => window.location.href = `/details/${location.id}?time=${slot}`}>
                        {slot}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingPage;