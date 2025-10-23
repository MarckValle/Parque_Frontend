import React from "react";
import "/src/assets/styles/Platform/UsContainer.css";

function UsContainer() {
  return (
    <div className="us-container container py-5">
      <div className="text-center mb-4">
        <h2 className="us-title">Sobre Nosotros</h2>
        <div className="us-divider mx-auto"></div>
      </div>

      <p className="us-text">
        El <strong>Parque Nacional Molino de Flores</strong> es un espacio histórico y natural
        que ha sido testigo de grandes momentos en la historia de México. Desde los tiempos
        de <strong>Nezahualcóyotl</strong>, la llegada de los españoles y la <strong>Revolución
        Mexicana</strong>, hasta convertirse hoy en un lugar ideal para la convivencia familiar.
      </p>

      <p className="us-text">
        Originalmente fue una ex Hacienda dedicada a la producción de <strong>pulque</strong>.
        Entre sus construcciones más emblemáticas se encuentran la <strong>residencia principal</strong>,
        la <strong>Iglesia de San Joaquín</strong> y la <strong>Capilla del Señor de la Presa</strong>,
        edificadas por Miguel de Cervantes y su esposa.
      </p>

      <p className="us-text">
        Declarado Parque Nacional el <strong>5 de noviembre de 1937</strong>, ocupa una superficie de
        <strong> 45.66 hectáreas</strong> en el municipio de <strong>Texcoco, Estado de México</strong>.
        Su rasgo único es el reconocido <strong>“Baño de Netzahualcóyotl”</strong>, un símbolo de
        enorme valor cultural y patrimonial.
      </p>


    </div>
  );
}

export default UsContainer;

