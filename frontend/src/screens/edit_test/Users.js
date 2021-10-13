import React, { useState, useEffect } from 'react';
import axios from "axios";
import Table from '../../components/table/Table';
import Description from '../../components/description/Description';

import Edit from "./Edit"

export default function Usuarios() {

    const [users, setUsers] = useState(null)
    const [reloadUsers, setReloadUsers] = useState(true);

    const token = localStorage.getItem("accessToken")

    useEffect(() => {
        const fetchUsers = async () => {
            const products = await axios.get("http://localhost:3000/api/v1/users")

            setUsers(products.data.data)
        }

        fetchUsers()

    }, [])

    if (users) {
        console.log(users)
        return (
            <div className="contenedor">
                {users.map(user => (
                    <div>
                        <h1>{user.name}</h1>
                        <button>edit {user._id}</button>
                    </div>
                ))}
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
