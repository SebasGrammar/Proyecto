import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Route, Redirect } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import Test from "../screens/test/Test"
import jwtDecode from "jwt-decode"
import jwt from "jsonwebtoken"


import Navbar from "../components/navbar/navbar"

export default function Layout(props) {
    const { routes } = props;
    const [loggedInUser, setLoggedInUser] = useState()
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const { Header, Content, Footer } = Layout;
    const { user, isLoading } = useAuth();


    // useEffect(() => {
    //     axios.get(`api/users/${user.id}`, {
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    // }, [user])

    // http://localhost:3000/api/v1/users/61522710a12e28c95c442fb6
    // useEffect(() => {
    //     if (!isLoading) {
    //         axios.get(`http://localhost:3000/api/v1/users/${user.id}`, {
    //             headers: {
    //                 "Content-Type": "application/json"
    //             }
    //         }).then(result => {
    //             return result
    //         }).then(result => {
    //             setLoggedInUser(result)
    //         })

    //     }
    // }, [user])

    useEffect(() => {
        if (!isLoading) {
            axios.get(`http://localhost:3000/api/v1/users/${user.id}`, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(result => {
                return result
            }).then(result => {
                // setLoggedInUser(result.data.user.name)
                setLoggedInUser(result.data.user)

            })
        }
    }, [user])


    if (!user && !isLoading) {
        return (
            <>
                <Route path="/logint" component={Test} />
                <Redirect to="/logint" />
            </>
        );
    }



    // if (user && !isLoading) {
    //     console.log(loggedInUser)
    //     return (
    //         <div>
    //             <h1>{"loggedInUser" || "not found"}</h1>
    //         </div>
    //     );
    // }

    if (loggedInUser && !isLoading) {
        console.log(loggedInUser)
        return (
            <div>
                <Navbar role={loggedInUser.role} />
                <h1>{loggedInUser.name || "not found"}</h1>
            </div>
        );
    }

    return null;
}

// function LoadRoutes({ routes }) {
//     return (
//         <Switch>
//             {routes.map((route, index) => (
//                 <Route
//                     key={index}
//                     path={route.path}
//                     exact={route.exact}
//                     component={route.component}
//                 />
//             ))}
//         </Switch>
//     );
// }