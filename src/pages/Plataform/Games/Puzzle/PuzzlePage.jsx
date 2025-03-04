import React from "react";
import NavBar from "../../../../Components/Plataform/NavBar/NavBar";
import Footer from "../../../../Components/Plataform/Footer/Footer";
import PuzzleGame from "../../../../Components/Plataform/Games/Puzzle/Puzzle";
function PuzzlePage(){
    return(
        <div className="app-container d-flex">
            <div className="main-content flex-grow-1">
                <NavBar />
            <main>
                <PuzzleGame />
            </main>
                <Footer></Footer>
            </div>
        </div>
    );

}

export default PuzzlePage;