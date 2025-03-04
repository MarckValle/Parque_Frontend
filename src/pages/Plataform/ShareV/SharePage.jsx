import React from "react";
import NavBar from "../../../Components/Plataform/NavBar/NavBar";
import Footer from "../../../Components/Plataform/Footer/Footer";
import ShareViews from "../../../Components/Plataform/Forms/ShareViews/ShareViews.Jsx";

function IndexPage(){
    return (
        <div className="app-container d-flex">
            <div className="main-content flex-grow-1">
                <NavBar />
            <main>
                <ShareViews></ShareViews>
            </main>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default IndexPage;