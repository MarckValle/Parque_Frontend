import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "/src/assets/styles/Platform/Puzzle.css";

const PuzzleGame = () => {
  const [photo, setPhoto] = useState(null);
  const [pieces, setPieces] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gridSize, setGridSize] = useState(3);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [gameComplete, setGameComplete] = useState(false);

  useEffect(() => {
    fetch("https://netzapark-backend.onrender.com/general_netzahualcoyotl/guess_photo/")
      .then((response) => response.json())
      .then((data) => {
        const selectedPhoto = data.photos[0].photo;
        setPhoto(selectedPhoto);
        generatePuzzle(selectedPhoto, gridSize);
      })
      .catch((error) => console.error("Error fetching photo:", error));
  }, [gridSize]);

  const generatePuzzle = (imageUrl, size) => {
    const tempPieces = [];
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        tempPieces.push({ id: row * size + col, row, col });
      }
    }
    tempPieces.sort(() => Math.random() - 0.5);
    setPieces(tempPieces);
  };

  const swapPieces = (index) => {
    if (selectedPiece === null) {
      setSelectedPiece(index);
    } else {
      let newPieces = [...pieces];
      [newPieces[selectedPiece], newPieces[index]] = [newPieces[index], newPieces[selectedPiece]];
      setPieces(newPieces);
      setMoves(moves + 1);
      setSelectedPiece(null);
      checkCompletion(newPieces);
    }
  };

  const checkCompletion = (newPieces) => {
    const isSolved = newPieces.every((piece, index) => piece.id === index);
    if (isSolved) {
      setGameComplete(true);
      Swal.fire({
        title: "¡Felicidades!",
        text: "Has completado el rompecabezas 🎉",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <div className="puzzle-container">
      <h2>Rompecabezas</h2>
      <div className="controls">
        <label>Selecciona el tamaño: </label>
        <select value={gridSize} onChange={(e) => setGridSize(Number(e.target.value))}>
          <option value={3}>3x3</option>
          <option value={4}>4x4</option>
        </select>
      </div>
      <div className={`puzzle-grid ${gameComplete ? "completed" : ""}`} 
           style={{ gridTemplateColumns: `repeat(${gridSize}, ${gridSize === 3 ? "120px" : "100px"})` }}>
        {photo &&
          pieces.map((piece, index) => (
            <div
              key={piece.id}
              className={`puzzle-piece ${selectedPiece === index ? "selected" : ""}`}
              onClick={() => !gameComplete && swapPieces(index)}
              style={{
                backgroundImage: `url(${photo})`,
                backgroundPosition: `${-piece.col * (gridSize === 3 ? 360 / gridSize : 400 / gridSize)}px ${-piece.row * (gridSize === 3 ? 360 / gridSize : 400 / gridSize)}px`,
                width: `${gridSize === 3 ? 120 : 100}px`,
                height: `${gridSize === 3 ? 120 : 100}px`,
              }}
            />
          ))}
      </div>
      <p>Movimientos: {moves}</p>
    </div>
  );
};

export default PuzzleGame;
