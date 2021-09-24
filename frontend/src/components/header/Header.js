import React from 'react';
import './Header.css';
import notifications from '../../img/delete.png';
import user from '../../img/deadpool-icon.png';
import logout from '../../img/pencil.png';

export default function Header({ title, headers, data }) {


    return (
        <>
            <section className="o-up-navbar">

                <section>
                    <h3>x-force team</h3>
                </section>


                <section>
                    <form action="">
                        <input type="text" id="username" name="username " placeholder="Buscar.." />
                        <img className="o-img" src={logout} alt="Log out" />
                    </form>

                </section>

                <section className="o-user-bar">
                    <img className="o-img" src={notifications} alt="Notifications" />
                    <img className="o-img" src={user} alt="User picture" />
                    <h4>Administrador</h4>
                    <img className="o-img" src={logout} alt="Log out" />
                </section>

            </section>

        </>

    )
}