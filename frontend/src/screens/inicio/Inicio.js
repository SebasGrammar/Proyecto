import Modal from '../../components/modal/Modal';
import Description from '../../components/description/Description';
import React,{useState} from 'react';

export default function Inicio() {
        return (       
            <div className="contenedor">

            <Description
                    titulo="Bienvenida"
                    descripcion={`Inicio`} 
                    textoBoton="Agregar vendedor"
                    id="0"
                />                
            </div>
        )

    

    }