import "./Styles-navbar.css"
import { Carrito } from "./CartWidget/CartWidget.js"
import navlogo from "./mainlogo.png"
import { Link } from "react-router-dom"


export const Navbar = () => {



    return (
        <div className="barra" >
            <img className="nav-logo" src={navlogo} alt="nav-logo"></img>

            <ul className="barra_list">
                <a className="a" href=""><li className="barra_list__1"> Productos</li></a>
                <a className="a" href=""><li className="barra_list__1"> Nosotros</li></a>
                <a className="a" href=""><li className="barra_list__1"> Contacto</li></a>
                <li className="barra_list__1"> <Carrito /></li>
                {/* <li className= "mobile_menu">  <AiOutlineDown/></li> */}
            </ul>



        </div>
    )
}