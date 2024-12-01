from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

# Replace this with your actual Google Places API Key
GOOGLE_PLACES_API_KEY = "AIzaSyBiGWGGHbTi6CJDUehyocyoVsoUkCKQ5V4"

# Moods-to-venue mapping for dynamic queries
MOOD_TO_VENUE = {
    "Happy": "football stadium",
    "Excited": "formula 1 race track",
    "Rage Quit Energy": "paintball arena",
    "Hyper Competitive Maniac": "e-sports arena",
    "Just Here for Snacks": "stadium food court",
    "Chill Vibes Only": "bowling alley",
    "Adventurous": "motocross track",
    "Stressed": "archery range",
    "Romantic": "ice skating rink",
    "Bored": "virtual reality gaming center",
    "Energetic": "trampoline park",
    "Curious": "escape room challenge",
    "Sleepy": "sports bar",
    "Creative Burst": "laser tag arena",
    "Party Animal": "go-kart racing arena"
}

def get_coordinates_from_city(city_name):
    """
    Use Google Geocoding API to get coordinates for a given city.
    """
    geocode_url = f"https://maps.googleapis.com/maps/api/geocode/json"
    params = {"address": city_name, "key": GOOGLE_PLACES_API_KEY}
    response = requests.get(geocode_url, params=params)
    data = response.json()

    if data["results"]:
        location = data["results"][0]["geometry"]["location"]
        return f"{location['lat']},{location['lng']}"
    return None

@app.route('/get-real-venues', methods=['GET'])
def get_real_venues():
    mood = request.args.get('mood')
    city_name = request.args.get('city')  # Optional city input
    location = request.args.get('location', "28.6139,77.2090")  # Default: Delhi, India
    radius = request.args.get('radius', 15000)  # Default: 15 km

    # Update location based on city input
    if city_name:
        location = get_coordinates_from_city(city_name) or location

    # Determine venue type based on mood
    venue_type = MOOD_TO_VENUE.get(mood, "park")  # Default to "park" if mood not found

    # Google Places API query
    url = f"https://maps.googleapis.com/maps/api/place/textsearch/json"
    params = {
        "query": venue_type,
        "location": location,
        "radius": radius,
        "key": GOOGLE_PLACES_API_KEY
    }
    response = requests.get(url, params=params)
    data = response.json()

    # Extract relevant venue information
    venues = [
        {
            "name": place["name"],
            "address": place.get("formatted_address", "Address not available"),
            "rating": place.get("rating", "No rating"),
        }
        for place in data.get("results", [])[:5]  # Limit to top 5 venues
    ]

    # Fallback message if no venues are found
    if not venues:
        return jsonify({"message": f"No venues found for mood '{mood}' in your area. Try a different mood or city!"})

    return jsonify(venues)

if __name__ == "__main__":
    app.run(debug=True)
