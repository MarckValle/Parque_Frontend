import React from "react";
import NavBar from "../../../../Components/Plataform/NavBar/NavBar";
import Footer from "../../../../Components/Plataform/Footer/Footer";
import InfoView from "../../../../Components/Plataform/Info/Info";

function InfoPage(){
    return (
        <div className="app-container d-flex">
            <div className="main-content flex-grow-1">
                <NavBar />
            <main>
               <InfoView />
            </main>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default InfoPage;