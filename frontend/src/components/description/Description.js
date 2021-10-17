import React,{useState} from 'react';
import './Description.css';
import agregar from '../../img/agregar.png'
import Modal from '../modal/Modal';


export default function Description({ titulo, descripcion, textoBoton }) {
    

     let [show,setShow] = useState(false)
   
    return (
        
        <section className="o-container-description">
            <section className="o-description-text">
                <h1>{titulo}</h1>
                <p>{descripcion}</p>
            </section>
            <section className="o-btn-container">
                <p className="o-textoo cta">{textoBoton}</p>
                <button className="o-button-add" onClick={()=>setShow(true)}>+</button>
            </section>
        </section>
    )
    
    
}
export let show;


