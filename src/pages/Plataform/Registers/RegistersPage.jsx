import React from "react";
import NavBar from "../../../Components/Plataform/NavBar/NavBar";
import Footer from "../../../Components/Plataform/Footer/Footer";
import Registers from "../../../Components/Plataform/Registers/Registers";

function RegistersPage(){
    return (
        <div className="app-container d-flex">
            <div className="main-content flex-grow-1">
                <NavBar />
            <main>
                <Registers/>
            </main>
                <Footer/>
            </div>
        </div>
    );
};

export default RegistersPage;