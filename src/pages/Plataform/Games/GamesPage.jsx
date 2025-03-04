import React from "react";
import NavBar from "../../../Components/Plataform/NavBar/NavBar";
import Footer from "../../../Components/Plataform/Footer/Footer";
import MenuGames from "../../../Components/Plataform/Games/MenuGames";


function GamesPage(){
    return(
        <div className="app-container d-flex">
            <div className="main-content flex-grow-1">
                <NavBar />
            <main>
                <MenuGames />
            </main>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default GamesPage;