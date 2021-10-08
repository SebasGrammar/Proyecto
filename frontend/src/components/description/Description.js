import React from 'react';
import './Description.css';



export default function Description({ titulo, descripcion,textoBoton }) {
    return (

        <section className="o-container-description">
            <section className="o-description-text">
                <h1>{titulo}</h1>
                <p>{descripcion}</p>
            </section>
            <section className="o-btn-container">
            <p className="o-textoo">{textoBoton}</p>
            <button className="o-button-add">+</button>


            </section>

        </section>

    )
}


