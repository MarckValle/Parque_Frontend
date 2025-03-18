import React, { useEffect, useState } from "react";
import axios from "axios";
import '/src/assets/styles/Platform/index.css';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import InfoView from "../Info/Info";
const API_URL = "http://localhost:8000/admin_netzahualcoyotl/add_register/";
import { ClipLoader } from "react-spinners";

const Registers = () => {

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        if (response.data) {
          setData(response.data);
          setLoading(false);

        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Agrupar registros por type_register
  const groupedData = data.reduce((acc, item) => {
    const category = item.type_id.type_register;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

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
        <div className="container text-center">
            <ClipLoader color="#007bff" size={100} />
            <p>Cargando información...</p>
        </div>
    );
}


  return (
    <div className="container mt-4">
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
