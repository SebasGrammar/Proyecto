import { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios"

// export default function Layout() {
//     return (
//         <div>

//         </div>
//     )
// }

// import React, { useState } from "react";
// import { Route, Switch, Redirect } from "react-router-dom";
// import { Layout } from "antd";
// import useAuth from "../hooks/useAuth";
// import MenuTop from "../components/Admin/MenuTop";
// import MenuSider from "../components/Admin/MenuSider";
// import AdminSignIn from "../pages/Admin/SignIn";

// import "./LayoutAdmin.scss";

async function getUser({ id }) {
    // const user = await axios.get(`api/v1/users/${user.id}`)
    // const user = await axios.get(`api/v1/users/${id}`)
    return await axios.get(`api/v1/users/${id}`)
}

export default function Layout(props) {
    // const { routes } = props;
    // const [menuCollapsed, setMenuCollapsed] = useState(false);
    let { user, isLoading } = useAuth(); // user is actually user id
    let [us, setUs] = useState({

    })
    // console.log("Let's see if there's an user")
    // console.log(user)

    // axios.get(`api/v1/users/${user.id}`).then(result => {
    //     console.log(result)
    // })

    // if (!isLoading) {
    //     axios.get(`api/v1/users/${user.id}`).then(result => {
    //         console.log(result)
    //     })
    // }

    // if (!isLoading) {

    //     const user2 = axios.get(`api/v1/users/${user.id}`).then(result => {
    //         console.log(result.data)
    //     })

    // }

    let loggedInUser;

    useEffect(() => {

        // axios.get(`api/v1/users/${user.id}`).then(result => {
        //     console.log("INSIDE EFFET")
        //     console.log(result)
        // })

        // console.log("JJJJTHIS IS NOT RUNIG")
        // console.log(user)

        const getUser = async () => {
            const response = await axios.get(`api/v1/users/${user.id}`)
            console.log(response.data.user.name)
            return response.data.user
        }

        if (user) {
            loggedInUser = getUser()
            setUs(getUser())
            console.log(user)
        }


        // console.log("ABOVE")



    }, [user])

    console.log(us.name)
    // console.log("OK")
    // console.log(actualUser)

    if (!user && !isLoading) {
        return (
            <>
                <Route path="/logint" />
                <Redirect to="/logint" />
            </>
        );
    }

    // console.log(loggedInUser)


    if (user && !isLoading) {
        return (
            <div>
                <h1>{user.id}</h1>
                <h1>{user.name || "nof fond"}</h1>
                {/* <div
                    className="layout-admin"
                    style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
                >
                    <Header className="layout-admin__header">
                        <MenuTop
                            menuCollapsed={menuCollapsed}
                            setMenuCollapsed={setMenuCollapsed}
                        />
                    </Header>
                    <Content className="layout-admin__content">
                        <LoadRoutes routes={routes} />
                    </Content>
                    <Footer className="layout-admin__footer">
                        Agustin Navarro Galdon
                    </Footer>
                </div> */}
            </div>
        );
    }

    return null;
}

function LoadRoutes({ routes }) {
    return (
        <Switch>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </Switch>
    );
}