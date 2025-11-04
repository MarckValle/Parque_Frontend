import React, { useState, useEffect } from "react";

function SearchRegisters() {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchTerm.length > 0) {
                fetchSearchResults(searchTerm);
            } else {
                setResults([]); // Limpiar resultados si no hay texto
            }
        }, 500); // Espera 500ms para evitar llamadas excesivas

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm]);

    const fetchSearchResults = async (term) => {
        try {
            const response = await fetch("https://netzapark-backend.onrender.com/general_netzahualcoyotl/search_register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: term }),
            });

            const data = await response.json();
            setResults(data.results || []);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    return (
        <div className="container text-center mt-5">
            <h2>Buscar registro...</h2>
            <input
                type="text"
                className="form-control"
                placeholder="Escribe para buscar"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
            />
            <hr />
            <ul className="list-group mt-3">
                {results.length > 0 ? (
                    results.map((item) => (
                        <li key={item.id} className="list-group-item">
                            {item.name} ({item.type_register})
                        </li>
                    ))
                ) : (
                    searchTerm && <p>No se encontraron resultados.</p>
                )}
            </ul>
        </div>
    );
}

export default SearchRegisters;
