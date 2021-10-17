import React,{useState} from 'react';
import './Description.css';
import agregar from '../../img/agregar.png'
import Modal from '../modal/Modal';
import modal from '../../datasource/modal.json'


export default function Description({ titulo, descripcion, textoBoton, id }) {
    const [show, setShow] = useState(false)
    let [pageTitle, title, labels, tipo, buttonAdd] = Object.values(modal[id])

    return (
        
        <section className="o-container-description">
            <section className="o-description-text">
                <h1>{titulo}</h1>
                <p>{descripcion}</p>
            </section>
            <section className="o-btn-container">
                <p className="o-textoo cta">{textoBoton}</p>
                <button className="o-button-add" onClick={() => setShow(true)                    
                }>+</button>
            </section>
            
            <Modal
                pageTitle={pageTitle}
                title={title}
                labels={labels}
                tipo={tipo}
                buttonAdd={buttonAdd}
                show={show} />
        </section>
    )    
}


