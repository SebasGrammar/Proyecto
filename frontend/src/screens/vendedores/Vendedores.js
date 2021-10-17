import React, { useState, useEffect } from 'react';
import axios from "axios";
import Table from '../../components/table/Table';
import Description from '../../components/description/Description';
import './vendedores.css';
import descripcion from '../../datasource/descripcion.json'
import tablaVendedores from '../../datasource/tablaVendedores.json'

export default function Vendedores() {

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
    let headers = Object.keys(tablaVendedores[1])
    let data = Object.values(tablaVendedores)
    if (users) {
        console.log(users)
        return (
            <div className="contenedor">
                <Description
                    titulo={titulo}
                    descripcion={cuerpo}
                    textoBoton={textoBoton}
                    id="1"
                />
                <Table
                    tipo="vendedores"
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

    
