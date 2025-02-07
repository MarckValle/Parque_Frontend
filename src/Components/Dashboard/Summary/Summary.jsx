import React from "react";
import Card from "./Cards/Cards";
import Chart from "./Charts/Chart";
import Table from "./Table/Table";

function Summary(){
    return (
        <div className="dashboard-container">
            <div className="summary">
                <Card title="Nuevos avistamientos"
                    value="20"
                    subtitle="+8% que ayer"
                    color="red" 
                    />
                <Card title="Nuevos avistamientos"
                    value="20"
                    subtitle="+8% que ayer"
                    color="red" 
                    />
                <Card title="Nuevos avistamientos"
                    value="20"
                    subtitle="+8% que ayer"
                    color="red" 
                    />
                <Card title="Nuevos avistamientos"
                    value="20"
                    subtitle="+8% que ayer"
                    color="red" 
                    />
            </div>
            <div className="charts">
                <Chart title="Visitas semanales" type="bar" />
                <Chart title="Visitas mensuales" type="bar" />
                <Table title="Top animales" />
            </div>
        </div>
    );
};

export default Summary;