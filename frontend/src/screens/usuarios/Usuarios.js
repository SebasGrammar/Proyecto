import React, { useState, useEffect } from 'react'
import axios from "axios"
import Table from '../../components/table/Table';
import Description from '../../components/description/Description';

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
            <div>
                <Description
                    titulo="Gestión de Usuarios y Roles"
                    descripcion="En la Gestión de Usuarios y Roles permite administrar los roles en el sistema (vendedor, administrador, ejecutivo, operario, director, gerente comercial) y restringir/otorgar los accesos al sistema. Adicionalmente se consultar todos los usuarios de X-Force Tea, asi como modificar sus datos o eliminarlos."
                    textoBoton="Agregar vendedor"
                />
            </div>
        )
    } else {
        return (
            <div>
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
