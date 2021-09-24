import "./table.css"

export default function Table({title, headers, data}) {
    
    const createRow = (object) => {
        const columns = []

        for (let property in object) {
            columns.push(<td>{object[property]}</td>)
        }

        return (
            <tr>
                {columns}
            </tr>
        )
    }

    return (
        <>
            <h1>{title}</h1>
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
        </>

    )
}