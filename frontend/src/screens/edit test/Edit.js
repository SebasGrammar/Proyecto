import React, { useState } from "react";
import useAuth from "../hooks/useAuth"
import jwtDecode from "jwt-decode"
import jwt from "jsonwebtoken"
import axios from "axios"

const basePath = "http://localhost:3000/api"
const apiVersion = "v1"
const ACCESS_TOKEN = "accessToken"
const REFRESH_TOKEN = "refreshToken"

export default function Edit({ match }) {

    const url = `${basePath}/${apiVersion}/users/${match.params.id}`;

    const [data, setData] = useState({
        name: ""
    })

    const changeForm = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const edit = async e => {
        await axios.put(url, data)
    }

    return (
        <div>
            <form className="login-form" onChange={changeForm} onSubmit={edit} >
            <h1>LOL</h1>

            <input
            // prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            type ="name"
            name="name"
            placeholder="nombre"
            />

            <button type="submit">submit</button>
        </div>
    )
}
