import React from "react";
import Explore from "./Explore";

const WebApp = () => {
  return (
    <>
      <section className="web">
        <div className="web__background">
        </div>
          <h1 className="web__title">APLICACIÓN</h1>
          <div className="web__container">
            <div className="web__info">
              <p className="web__text">Es un buscador de razas de perros por letra, con esto puedes encontrar los siguientes puntos:</p>
              <ul className="web__list">
                <li className="web__item">Nombre de la raza</li>
                <li className="web__item">Imagen de la raza</li>
                <li className="web__item">Descripción de la raza</li>
              </ul>
            </div>
            <div className="web__image-container">
              <img src="/images/web__image.png" alt="" className="web__image"/>
            </div>
          </div>
      </section>
      <Explore/>

    </>
  )
}

export default WebApp;
