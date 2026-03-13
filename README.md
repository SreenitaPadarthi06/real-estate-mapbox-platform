# Real Estate Map Platform

An interactive map-based real estate application that allows users to explore properties, search locations, and interact with markers directly on the map.

---

## Features

* 📍 Display property markers on an interactive map
* 🔎 Search properties by name
* 🌍 Search cities using geocoding
* ➕ Click anywhere on the map to add custom markers
* 🧩 Marker clustering for improved performance
* 📱 Responsive full-screen map interface

---

## Technologies Used

* **React**
* **Leaflet**
* **React Leaflet**
* **OpenStreetMap**
* **React Leaflet Cluster**

---

## Installation

Clone the repository:

```
git clone https://github.com/SreenitaPadarthi06/real-estate-mapbox-platform.git
```

Navigate to the project directory:

```
cd real-estate-mapbox-platform
```

Install dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

The application will run at:

```
http://localhost:5173
```

---

## Project Structure

```
src
 ├── components
 │   ├── MapView.jsx
 │   ├── Filters.jsx
 │   └── LocationSearch.jsx
 │
 ├── data
 │   └── properties.json
 │
tests
 └── integration
```

---

## Docker Setup

Build the Docker image:

```
docker build -t real-estate-map .
```

Run the container:

```
docker run -p 5173:5173 real-estate-map
```

---

## Author

P.K.Sreenita
