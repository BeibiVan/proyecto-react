import logo from './logo.svg';
// import "./components/Styles-navbar.css"
import './App.css';
import {Navbar} from "./components/Navbar.js"
import {Footer} from "./components/Footer.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Navbar/>
      </header>
      
      <Footer/>
    </div>
   
  );
}

export default App;
