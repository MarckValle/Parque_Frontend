import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";

// Icono de marcador personalizado (Leaflet no carga el default sin configuración)
const customIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Componente para forzar redibujo del mapa
function ResizeHandler() {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 200);
  }, [map]);
  return null;
}

const VisitorsMap = () => {
  const [visitors, setVisitors] = useState([]);
  const position = [20, 0]; // Centro global del mapa
  const zoom = 2;

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/admin_netzahualcoyotl/location_map/");
        setVisitors(response.data);
      } catch (error) {
        console.error("Error al obtener los datos de visitantes:", error);
      }
    };

    fetchVisitors();
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MapContainer
        center={position}
        zoom={zoom}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
      >
        <ResizeHandler />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Marcadores dinámicos desde la API */}
        {visitors.map((v, index) => (
          <Marker
            key={index}
            position={[v.latitude, v.longitude]}
            icon={customIcon}
          >
            <Popup>
              <strong>{v.city}</strong> <br />
              {v.country} <br />
              <small>Visitas: {v.visits}</small>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default VisitorsMap;
