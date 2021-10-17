import Modal from '../../components/modal/Modal';
import Description from '../../components/description/Description';
import React,{useState} from 'react';
import Show from '../../components/description/Description'

export default function Inicio() {

    let [show,setShow] = useState(false)

        return (
       
            <div className="contenedor">

            
            <Description
                    titulo="Gestión de Vendedores"
                    descripcion={`En la Gestión de Vendedores permite administrar los roles en el sistema (vendedor, administrador, ejecutivo, operario, director, gerente comercial) y restringir/otorgar los accesos al sistema.
                    
                    Adicionalmente se consultar todos los usuarios de X-Force Team, asi como modificar sus datos o eliminarlos.`} 
                    textoBoton="Agregar vendedor"
                />

                { <Modal
                    pageTitle="Gestión de Vendedores"
                    title= "Agregar Vendedor"
                    labels={["ID Vendedor","Nombre","Especialidad"]}
                    tipo={["number","text","text"]}
                    buttonAdd="Agregar vendedor"
                    show={Show}
                /> }
                
            </div>
        )

    

    }