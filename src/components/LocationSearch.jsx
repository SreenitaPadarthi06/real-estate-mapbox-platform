import { useState } from "react";

function LocationSearch({ onLocationSelect }) {
  const [location, setLocation] = useState("");

  const searchLocation = async () => {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${location}`
    );

    const data = await res.json();

    if (data.length > 0) {
      const lat = parseFloat(data[0].lat);
      const lon = parseFloat(data[0].lon);

      onLocationSelect([lat, lon]);
    }
  };

  return (
    <div style={{ padding: "10px", background: "white" }}>
      <input
        type="text"
        placeholder="Search city..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <button onClick={searchLocation}>Search</button>
    </div>
  );
}

export default LocationSearch;