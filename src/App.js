import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar} from "./components/Navbar/Navbar.js"
import {Banner} from "./components/BannerHero/Banner-hero.js"
import {ItemList} from "./components/ItemListContainer/ItemListContainer.js"
import {Footer} from "./components/Footer/Footer.js"
import {ItemCounter} from "./components/ItemCounter/ItemCounter.js"
import { GetItem } from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"

 


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <BrowserRouter>
      <Navbar/>
      <Banner/>
      <ItemList/>
      <Routes>

      
      <Route path= "/" element= {<GetItem/>}/>

      
      
      <Route path= "/" element= {<Footer/>}/>
      </Routes>
     </BrowserRouter>
    </div>
   
  );
}

export default App;
