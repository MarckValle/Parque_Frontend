import React from "react";
import SideBar from "../../../Components/Dashboard/SideBar/SideBar";
import NavBar from "../../../Components/Dashboard/Navbar/Navbar";
import RegistersTable from "../../../Components/Dashboard/Table/RegistersTable/RegistersTable";
import RegistersForm from "../../../Components/Dashboard/Forms/RegistersForm/RegistersForm";

function AnimalsPage(){
    return (
        <div className="app-container d-flex">
                <SideBar />
            <div className="main-content flex-grow-1">
                <NavBar name='Animales' />
            <main>
                <RegistersTable/>
                <RegistersForm/>
            </main>
            </div>
        </div>
    );
};

export default AnimalsPage;