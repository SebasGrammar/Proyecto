import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Route, Redirect } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import Test from "../screens/test/Test"
import jwtDecode from "jwt-decode"
import jwt from "jsonwebtoken"

import Navbar from "../components/navbar/navbar"

let tabSelector = {
    "user": [
        <button className="o-button">Inicio</button>
        , <button className="o-button">Ventas</button>
    ],
    "publisher": [
        <button className="o-button">Inicio</button>
        , <button className="o-button">Ventas</button>
        , <button className="o-button">vendedores</button>
        , <button className="o-button">Usuarios y Roles</button>
    ]
}

export default function Layout(props) {
    const { routes } = props;
    const [loggedInUser, setLoggedInUser] = useState()
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const { Header, Content, Footer } = Layout;
    const { user, isLoading } = useAuth();

    useEffect(() => {
        if (!isLoading) {
            axios.get(`http://localhost:3000/api/v1/users/${user.id}`, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(result => {
                return result
            }).then(result => {
                setLoggedInUser(result.data.user)
            })
        }
    }, [user])


    console.log("UFUIASOPAA")
    console.log(user)

    if (!user && !isLoading) {
        console.log("THERES NOS FUCKING USE")
        return (
            <>
                <Route path="/logint" component={Test} />
                <Redirect to="/logint" />
            </>
        );
    } 

    if (loggedInUser && !isLoading) {
        console.log(loggedInUser)
        return (
            <div>
                <Navbar role={loggedInUser.role} tabs={tabSelector[loggedInUser.role]} />
                <h1>{loggedInUser.name || "not found"}</h1>
            </div>
        );
    }

    return null;
}
