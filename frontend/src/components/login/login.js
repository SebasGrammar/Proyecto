import React from 'react';
import './login.css';
import deadpool from '../../img/deadpool-icon.png';

class Login extends React.Component {
    render() {
        return (            
            <section className = "main">
                <section className="iniciar">
                    <img className="l-img" src={deadpool} alt="Deadpool Team Icon" />
                    <h1>Iniciar sesión</h1>
                    <p>Ingresa a tu cuenta de X - Force Team</p>
                    <form action="">
                        <input className="entryText" type="text" id="username" name="username " placeholder="Usuario"/> <br></br>
                        <input className="entryText" type="text" id="password" name="password" placeholder="Contraseña"/> <br></br>
                        <input className="botonPrincipal" type="submit" value="Iniciar sesión"/>
                    </form>
                        <p>¿Olvidaste tu contraseña?</p>
                </section>
                <section className="resgistrarse">
                    <p>¿No tienes una cuenta? </p>
                    <button className="botonSecundario" type="button">Regístrate </button>
                </section>
            </section>            
        )
    }
}
export default Login;