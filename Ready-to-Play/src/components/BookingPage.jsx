import React from "react";
import "./BookingPage.css";

const BookingPage = ({ venue }) => {
  const timeSlots = ["9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"]; // Example time slots

  return (
    <div className="booking-page">
      <h3>Book {venue.name}</h3>
      <ul className="time-slots">
        {timeSlots.map((slot, index) => (
          <li key={index}>
            <button onClick={() => window.location.href = `/details/${venue.id}?time=${slot}`}>
              {slot}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingPage;
