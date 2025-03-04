import React from "react";
import NavBar from "../../../Components/Plataform/NavBar/NavBar";
import Footer from "../../../Components/Plataform/Footer/Footer";
import UsContainer from '/src/Components/Plataform/UsContainer/UsContainer'

function UsPage(){
    return (
        <div className="app-container d-flex">
            <div className="main-content flex-grow-1">
                <NavBar />
            <main>
               <UsContainer />
            </main>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default UsPage;