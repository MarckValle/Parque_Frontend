import React from "react";
import NavBar from "../../../../Components/Plataform/NavBar/NavBar";
import Footer from "../../../../Components/Plataform/Footer/Footer";
import Memorama from "../../../../Components/Plataform/Games/Memorama/Memorama";
function MemoramaPage(){
    return(
        <div className="app-container d-flex">
            <div className="main-content flex-grow-1">
                <NavBar />
            <main>
                <Memorama />
            </main>
                <Footer></Footer>
            </div>
        </div>
    );

}

export default MemoramaPage;