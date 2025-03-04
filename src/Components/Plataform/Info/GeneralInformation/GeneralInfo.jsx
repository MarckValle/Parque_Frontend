import React from "react";
import Cards from "../Cards/Card";
function GeneralInfo({ distribution, habitat, feed }){
    return(
        <div className="container">
            <h2 className="text-center">Informacion General</h2>
            <div className="validate-container">
                {feed.length > 0 ? (
                    feed.map((food, index) => (
                        <Cards key={index} theme="Alimentación" descripcion={food.name} img={food.photo} />
                    ))
                ) : (
                    <Cards theme="Alimentación" descripcion="No hay información disponible" />
                )}
                {/* Mapeo de hábitats (si hay más de uno) */}
                {habitat.length > 0 ? (
                    habitat.map((hab, index) => (
                        <Cards key={index} theme="Hábitat" descripcion={hab.name} img={hab.photo} />
                    ))
                ) : (
                    <Cards theme="Hábitat" descripcion="No disponible" />
                )}
                <Cards theme="Distribucion" descripcion={distribution}></Cards>
            </div>
        </div>
    )
}

export default GeneralInfo;