import React from "react";
import NavBar from "../../../../Components/Plataform/NavBar/NavBar";
import Footer from "../../../../Components/Plataform/Footer/Footer";
import GuessTheImageGame from "../../../../Components/Plataform/Games/GuessImage/GuessImage";

function GuessImagePage(){
    return(
        <div className="app-container d-flex">
            <div className="main-content flex-grow-1">
                <NavBar />
            <main>
                <GuessTheImageGame />
            </main>
                <Footer></Footer>
            </div>
        </div>
    );

}

export default GuessImagePage;