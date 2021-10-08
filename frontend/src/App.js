import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Login from './screens/login/Login';
import Navbar from './components/navbar/navbar';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "./layout/Layout"
import LoginForm from "./screens/test/Test"
import AuthProvider from './providers/AuthProvider';
import Usuarios from './screens/usuarios/Usuarios';
import Vendedores from './screens/vendedores/Vendedores';
import Ventas from './screens/ventas/Ventas';


// The token's being set from LoginForm.

function App() {

  const loggedIn = false

  return (
    <AuthProvider>
      <Router>
        {/* <h1>
          un titulo x
        </h1> */}
        {loggedIn && <Navbar />}
        <Route path="/" component={Layout} />
        <Route path="/login" component={Login} />
        {/* <Route path="/logint" component={LoginForm} />  */}
        {/* the route above shouldn't be enabled... it's supposed to be rendered from Test.js . FCK */}
        {/* <Route path="/" component={Navbar} exact /> */}
        <Route path="/users" component={Usuarios} />
      </Router>
    </AuthProvider>
  );
}

export default App;
