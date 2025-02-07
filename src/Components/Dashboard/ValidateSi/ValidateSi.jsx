import React from "react";
import Cards from "./Card/Cards";
import '/src/assets/styles/Dashboard/Validate/validate.css'

function ValidateSig(){
    return(
        <div className="validate-container">
                <Cards
                    id="1"
                    tipo="Mamífero"
                    nombre="Juan Pérez"
                    fecha="28/01/2025"
                    descripcion="Avistamiento de un zorro gris en el sendero ecológico."
                    img='https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                />
                <Cards
                    id="2"
                    tipo="Aves"
                    nombre="Ana López"
                    fecha="29/01/2025"
                    descripcion="Avistamiento de un halcón peregrino sobrevolando el área."
                    img='https://images.pexels.com/photos/28293914/pexels-photo-28293914/free-photo-of-ardilla-curiosa.jpeg'
                />
                <Cards
                    id="3"
                    tipo="Reptil"
                    nombre="Carlos Martínez"
                    fecha="30/01/2025"
                    descripcion="Avistamiento de una serpiente cascabel en el sendero."
                    img='https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                />
                <Cards
                    id="4"
                    tipo="Insecto"
                    nombre="María González"
                    fecha="31/01/2025"
                    descripcion="Avistamiento de una mariposa monarca en la zona norte."
                    img='https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                />

        </div>
    )
}

export default ValidateSig;