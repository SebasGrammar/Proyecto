import "./descripcion.css"

export default function Descripcion({ titulo, cuerpo }) {

    return (
        <div className = "contenedor">
            <h1>{titulo}</h1>
            <p>{cuerpo}</p>
        </div>
    )
}