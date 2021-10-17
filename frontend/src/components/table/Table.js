import "./table.css"

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
                <p>Quitar selección</p>
                <p>Editar usuario</p>
            </section>
            <section className="contenedorTabla">
                <table>
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