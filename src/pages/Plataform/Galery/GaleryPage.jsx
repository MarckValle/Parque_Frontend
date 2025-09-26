import React, { useEffect, useState } from "react";
import Footer from "../../../Components/Plataform/Footer/Footer";
import NavBar from "../../../Components/Plataform/NavBar/NavBar";
import { getSighthing } from "../../../utils/api/General/AddSighthings";
import "../../../assets/styles/Platform/GaleryPage.css";

function GaleryPage() {
  const [sightings, setSightings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSightings = async () => {
      try {
        const response = await getSighthing();
        setSightings(response.data.results); // 👈 el backend devuelve paginación con "results"
      } catch (error) {
        console.error("Error al obtener avistamientos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSightings();
  }, []);

  if (loading) {
    return <p className="text-center py-5">Cargando galería...</p>;
  }

  return (
    <div className="app-container d-flex">
      <div className="main-content flex-grow-1">
        <NavBar />
        <main className="container py-5">
          <h1 className="text-center fw-bold mb-3">Galería</h1>
          <p className="text-center text-muted mb-5">
            Compartimos las experiencias y avistamientos de las personas dentro del parque.
          </p>

          <div className="row g-4">
            {sightings.map((item, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4">
                <div className="gallery-item position-relative overflow-hidden rounded shadow-sm">
                  <img
                    src={item.photo} // 👈 aquí ya es la URL de S3
                    alt={item.description}
                    className="img-fluid w-100 d-block"
                  />
                  <div className="overlay d-flex flex-column justify-content-center align-items-center text-center px-3">
                    <p className="fw-bold">{item.date}</p>
                    <p className="mb-0">{item.description}</p>
                    <p className="mb-0">Autor: {item.full_name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default GaleryPage;
