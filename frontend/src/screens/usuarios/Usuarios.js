import React, { useState, useEffect } from 'react';
import axios from "axios";
import Table from '../../components/table/Table';
import Description from '../../components/description/Description';
import './Usuario.css';
import descripcion from '../../datasource/descripcion.json'
import tablaUsuarios from '../../datasource/tablaUsuarios.json'

export default function Usuarios() {

    const [users, setUsers] = useState(null)
    const [reloadUsers, setReloadUsers] = useState(true);

    const token = localStorage.getItem("accessToken")

    // const getUsers = async () => {
    //     const users = await axios.get("http://localhost:3000/api/v1/users")
    //     setUsers(users)
    // }

    useEffect(() => {
        const fetchUsers = async () => {
            const products = await axios.get("http://localhost:3000/api/v1/users", {
                headers: { // middleware/protect method
                    "Authorization": token
                }
            })

            setUsers(products.data.data)
        }

        fetchUsers()

    }, [])

    let [titulo, cuerpo, textoBoton] = Object.values(descripcion[2])
    let headers = Object.keys(tablaUsuarios[0])
    let data = Object.values(tablaUsuarios)
    if (users) {
        console.log(users)
        return (
         //   <div>
             //   {users.map(user => (
              //      <h1>{user.name}</h1>
                //))}
                // <h1>what its loading?</h1>
           // </div>
            // <h1>Loaded already. </h1>
            <div className="contenedor">
                <Description
                    titulo={titulo}
                    descripcion={cuerpo} 
                    textoBoton={textoBoton}
                />
                <Table
                    tipo = "usuario"
                    headers={headers}
                    data={data}/>
            </div>
        )
    } else {
        return (
            <div className="contenedor">
            <h1>Loading...</h1>
            </div>
        )
    }




    // return (
    //     <div>
    //         {users.map(user => {
    //             return (
    //                 <div>
    //                     <h1>{user.name}</h1>
    //                 </div>
    //             )
    //         })}
    //     </div>
    // )

}
