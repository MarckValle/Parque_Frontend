import React, {useState} from "react";
import SideBar from "../../../Components/Dashboard/SideBar/SideBar";
import NavBar from "../../../Components/Dashboard/Navbar/Navbar";
import FeedForm from "../../../Components/Dashboard/Forms/FeedsForm/FeedForm";
import FeedTable from "../../../Components/Dashboard/Table/FeedTable/FeedTable";

function ValidatePage(){


    const [refreshKey, setRefreshKey] = useState(0);
        
            const handleRefresh = () => {
                setRefreshKey((prev) => prev + 1); // Incrementa el refreshKey para refrescar la tabla
            };

    return (
        <div className="app-container d-flex">
                <SideBar />
            <div className="flex-grow-1">
                <NavBar name='Agregar registros de alimentos' />
            <main className="">
                <FeedForm onAdd={handleRefresh}></FeedForm>
                <FeedTable refreshKey={refreshKey}></FeedTable>
            </main>
            </div>
        </div>
    )
}

export default ValidatePage;