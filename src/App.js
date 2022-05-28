import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar} from "./components/Navbar/Navbar.js"
import {Banner} from "./components/BannerHero/Banner-hero.js"
import {Item_List} from "./components/ItemListContainer/ItemListContainer.js"
import {Footer} from "./components/Footer/Footer.js"
import {ItemCounter} from "./components/ItemCounter/ItemCounter.js"


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      <Banner/>
      </header>

        
        <Item_List/> 
        <ItemCounter/>
      
        <Footer/>
    </div>
   
  );
}

export default App;
