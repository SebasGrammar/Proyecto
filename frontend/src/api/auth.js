import jwtDecode from "jwt-decode";

const basePath = "http://localhost:3000/api";
const apiVersion = "v1";
const ACCESS_TOKEN = "accessToken"
const REFRESH_TOKEN = "refreshToken"

// 1) AuthProvider
// Observations: when invalid credentials, token is undefined & the app crashes.
export function getAccessTokenApi() {
    console.log("I wonder if this runs...")
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    if (!accessToken || accessToken === "null") {
        return null;
    }

    return willExpireToken(accessToken) ? null : accessToken;
}

export function getRefreshTokenApi() {
    console.log("Regresh otken")
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);

    if (!refreshToken || refreshToken === "null") {
        return null;
    }

    return willExpireToken(refreshToken) ? null : refreshToken;
}

export function refreshAccessTokenApi(refreshToken) {
    console.log("refreshaccesstokenapi")
    const url = `${basePath}/${apiVersion}/refresh-access-token`;
    const bodyObj = {
        refreshToken: refreshToken
    };
    const params = {
        method: "POST",
        body: JSON.stringify(bodyObj),
        headers: {
            "Content-Type": "application/json"
        }
    };

    fetch(url, params)
        .then(response => {
            if (response.status !== 200) {
                return null;
            }
            return response.json();
        })
        .then(result => {
            if (!result) {
                logout();
            } else {
                console.log("WHAT?????")
                const { accessToken, refreshToken } = result;
                localStorage.setItem(ACCESS_TOKEN, accessToken);
                localStorage.setItem(REFRESH_TOKEN, refreshToken);
            }
        });
}

export function logout() {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
}

function willExpireToken(token) {
    const seconds = 60;
    const metaToken = jwtDecode(token);
    const { exp } = metaToken;
    const now = (Date.now() + seconds) / 1000;
    return now > exp;
}