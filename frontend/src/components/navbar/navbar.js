import React from 'react';
import './navbar.css';
import notifications from '../../img/bell.png';
import user from '../../img/deadpool-icon.png';
import logout from '../../img/logout.png';
import search from '../../img/loupe.png';

// class Navbar extends React.Component {
//     render() {
//         return (

//             <section className="o-main-container">

//                 <section className="o-up-navbar">

//                     <section>
//                         <h3>x-force team</h3>
//                     </section>


//                     <section>
//                         <form action="">
//                             <input type="text" id="username" name="username " placeholder="Buscar.." />
//                             <img className="o-img" src={logout} alt="Log out" />
//                         </form>

//                     </section>

//                     <section className="o-user-bar">
//                         <img className="o-img" src={notifications} alt="Notifications" />
//                         <img className="o-img" src={user} alt="User picture" />
//                         <h4>Administrador</h4>
//                         <img className="o-img" src={logout} alt="Log out" />
//                     </section>

//                 </section>

//                 <section className="o-down-navbar">
//                     <nav className="navbar navbar-light bg-light justify-content-around ">
//                         <button className="o-button">Inicio</button>
//                         <button className="o-button">Ventas</button>
//                         <button className="o-button">vendedores</button>
//                         <button className="o-button">Usuarios y Roles</button>
//                     </nav>

//                 </section>


//             </section>
//         )
//     }
// }

// Rendering from Layout

export default function navbar({ role, tabs }) {
    return (

        <section className="o-main-container">

            <section className="o-up-navbar">

                <section>
                    <h3>X-force team</h3>
                </section>

                <section>
                    <form action="">
                        <input className="o-input-text" type="text" id="username" name="username " placeholder="Buscar.." />
                        <img className="o-img o-searchh" src={search} alt="Log out" />
                    </form>

                </section>

                <section className="o-user-bar">
                    <img className="o-img" src={notifications} alt="Notifications" />
                    <img className="o-img" src={user} alt="User picture" />
                    <h4>{role}</h4>
                    <img className="o-img" src={logout} alt="Log out" />
                </section>

            </section>

            <section className="o-down-navbar">
                <nav className="navbar navbar-light bg-light justify-content-around nav-link active">
                    {tabs}
                </nav>
            </section>


        </section>

    )
}

// export default Navbar;