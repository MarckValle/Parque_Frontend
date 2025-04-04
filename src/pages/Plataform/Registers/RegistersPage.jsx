import React from "react";
import NavBar from "../../../Components/Plataform/NavBar/NavBar";
import Footer from "../../../Components/Plataform/Footer/Footer";
import Registers from "../../../Components/Plataform/Registers/Registers";
import SearchRegisters from "../../../Components/Plataform/Registers/SearchRegisters/SearchRegisters";
function RegistersPage(){
    return (
        <div className="app-container d-flex">
            <div className="main-content flex-grow-1">
                <NavBar />
            <main>
                <SearchRegisters></SearchRegisters>
                <Registers/>
            </main>
                <Footer/>
            </div>
        </div>
    );
};

export default RegistersPage;