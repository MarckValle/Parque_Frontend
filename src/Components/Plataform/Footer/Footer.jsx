import React from "react";
import '/src/assets/styles/Platform/index.css';
function Footer(){
    return(
        <footer className="text-dark py-4 mt-auto border-top">
            <div className="container">
                
                <div className="row text-center">
                {/* Categoría Animales */}
                    <div className="col-md-1">
                        <a href="#" className="mx-1"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="mx-1"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="mx-1"><i class="bi bi-twitter"></i></a>
                    </div>
                    <div className="col-md-3">
                        <h5>Animales</h5>
                        <ul className="list-unstyled">
                        <li><a href="#">Mamíferos</a></li>
                        <li><a href="#">Reptiles</a></li>
                        <li><a href="#">Anfibios</a></li>
                        </ul>
                    </div>

                    {/* Categoría Plantas */}
                    <div className="col-md-4">
                        <h5>Plantas</h5>
                        <ul className="list-unstyled">
                        <li><a href="#">Con Flor</a></li>
                        <li><a href="#">Sin Flor</a></li>
                        </ul>
                    </div>

                    {/* Categoría Hongos */}
                    <div className="col-md-4">
                        <h5>Hongos</h5>
                        <ul className="list-unstyled">
                        <li><a href="#">Medicinales</a></li>
                        <li><a href="#">Comestibles</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;