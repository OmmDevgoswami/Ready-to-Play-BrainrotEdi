import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const GIPHY_API_KEY = "a1m2q1yRt9GAe19s9uX1vBR379Oq0kIF"; // Replace with your actual Giphy API key

const Respite = () => {
  const location = useLocation();
  const ticket = location.state || {}; // Fallback to an empty object if no state is passed
  const [gifUrl, setGifUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (ticket) {
      fetchGif();
    }
  }, [ticket]);

  const fetchGif = async () => {
    setLoading(true);
    setError("");
    const apiURL = `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}&tag=thank%20you&rating=G`;

    try {
      const response = await fetch(apiURL);
      const data = await response.json();

      if (data?.data?.images?.original?.url) {
        setGifUrl(data.data.images.original.url);
      } else {
        setError("No GIF found.");
      }
    } catch (err) {
      console.error("Error fetching GIF:", err);
      setError("Failed to fetch a GIF. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.ticket}>
        <h2>Your Ticket</h2>
        {ticket.event ? (
          <>
            <p>Event: <strong>{ticket.event}</strong></p>
            <p>Location: <strong>{ticket.location}</strong></p>
          </>
        ) : (
          <p>Loading ticket details...</p>
        )}
      </div>

      <div style={styles.memeContainer}>
        {loading ? (
          <p style={styles.loading}>Fetching a special message for you...</p>
        ) : error ? (
          <p style={styles.error}>{error}</p>
        ) : (
          <div>
            <p>Thank you for booking with us!</p>
            <img src={gifUrl} alt="Thank You GIF" style={styles.gif} />
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#fff",
  },
  ticket: {
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #4CAF50",
    borderRadius: "10px",
    maxWidth: "500px",
    backgroundColor: "#f0fff0",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  memeContainer: {
    marginTop: "30px",
  },
  loading: {
    fontSize: "18px",
    color: "#777",
  },
  error: {
    fontSize: "16px",
    color: "red",
  },
  gif: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  },
};

export default Respite;
