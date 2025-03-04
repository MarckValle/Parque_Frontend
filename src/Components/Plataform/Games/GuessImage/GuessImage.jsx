import React, { useState, useEffect } from 'react';
import "/src/assets/styles/Platform/GuessImage.css";

const GuessTheImageGame = () => {
    const [photos, setPhotos] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [guessedCorrectly, setGuessedCorrectly] = useState(null);
    const [attempts, setAttempts] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);

    useEffect(() => {
        fetch('http://localhost:8000/general_netzahualcoyotl/guess_photo/') // Cambia a la URL de tu API
            .then(response => response.json())
            .then(data => {
                const shuffledPhotos = shuffleArray(data.photos);
                setPhotos(shuffledPhotos);
                setSelectedPhoto(shuffledPhotos[0]); // La primera imagen es la correcta al inicio
            })
            .catch(error => console.error('Error fetching photos:', error));
    }, []);

    const shuffleArray = (array) => {
        let shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const handleGuess = (photo) => {
        setAttempts(attempts + 1);
        if (photo.name === selectedPhoto.name) {
            setGuessedCorrectly(true);
            setCorrectAnswers(correctAnswers + 1);
            setTimeout(() => {
                const newShuffledPhotos = shuffleArray(photos);
                setSelectedPhoto(newShuffledPhotos[0]);
                setGuessedCorrectly(null);
            }, 2000); // Cambia la imagen después de 2 segundos
        } else {
            setGuessedCorrectly(false);
        }
    };

    return (
        <div className="container">
            <h2 className="text-center mt-3">Adivina el nombre de la imagen</h2>
            <div className="game-container mb-3">
                {selectedPhoto && (
                    <div>
                        <div className="image-container">
                            <img
                                src={selectedPhoto.photo}
                                alt="Imagen a adivinar"
                                className={guessedCorrectly ? "image-revealed" : "image-blurred"}
                            />
                        </div>
                        <div className="options-container">
                            {photos.slice(0, 4).map((photo, index) => (
                                <label key={index} className="option-label">
                                    <input
                                        type="radio"
                                        name="guess"
                                        onClick={() => handleGuess(photo)}
                                    />
                                    {photo.name}
                                </label>
                            ))}
                        </div>
                        <button className="submit-button">Enviar</button>
                        <div className="score-container">
                            <p>Intentos: {attempts}</p>
                            <p>Aciertos: {correctAnswers}</p>
                        </div>
                        {guessedCorrectly !== null && (
                            <div className={`result-message ${guessedCorrectly ? "correct" : "incorrect"}`}>
                                {guessedCorrectly ? "¡Correcto! Has adivinado la imagen." : "¡Incorrecto! Intenta de nuevo."}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GuessTheImageGame;
