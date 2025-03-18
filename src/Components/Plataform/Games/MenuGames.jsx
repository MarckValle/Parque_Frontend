import React from "react";
import "/src/assets/styles/Dashboard/Validate/validate.css";

const games = [
  {
    id: 1,
    title: "Memorama",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/memorama/",
  },
  {
    id: 2,
    title: "Adivina la imagen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/adivina_la_imagen/",
  },
  {
    id: 3,
    title: "Rompecabezas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/rompecabezas/",
  },
];

function MenuGames() {
  return (
    <div className="container mt-4 text-center"> {/* Centra horizontalmente */}
      <h2 className="text-start fw-bold">Juegos</h2>
      <p className="text-muted">
        En este espacio podrás acceder a diferentes juegos con imágenes de los registros dentro de la plataforma.
      </p>

      <div className="d-flex justify-content-center flex-column align-items-center">
        {games.map((game) => (
          <a
            key={game.id}
            href={game.link}
            className="game-link mb-3" // Nuevo estilo opcional
          >
            <div
              className="d-flex align-items-center p-3 mb-6 rounded shadow-sm"
              style={{ backgroundColor: "#F5F5DC", width: "100%", maxWidth: "1000px" }}
            >
              {/* Número */}
              <div
                className="rounded-circle d-flex justify-content-center align-items-center me-5"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#B6C68B",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {game.id}
              </div>

              {/* Texto */}
              <div className="flex-grow-1 text-start">
                <h5 className="mb-1 fw-bold">{game.title}</h5>
                <p className="text-muted m-0">{game.description}</p>
              </div>

              {/* Imagen */}
              <img
                src="https://www.freevector.com/uploads/vector/preview/17859/FreeVector-Jigsaw-Puzzle.jpg"
                alt="Puzzle"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default MenuGames;
