import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import properties from "../data/properties.json";
import Filters from "./Filters";
import LocationSearch from "./LocationSearch";
import { useMap, useMapEvents } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

function ClickHandler({ addMarker }) {
  useMapEvents({
    click(e) {
      addMarker([e.latlng.lat, e.latlng.lng]);
    }
  });

  return null;
}

function MapMover({ position }) {
  const map = useMap();

  if (position) {
    map.setView(position, 12);
  }

  return null;
}

function MapView() {
  const [searchPosition, setSearchPosition] = useState(null);
  const [search, setSearch] = useState("");
  const [customMarkers, setCustomMarkers] = useState([]);

  const addMarker = (coords) => {
    setCustomMarkers([...customMarkers, coords]);
  };

  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Filters onSearch={setSearch} />
      <LocationSearch onLocationSelect={setSearchPosition} />

      <MapContainer
        center={[37.7749, -122.4194]}
        zoom={12}
        style={{ height: "90vh", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapMover position={searchPosition} />
        <ClickHandler addMarker={addMarker} />

        <MarkerClusterGroup>
          {filteredProperties.map((property) => (
            <Marker key={property.id} position={[property.lat, property.lng]}>
              <Popup>
                <strong>{property.title}</strong>
                <br />
                Price: {property.price}
              </Popup>
            </Marker>
          ))}

          {customMarkers.map((position, index) => (
            <Marker key={index} position={position}>
              <Popup>Custom Marker</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default MapView;