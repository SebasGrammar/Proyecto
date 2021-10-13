import Modal from '../../components/modal/Modal';

export default function Usuarios() {

   
        return (
       
            <div className="contenedor">
                <Modal
                    pageTitle="Gestión de Vendedores"
                    title= "Agregar Vendedor"
                    labels={["ID Vendedor","Nombre","Especialidad"]}
                    tipo={["number","text","text"]}
                    buttonAdd="Agregar vendedor"
                />
                
            </div>
        )
    }
    
