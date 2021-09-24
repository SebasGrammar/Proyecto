import './usuarios.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Descripcion from '../../components/descripcion/Descripcion';
import descripcion from '../../datasource/descripcion.json'

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Usuarios() {
    let arreglo = Object.values(descripcion[2])
    return (
        <div className="pantalla">                                    
            <Descripcion titulo={arreglo[0]} cuerpo={arreglo[1]} />
        </div>
    );
}
export default Usuarios;