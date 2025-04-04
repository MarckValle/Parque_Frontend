import React, { useEffect, useState } from "react";
import axios from "axios";
import "/src/assets/styles/Platform/index.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const API_URL = "https://netzapark-backend.onrender.com/admin_netzahualcoyotl/add_register/";

const Registers = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        if (response.data) {
          setData(response.data);
          setFilteredData(response.data); // Inicialmente, los datos filtrados son todos los registros
          setLoading(false);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Función para agrupar registros por categoría
  const groupByCategory = (items) => {
    return items.reduce((acc, item) => {
      const category = item.type_id.type_register;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    }, {});
  };

  // Filtrar registros al escribir en el input
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchTerm, data]);

  const openModal = (item) => {
    Swal.fire({
      title: item.name,
      text: "¿Qué acción deseas realizar?",
      imageUrl: item.photo || "https://th.bing.com/th/id/R.58885955fedc0c6407b92725c37bf6ec?rik=7Wuk8u3m0kQJaQ&pid=ImgRaw&r=0",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: item.name,
      showCancelButton: true,
      confirmButtonText: "Ver videos",
      cancelButtonText: "Leer más",
      confirmButtonColor: "#007bff",
      cancelButtonColor: "#28a745",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/videos/", { state: { video: item.video, name: item.name } });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        navigate(`/informacion/${item.id}`);
      }
    });
  };

  if (loading) {
    return (
      <div className="container text-center mt-5">
        <ClipLoader color="#007bff" size={100} />
        <p>Cargando información...</p>
      </div>
    );
  }

  // Agrupar registros filtrados
  const groupedData = groupByCategory(filteredData);

  return (
    <div className="container mt-4">
      {/* 🔍 Input de búsqueda */}
      <div className="text-center mb-3">
        <h3>Buscar registro...</h3>
        <input
          type="text"
          className="form-control text-center"
          placeholder="Escribe para buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {Object.entries(groupedData).map(([category, items]) => (
        <div key={category} className="mb-4">
          <h3 className="text-center">{category}</h3>
          <div className="d-flex justify-content-center flex-wrap">
            {items.map((item, index) => (
              <div key={index} className="text-center mx-2">
                <button className="btn" onClick={() => openModal(item)}>
                  <img
                    src={item.photo || "https://th.bing.com/th/id/R.58885955fedc0c6407b92725c37bf6ec?rik=7Wuk8u3m0kQJaQ&pid=ImgRaw&r=0"}
                    alt={item.name}
                    className="app-circle-img"
                  />
                </button>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
          <hr className="border-dark" />
        </div>
      ))}
    </div>
  );
};

export default Registers;
