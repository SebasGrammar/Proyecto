import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Login from './screens/login/Login';
import Navbar from './components/navbar/navbar';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginForm from "./screens/test/Test"

console.log(LoginForm)

function App() {

  const loggedIn = false

  return (
    <Router>
      <h1>
        un titulo x
      </h1>
      {loggedIn && <Navbar />}
      <Route path="/login" component={Login} />
      <Route path="/logint" component={LoginForm} />
      <Route path="/" component={Navbar} exact />
    </Router>
  );
}

export default App;
