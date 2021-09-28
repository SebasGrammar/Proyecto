// import React, { useState, useEffect, createContext } from "react";
// // import jwtDecode from "jwt-decode";
// import jwt from "jsonwebtoken";
// import {
//     getAccessTokenApi,
//     getRefreshTokenApi,
//     refreshAccessTokenApi,
//     logout
// } from "../api/auth";

// export const AuthContext = createContext();

// export default function AuthProvider(props) {
//     const { children } = props;
//     const [user, setUser] = useState({
//         user: null,
//         isLoading: true
//     });

//     useEffect(() => {
//         checkUserLogin(setUser);
//     }, []);

//     return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
// }

// function checkUserLogin(setUser) {
//     const accessToken = getAccessTokenApi();

//     if (!accessToken) {
//         const refreshToken = getRefreshTokenApi();

//         if (!refreshToken) {
//             logout();
//             setUser({
//                 user: null,
//                 isLoading: false
//             });
//         } else {
//             refreshAccessTokenApi(refreshToken);
//         }
//     } else {
//         setUser({
//             isLoading: false,
//             user: jwt.verify(accessToken)
//             // user: jwtDecode(accessToken)
//         });
//     }
// }

import React, { useState, useEffect, createContext } from "react";
// import jwtDecode from "jwt-decode";
import jwt from "jsonwebtoken";
// import {
//     getAccessTokenApi,
//     getRefreshTokenApi,
//     refreshAccessTokenApi,
//     logout
// } from "../api/auth";
import axios from "axios"

const JWT_SECRET = "j3jr9j3rh9200"
const JWT_EXPIRE = "30d"

// import {
//     getAccessTokenApi,
//     getRefreshTokenApi,
//     // refreshAccessTokenApi,
//     // logout
// } from "../test/test";

const ACCESS_TOKEN = "accessToken"
const REFRESH_TOKEN = "refreshToken"

export const AuthContext = createContext();

function getAccessTokenApi() {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    if (!accessToken || accessToken === "null") {
        return null;
    }

    return willExpireToken(accessToken) ? null : accessToken;
}

export function getRefreshTokenApi() {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);

    if (!refreshToken || refreshToken === "null") {
        return null;
    }

    return willExpireToken(refreshToken) ? null : refreshToken;
}

function refreshAccessTokenApi(refreshToken) {
    // const url = `${basePath}/${apiVersion}/refresh-access-token`;
    // const bodyObj = {
    //     refreshToken: refreshToken
    // };
    // const params = {
    //     method: "POST",
    //     body: JSON.stringify(bodyObj),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // };

    axios.post(`api/v1/refresh-access-token`, {
        refreshToken
    }).then(response => {
        if (response.status !== 200) {
            return null
        }
        return response.json();
    }).then(result => {
        if (!result) {
            logout();
        } else {
            const { accessToken, refreshToken } = result;
            localStorage.setItem(ACCESS_TOKEN, accessToken);
            localStorage.setItem(REFRESH_TOKEN, refreshToken);
        }
    })

    // fetch(url, params)
    //     .then(response => {
    //         if (response.status !== 200) {
    //             return null;
    //         }
    //         return response.json();
    //     })
    //     .then(result => {
    //         if (!result) {
    //             logout();
    //         } else {
    //             const { accessToken, refreshToken } = result;
    //             localStorage.setItem(ACCESS_TOKEN, accessToken);
    //             localStorage.setItem(REFRESH_TOKEN, refreshToken);
    //         }
    //     });
}

function logout() {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
}

function willExpireToken(token) {
    const seconds = 60;
    // const metaToken = jwtDecode(token);
    const metaToken = jwt.verify(token, JWT_SECRET);
    const { exp } = metaToken;
    const now = (Date.now() + seconds) / 1000;
    return now > exp;
}



export default function AuthProvider(props) {
    console.log("Auth provider running")
    const { children } = props;
    const [user, setUser] = useState({
        user: null,
        isLoading: true
    });

    useEffect(() => {
        checkUserLogin(setUser);
    }, []);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

// function checkUserLogin(setUser) {
//     // const accessToken = getAccessTokenApi();
//     console.log("does this run?")
//     if (accessToken) {
//         const accessToken = localStorage.getItem("accessToken")

//         let token = jwt.verify(accessToken, JWT_SECRET)
//         console.log(token)

//         setUser({
//             isLoading: false,
//             user: jwt.sign(accessToken, JWT_SECRET)
//             // user: jwtDecode(accessToken)
//         });
//         console.log("The user is: ") // not the user, but the user id. need an api to get user from backend
//         console.log(jwt.verify(accessToken, JWT_SECRET))
//     }

// }

function checkUserLogin(setUser) {
    console.log("Running check user login")
    const accessToken = getAccessTokenApi();
    console.log("Founc and acess token.")

    if (!accessToken) {
        console.log("No access token. Creating one.")
        const refreshToken = getRefreshTokenApi();

        if (!refreshToken) {
            console.log("No refresh token. ")
            logout();
            setUser({
                user: null,
                isLoading: false
            });
        } else {
            refreshAccessTokenApi(refreshToken);
        }
    } else {
        setUser({
            isLoading: false,
            user: jwt.decode(accessToken, JWT_SECRET)
            // user: jwtDecode(accessToken)
        });
    }
}