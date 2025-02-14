import React, {useState} from "react";
import SideBar from "../../../Components/Dashboard/SideBar/SideBar";
import NavBar from "../../../Components/Dashboard/Navbar/Navbar";
import RegistersTable from "../../../Components/Dashboard/Table/RegistersTable/RegistersTable";
import RegistersForm from "../../../Components/Dashboard/Forms/RegistersForm/RegistersForm";

function AnimalsPage(){
    const [refreshKey, setRefreshKey] = useState(0);
        
            const handleRefresh = () => {
                setRefreshKey((prev) => prev + 1); // Incrementa el refreshKey para refrescar la tabla
            };
    return (
        <div className="app-container d-flex">
                <SideBar />
            <div className="main-content flex-grow-1">
                <NavBar name='Animales' />
            <main>
                <RegistersForm/>
                <RegistersTable/>
            </main>
            </div>
        </div>
    );
};

export default AnimalsPage;