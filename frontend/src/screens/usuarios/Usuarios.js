import React, { useState, useEffect } from 'react'
import axios from "axios"

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
            <div>
                {users.map(user => (
                    <h1>{user.name}</h1>
                ))}
            </div>
            // <h1>Loaded already. </h1>
        )
    } else {
        return (
            <h1>Loading...</h1>
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
