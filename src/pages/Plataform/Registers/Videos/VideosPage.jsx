import React from "react";
import NavBar from "../../../../Components/Plataform/NavBar/NavBar";
import Footer from "../../../../Components/Plataform/Footer/Footer";
import Videos from "../../../../Components/Plataform/Videos/Videos";

function VideosPage(){
    return (
        <div className="app-container d-flex">
            <div className="main-content flex-grow-1">
                <NavBar />
            <main>
               <Videos />
            </main>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default VideosPage;