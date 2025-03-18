import React from "react";
import NavBar from "../../../Components/Plataform/NavBar/NavBar";
import Footer from "../../../Components/Plataform/Footer/Footer";
import ImageCarousel from "../../../Components/Plataform/ImageCarrousel/ImageCarrousel";

function IndexPage(){
    return (
        <div className="app-container d-flex">
            <div className="main-content flex-grow-1">
                <NavBar />
            <main>
                <ImageCarousel />
            </main>
                <Footer/>
            </div>
        </div>
    );
};

export default IndexPage;