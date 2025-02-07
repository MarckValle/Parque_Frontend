import React from "react";
import SideBar from "../../../Components/Dashboard/SideBar/SideBar";
import NavBar from "../../../Components/Dashboard/Navbar/Navbar";
import HabitatTable from "../../../Components/Dashboard/Table/HabitatTable/HabitatTable";
import HabitatForm from "../../../Components/Dashboard/Forms/HabitatForm/HabitatForm";

import '/src/assets/styles/Dashboard/Dashboard.css'

function HabitatsPage(){
    return (
        <div className="app-container d-flex">
                <SideBar />
            <div className="main-content flex-grow-1">
                <NavBar name='Habitats' />
            <main>
            <HabitatTable/>
            <HabitatForm/>
            </main>
            </div>
        </div>
    );
};

export default HabitatsPage;