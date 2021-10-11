import React from 'react';
import './Description.css';
import agregar from '../../img/agregar.png'

export default function Description({ titulo, descripcion, textoBoton }) {
    return (
        <section className="o-container-description">
            <section className="o-description-text">
                <h1>{titulo}</h1>
                <p>{descripcion}</p>
            </section>
            <section className="o-btn-container">
                <p className="o-textoo">{textoBoton}</p>
                <img className="o-img o-button-add" src={agregar} alt="add" />
            </section>
        </section>
    )
}


