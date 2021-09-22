import './App.css';
import Login from './components/login/login';
import Navbar from './components/navbar/navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <login/>
      <h1>
        un titulo x
      </h1>
      <Login/>
      <Navbar></Navbar>
     
      
    </div>
  );
}

export default App;
