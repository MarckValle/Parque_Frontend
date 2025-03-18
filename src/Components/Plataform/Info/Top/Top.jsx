import React from "react";

import '/src/assets/styles/Platform/index.css';

function Top({ photo, name, scientific_name }){

    
    return (
        <div
            className="app-top-section text-center text-white"
            style={{
                backgroundImage: `url(${photo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "50px 0",
            }}
            >
            <h2>{name}</h2>
            <p><i>{scientific_name}</i></p>
        </div>
    )
};

export default Top;