import React from "react";
import Cards from "./Cards";
const Explore = () => {
  return (
    <>
      <section className="explore">
          <p className="explore__description">Indícame una letra para filtrar las razas de perros:</p>
          <div className="explore__container">
            <input type="text" className="explore__input"/>
            <button className="explore__button">Buscar</button>
          </div>
      </section>
      <Cards />
    </>
  )
}

export default Explore;
