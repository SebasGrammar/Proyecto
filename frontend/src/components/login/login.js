import React from 'react';
import './login.css';

class Login extends React.Component {
    render() {
        return (            
            <section className = "main">
                <section className="iniciar">
                    <h1>Iniciar sesión</h1>
                    <p>Ingresa a tu cuenta de X - Force Team</p>
                    <form action="">
                        <input type="text" id="username" name="username " placeholder="Usuario"/> <br></br>
                        <input type="text" id="password" name="password" placeholder="Contraseña"/> <br></br>
                        <input type="submit" value="Iniciar sesión"/>                    
                    </form>
                        <p>¿Olvidaste tu contraseña?</p>
                </section>
                <section className="resgistrarse">
                    <p>¿No tienes una cuenta? </p>
                    <button type="button">Regístrate </button>
                </section>
            </section>            
        )
    }
}
export default Login;