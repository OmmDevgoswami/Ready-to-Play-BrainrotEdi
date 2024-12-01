import React from "react";
import { useState } from "react";
import BookingPage from "./BookingPage";
import { Link } from  "react-router-dom";
import "./VenueFinder.css";


function VenueFinder() {
    const venues = [
      { id: 1, name: 'Mercedez Benz Stadium', city: "Atlanta", latitude: 33.7555, longitude: -84.4008, country: "United States", image: 'https://s44872.pcdn.co/wp-content/uploads/2018/06/CREDIT-MBS.jpg.webp' },
      { id: 2, name: 'Narendra Modi Stadium', city: "Ahmedabad", latitude: 23.0906, longitude: 72.5976,country: "India", image: 'https://panethos.wordpress.com/wp-content/uploads/2023/01/img_1614155148638_800-992765294.jpeg?w=1024' },
      { id: 3, name: 'Replay Lounge', city: "Alberta", latitude: 53.9333, longitude: -116.5765, country: "Canada", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFW33k21hLxV2E30ar7pmv2kE35jbUgNnFQ&s' },
      { id: 4, name: 'HyperX Arena', city: "Las Vegas", latitude: 36.1699, longitude: -115.1398, country: "United States", image: 'https://assets.simpleviewcms.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://lasvegas.simpleviewcrm.com/images/listings/original_hyperX-vmb_3840907B-912D-3346-A8DF7E61234AEB72-38408e8bec3f3f7.jpg'},
      { id: 5, name: 'Sofi Stadium', city: "Los Angeles", latitude: 33.9535, longitude: -118.3393,country: "United States", image: 'https://www.sofistadium.com/assets/img/thumb-0fab6f1c38.jpg' },
      { id: 6, name: 'Lusail Stadium', city: "Lusail", latitude: 25.3548, longitude: 51.4900,country: "Qatar", image: 'https://www.japantimes.co.jp/uploads/imported_images/uploads/2022/09/np_file_181882.jpeg'},
    ];

    //tracks hovered venue with state
    const [hoveredVenue, setHoveredVenue] = useState(null);
        return (
        <div className="venue-finder">
          <h1>Find Your Venue!</h1>
          <div className="venue-grid">
            {venues.map((venue) => (
              <div key={venue.id} className="venue-box" onMouseEnter={() => setHoveredVenue(venue)} onMouseLeave={() => setHoveredVenue(null)}> 
                <Link to= {`/details/${venue.id}?time = 12:00 PM`}>
                <img src={venue.image} alt={venue.name} className="venue-image" />
                <p className="venue-name">{venue.name}</p>
                </Link>
                <p className= "venue-location"> {venue.city}, {venue.country}</p>
                {hoveredVenue?.id === venue.id && (<div className = "booking-popup"> <BookingPage venue = {hoveredVenue} /> </div> )}
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    export default VenueFinder;