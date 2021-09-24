import './usuarios.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Descripcion from '../../components/descripcion/Descripcion';
import descripcion from '../../datasource/descripcion.json'

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Usuarios() {
    return (
        <div className="pantalla">
            <Header />
                        
            <Descripcion titulo={Object.keys(descripcion[1])} cuerpo={Object.values(descripcion[1])} />
        </div>
    );
}

export default Usuarios;