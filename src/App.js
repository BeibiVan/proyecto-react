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
import { CartContext } from './components/CartContext/CartContext';
import { useState } from "react" 
import {Cart} from "./components/Cart/Cart"

function App() {

  const [cart, setCart] = useState ([])
  console.log (cart)

    const addItem = (item) => {
    
    setCart ([...cart, item])
  }

  const isInCart = (id) => {
    return cart.some((prod)=> prod.id === id)
  }

    const precioTotal = () => {
      return cart.reduce ((acc, prod )=> acc  += (prod.precio * prod.cantidad),0 )
    }

    const cantidadTotal = () => {
      return cart.reduce ((acc, prod )=> acc  += ( prod.cantidad),0 )
    }

    const vaciarCarrito = () => {
      setCart ([])
    }
    
    const eliminarProducto = (id) => {
      setCart (cart.filter ((prod) => prod.id !== id))
    }

  return (


    <div className="App">

       

     <CartContext.Provider value= {{cart, addItem, isInCart, precioTotal, cantidadTotal, vaciarCarrito, eliminarProducto}} >

      <BrowserRouter>
          <Navbar />  
        <Routes>
          <Route path="/" element={<> <Banner /> <ItemListContainer /> </>} />
          <Route path="/categoria/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
        <Footer />
      </BrowserRouter>
      </CartContext.Provider>
    </div>

  );
}

export default App;
