import logo from './logo.svg';
// import "./components/Styles-navbar.css"
import './App.css';
import {Navbar} from "./components/Navbar.js"
import {Footer} from "./components/Footer.js"
import {Item_List} from "./components/ItemListContainer/ItemListContainer.js"


 const Listado = {
                 productos: "remeras"
                   }

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      {/* ARMAR HERO BANNER */}
      </header>
       <Item_List productos={Listado.productos}/> 
      
      <Footer/>
    </div>
   
  );
}

export default App;
