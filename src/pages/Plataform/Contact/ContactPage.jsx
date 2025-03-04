import React from "react";
import ContactForm from "../../../Components/Plataform/Forms/Contact/Contact";
import Footer from "../../../Components/Plataform/Footer/Footer";
import NavBar from "../../../Components/Plataform/NavBar/NavBar";
function ContactPage(){
    return (
        <div className="app-container d-flex">
            <div className="main-content flex-grow-1">
                <NavBar />
            <main>
               <ContactForm />
            </main>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ContactPage;