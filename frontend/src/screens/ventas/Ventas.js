import React, { useState, useEffect } from 'react';
import axios from "axios";
import Table from '../../components/table/Table';
import Description from '../../components/description/Description';
import './ventas.css';
import descripcion from '../../datasource/descripcion.json'
import tablaVentas from '../../datasource/tablaVentas.json'

export default function Ventas() {

    const [users, setUsers] = useState(null)
    const [reloadUsers, setReloadUsers] = useState(true);

    const token = localStorage.getItem("accessToken")


    useEffect(() => {
        const fetchUsers = async () => {
            const products = await axios.get("http://localhost:3000/api/v1/users", {
                headers: { 
                    "Authorization": token
                }
            })

            setUsers(products.data.data)
        }

        fetchUsers()

    }, [])

    let [titulo, cuerpo, textoBoton] = Object.values(descripcion[0])
    let headers = Object.keys(tablaVentas[0])
    let data = Object.values(tablaVentas)
    if (users) {
        console.log(users)
        return (
            <div className="contenedor">
                <Description
                    titulo={titulo}
                    descripcion={cuerpo}
                    textoBoton={textoBoton}
                    id="0"
                />
                <Table
                    tipo="venta"
                    headers={headers}
                    data={data} />
            </div>
        )
    } else {
        return (
            <div className="contenedor">
                <h1>Loading...</h1>
            </div>
        )
    }
}
