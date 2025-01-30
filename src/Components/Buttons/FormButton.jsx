import React from "react";

function FormButton( { label, onClick, className ,type='submit' } ){
    return(
    <>
    <button type={type} className={className} onClick={onClick}>{label}</button>
    </>
    );
};

export default FormButton;