import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Route, Redirect } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import Test from "../screens/test/Test"
import jwtDecode from "jwt-decode"
import jwt from "jsonwebtoken"
import './Layout.css';

import Navbar from "../components/navbar/navbar"

let tabSelector = {
    "user": [
        <a className="o-links " href="/home">Inicio</a>
        , <a className="o-links " href="/sell">Ventas</a>
    ],
    "publisher": [
        <a role="tab" aria-controls="home" aria-selected="true" href="/home" className="o-links nav-link active">Inicio</a>
        , <a  className="o-links nav-link active" href="/sell">Ventas</a>
        , <a className="o-links nav-link active" href="/sellers">Vendedores</a>
        , <a className="o-links nav-link active" href="/users">Usuarios y Roles</a>
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

    if (!user && !isLoading) {
        return (
            <>
                <Route path="/logint" component={Test} exact />
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
