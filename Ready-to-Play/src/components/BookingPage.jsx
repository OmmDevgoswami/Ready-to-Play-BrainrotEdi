import React, { useState } from "react";
import "./BookingPage.css";

const BookingPage = ({ venue }) => {
  const timeSlots = ["9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"]; // Example time slots

  return (
    <div className="booking-page">
      <h2>{venue.name}</h2>
      <p>{venue.details}</p>
      <h3>Available Time Slots</h3>
      <ul>
        {timeSlots.map((slot, index) => (
          <li key={index}>
            <button>{slot}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingPage;
