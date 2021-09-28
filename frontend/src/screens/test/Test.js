import React, { useState } from "react";
import axios from "axios"

const basePath = "http://localhost:3000/api"
const apiVersion = "v1"
const ACCESS_TOKEN = "accessToken"
const REFRESH_TOKEN = "refreshToken"

function signInApi(data) {
    // const url = `${basePath}/${apiVersion}/sign-in`;
    // const url = `${basePath}/${apiVersion}/users/login`;
    // const params = {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // };

    // return axios.post("api/v1/users/login", {
    //     email: "coconut@hotmail.com",
    //     password: "123456"
    // }).then(response => {
    //     return response
    // }).then(result => {
    //     console.log(result)
    //     return result
    // }).catch(err => {
    //     return err.message
    // })

    return axios.post("api/v1/users/login", data).then(response => {
        return response
    }).then(result => {
        console.log(result)
        return result
    }).catch(err => {
        return err.message
    })

    // return fetch(url, params)
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(result => {
    //         console.log(result);

    //         return result;
    //     })
    //     .catch(err => {
    //         return err.message;
    //     });
}

export default function LoginForm() {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const changeForm = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const login = async e => {
        e.preventDefault();
        const result = await signInApi(inputs);
        console.log(result)
        if (result.message) {
            // notification["error"]({
            //     message: result.message
            // });
            console.log("You screwed up...")
        } else {
            // const { accessToken, refreshToken } = result;
            // const { token: accessToken } = result;
            const { token: accessToken } = result.data;
            localStorage.setItem(ACCESS_TOKEN, accessToken);
            //localStorage.setItem(REFRESH_TOKEN, refreshToken);

            // notification["success"]({
            //     message: "Login correcto."
            // });

            console.log("Logged in...")

            window.location.href = "/test";
        }

        console.log(result);
    };

    return (
        <form className="login-form" onChange={changeForm} onSubmit={login} >
            <h1>LOL</h1>

            <input
                // prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                type="email"
                name="email"
                placeholder="Correo electronico"
                className="login-form__input"
            />

            <input
                // prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                type="password"
                name="password"
                placeholder="Contraseña"
                className="login-form__input"
            />

            <button type="submit" className="login-form__button">
                Entrar
            </button>

        </form>
    );
}