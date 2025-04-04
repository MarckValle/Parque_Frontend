import React, { useEffect, useState } from "react";
import "/src/assets/styles/Platform/MemoryGame.css";
import { ClipLoader } from "react-spinners";
const MemoryGame = () => {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [attempts, setAttempts] = useState(0);
    const [loading, setLoading] = useState(true);
    const [gameCompleted, setGameCompleted] = useState(false);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://netzapark-backend.onrender.com/general_netzahualcoyotl/get_photos/");
            const data = await response.json();

            if (!data.photos || !Array.isArray(data.photos)) {
                throw new Error("La respuesta no contiene un array de fotos");
            }

            // Duplicar imágenes para formar pares y mezclarlas
            const shuffledCards = [...data.photos, ...data.photos]
                .map((src, index) => ({ id: index, src, flipped: false, matched: false }))
                .sort(() => Math.random() - 0.5);

            setCards(shuffledCards);
            setMatchedCards([]);
            setAttempts(0);
            setGameCompleted(false);
        } catch (error) {
            console.error("Error al obtener imágenes:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCardClick = (index) => {
        if (flippedCards.length === 2 || cards[index].flipped || cards[index].matched) {
            return;
        }

        const newCards = [...cards];
        newCards[index].flipped = true;
        setCards(newCards);
        setFlippedCards([...flippedCards, index]);

        if (flippedCards.length === 1) {
            setTimeout(() => checkForMatch(flippedCards[0], index), 800);
        }
    };

    const checkForMatch = (firstIndex, secondIndex) => {
        setAttempts((prev) => prev + 1);
        const newCards = [...cards];

        if (newCards[firstIndex].src === newCards[secondIndex].src) {
            newCards[firstIndex].matched = true;
            newCards[secondIndex].matched = true;
            setMatchedCards([...matchedCards, firstIndex, secondIndex]);
        } else {
            newCards[firstIndex].flipped = false;
            newCards[secondIndex].flipped = false;
        }

        setCards(newCards);
        setFlippedCards([]);

        if (newCards.every((card) => card.matched)) {
            setGameCompleted(true);
        }
    };

    if (loading) {
        return (
            <div className="container text-center mt-5">
                <ClipLoader color="#007bff" size={100} />
                <p>Cargando información...</p>
            </div>
        );
    }

    return (

        <div className="container">
            <h2 className="text-center">Memorama</h2>
            <div className="memory-game-container mb-3">

                <div className="memory-game-board">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            className={`memory-card ${card.flipped || card.matched ? "flipped" : ""}`}
                            onClick={() => handleCardClick(index)}
                        >
                            <div className="card-inner">
                                <div className="card-front"></div>
                                <div className="card-back">
                                    <img src={card.src} alt="Imagen de memoria" className="card-img" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <h3 className="text-center">Intentos: {attempts}</h3>

                {gameCompleted && (
                    <div className="game-completed">
                        <h3>¡Juego completado!</h3>
                        <button onClick={fetchImages} className="restart-button">Reiniciar</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MemoryGame;
