import React from "react";


function Icons({ data, img }) {
    return(
        <div>
            <button className={`btn ${!data ? "disabled" : ""}`} disabled={!data}>
                <img
                    src={img}
                    alt="icon"
                    style={{ maxWidth: "50px", objectFit: "contain" }}
                />
            </button>
        </div>
    );
}

export default Icons;
