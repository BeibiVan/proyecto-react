import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from "./components/Navbar/Navbar.js"
import { Banner } from "./components/BannerHero/Banner-hero.js"
import { ItemList } from "./components/ItemListContainer/ItemListContainer.js"
import { Footer } from "./components/Footer/Footer.js"
import { ItemCounter } from "./components/ItemCounter/ItemCounter.js"
import { GetItem } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer.js"

function App() {
  return (
    <div className="App">


      <BrowserRouter>
          <Navbar />  
        <Routes>
          <Route path="/" element={<> <Banner /> <ItemListContainer /> </>} />
          <Route path="/categoria/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
