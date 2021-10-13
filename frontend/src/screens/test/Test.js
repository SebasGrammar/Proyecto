import React, { useState } from "react";
import axios from "axios"
import '../login/login.css';
import deadpool from '../../img/deadpool-icon.png'

const basePath = "http://localhost:3000/api"
const apiVersion = "v1"
const ACCESS_TOKEN = "accessToken"
const REFRESH_TOKEN = "refreshToken"

function signInApi(data) {
    console.log("Is singni jiapi even runing")
    const url = `${basePath}/${apiVersion}/users/login`;
    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    };

    return fetch(url, params)
        .then(response => {
            return response.json();
        })
        .then(result => {
            console.log(result);

            return result;
        })
        .catch(err => {
            return err.message;
        });
}

export default function LoginForm() {
    console.log("LoginForm. Running?")
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
        console.log("Ok. Login running...")
        const result = await signInApi(inputs);
        console.log(result)
        if (result.message) {
            // notification["error"]({
            //     message: result.message
            // });
            console.log("You screwed up...")
        } else {
            console.log("HOOLY SHIT")
            console.log(result)
            // const { accessToken, refreshToken } = result;
            // const { token: accessToken } = result;


            // const { token: accessToken } = result.data;

            const { token: accessToken, refreshToken } = result;
            if (accessToken) {
                localStorage.setItem(ACCESS_TOKEN, accessToken);
                localStorage.setItem("refreshToken", refreshToken)

                //localStorage.setItem(REFRESH_TOKEN, refreshToken);

                // notification["success"]({
                //     message: "Login correcto."
                // });

                console.log("Logged in...")

                // window.location.href = "/admin";
                window.location.href = "/";
            }
        }

        console.log(result);
    };

    return (
        <section className="main">
            <section className="iniciar">

                <img className="l-img" src={deadpool} alt="Deadpool Team Icon" />

                <h1>Iniciar sesión</h1>
                <p>Ingresa a tu cuenta de X - Force Team</p>

                <form className="login-form" onChange={changeForm} onSubmit={login} >

                <input className="entryText"
                    // prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                    type="text"
                    name="username "
                    placeholder="Usuario"
                    className="login-form__input"
                /> <br></br>

                <input className="entryText"
                    // prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="login-form__input"
                /> <br></br>

                    <button type="submit" className="login-form__button botonPrincipal">
                    Iniciar sesión
                </button>

                </form>
            </section>
        </section>
    );
}