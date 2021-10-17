import './table.css';
import basura from '../../img/delete.png';
import lapiz from '../../img/pencil.png';
import quitar from '../../img/quitar.png';

export default function Table({headers, data}) {
    
    const createRow = (object) => {
        const columns = []

        for (let property in object) {
            columns.push(<td>{object[property]}</td>)
        }

        return (
            <tr className="dataFila">
                {columns}
            </tr>
        )
    }

    return (
        <section className="contenedorSection">
            <section>
                <section className="quitar ord">
                    <img className="l-img" src={quitar} alt="editar" />
                    <p className="opcionTabla">Quitar selección</p>
                </section>
                <section className="editar ord">
                    <img className="l-img" src={lapiz} alt="editar" />
                    <p className="opcionTabla">Editar usuario</p>
                </section>
                <section className="eliminar ord">
                    <img className="l-img" src={basura} alt="eliminar" />
                    <p className="opcionTabla">Eliminar usuario</p>
                </section>
            </section>
            <section className="contenedorTabla">
                <table className="col-12">
                    <thead className="head">
                        <tr>
                            {
                                headers.map(header => {
                                    return (
                                        <th>{header}</th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody className="body">
                        {
                            data.map(row => {
                                return createRow(row)
                            })
                        }
                    </tbody>
                </table>
            </section>
        </section>
    )
}