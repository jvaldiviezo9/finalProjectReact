import React from "react";
const Cards = () => {
  return(
    <>
      <section className="cards">
        <div className="cards__container">
          <div className="cards__container-card">
            <img src="/images/elements__image_1.png" alt="" className="cards__image"/>
            <h4 className="cards__title">Bulbasaur</h4>
            <p className="cards__description">Párrafo. Haz clic aquí para agregar tu propio texto y editar. Aquí puedes contar tu historia y permitir que tus usuarios sepan más sobre ti.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cards;
