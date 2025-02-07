import React from "react";

const Card = ({ title, value, subtitle, color }) => {
    return (
      <div className={`card ${color}`}>
        <h4>{title}</h4>
        <p className="value">{value}</p>
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </div>
    );
  };
  
export default Card;