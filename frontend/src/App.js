import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Login from './screens/login copy/Login';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Usuarios from './screens/usuarios/Usuarios';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const loggedIn = false

  return (
    <Router>
      {loggedIn && <Navbar />}
      <Route path="/login" component={Login} />
      <Route path="/usuarios" component={Header} exact />
      <Route path="/usuarios" component={Usuarios} />
    </Router>
  );
}

export default App;
