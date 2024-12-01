import React, { useState } from 'react';
import axios from 'axios';
import './Brainrot.css';

function Brainrot() {
  const [mood, setMood] = useState('');
  const [city, setCity] = useState('');
  const [venue, setVenue] = useState('');
  const [randomVenue, setRandomVenue] = useState(false);
  const [venues, setVenues] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!mood && !randomVenue) {
      setError('Please select a mood or choose to generate a random venue!');
      return;
    }

    setError(''); // Clear previous errors

    try {
      const params = {
        mood,
        city,
        venue: randomVenue ? '' : venue, // If randomVenue is true, leave venue empty
      };

      const response = await axios.get('http://127.0.0.1:5000/get-real-venues', { params });
      setVenues(response.data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch venues. Please try again!');
    }
  };

  return (
    <div className="container mt-5">
      <div className="header">
        <h1 className="text-center mb-4">Let the Randomness Takeover !!</h1>
        <h3 className="text-center">
          It's a weekend, and you are not sure about your plans? <br />
          Let us help you find the most perfect and fun place to make this weekend super fun and memorable for you!
        </h3>
      </div>
      {/* <h1 className="text-center mb-4">Let the Randomness Takeover !!</h1>
      <h3> It's a weekend and you are not sure about yours plans ? <br />Let us help you find the most perfect and fun place to make this weekend super fun and Memorable for You !! </h3> */}
      <form onSubmit={handleSearch}>
        <div className="mb-3">
          <label htmlFor="mood" className="form-label">Mood</label>
          <select
            id="mood"
            className="form-select"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          >
            <option value="">Select Mood</option>
            <option value="Happy">Happy</option>
            <option value="Excited">Excited</option>
            <option value="Rage Quit Energy">Rage Quit Energy</option>
            <option value="Hyper Competitive Maniac">Hyper Competitive Maniac</option>
            <option value="Just Here for Snacks">Just Here for Snacks</option>
            <option value="Chill Vibes Only">Chill Vibes Only</option>
            <option value="Adventurous">Adventurous</option>
            <option value="Stressed">Stressed</option>
            <option value="Romantic">Romantic</option>
            <option value="Bored">Bored</option>
            <option value="Energetic">Energetic</option>
            <option value="Curious">Curious</option>
            <option value="Sleepy">Sleepy</option>
            <option value="Creative Burst">Creative Burst</option>
            <option value="Party Animal">Party Animal</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="city" className="form-label">City (optional)</label>
          <input
            type="text"
            id="city"
            className="form-control"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter a city"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="venue" className="form-label">Specific Venue (optional)</label>
          <input
            type="text"
            id="venue"
            className="form-control"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            placeholder="Enter a venue name"
            disabled={randomVenue}
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="randomVenue"
            checked={randomVenue}
            onChange={() => setRandomVenue(!randomVenue)}
          />
          <label className="form-check-label" htmlFor="randomVenue">
            Generate a random venue
          </label>
        </div>

        <button type="submit" className="btn btn-primary w-100">Search Venues</button>
      </form>

      {error && <p className="text-danger mt-3">{error}</p>}

      <div className="mt-4">
        {venues.length > 0 ? (
          <div>
            <h2>Recommended Venues:</h2>
            <ul className="list-group">
              {venues.map((venue, index) => (
                <li key={index} className="list-group-item">
                  <strong>{venue.name}</strong> <br />
                  Address: {venue.address} <br />
                  Rating: {venue.rating}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No venues to display. Try searching with a different mood or city.</p>
        )}
      </div>
    </div>
  );
}

export default Brainrot;
