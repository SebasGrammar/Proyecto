import './usuarios.css';
import Navbar from '../../components/navbar/navbar';
import Header from '../../components/header/Header';
import Descripcion from '../../components/descripcion/Descripcion';
import descripcion from '../../datasource/descripcion.json'

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Usuarios() {
    // Object.values(descripcion[index]) turns object at [index] into an array of values.
    // with item[0] being "titulo" & item[1] being "cuerpo"
    let arreglo = Object.values(descripcion[2])
    
    let title = Object.values(descripcion[2])[0]
    let body = Object.values(descripcion[2])[1]
    // could also be
    // let title = arreglo[0]
    // let body = arreglo[1]

    // we can use destructuring here, too:
    let [titulo, cuerpo] = Object.values(descripcion[2])
    return (
        <div className="pantalla">                                    
            {/* <Descripcion titulo={arreglo[0]} cuerpo={arreglo[1]} /> */}
            <Descripcion titulo={titulo} cuerpo={cuerpo} />
            <Descripcion titulo={title} cuerpo={body} />
        </div>
    );
}
export default Usuarios;