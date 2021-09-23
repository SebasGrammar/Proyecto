import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const loggedIn = false

  return (
    <Router>
      <h1>
        un titulo x
      </h1>
      {loggedIn && <Navbar />}
      <Route path="/login" component={Login} />
      <Route path="/" component={Navbar} exact />
    </Router>
  );
}

export default App;
