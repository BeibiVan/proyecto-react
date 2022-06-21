import "./Styles-navbar.css"
import { Carrito } from "./CartWidget/CartWidget.js"
import navlogo from "./mainlogo.png"
import { Link } from "react-router-dom"


export const Navbar = () => {



    return (
        <div className="barra" >
            <Link to={"/"}><img className="nav-logo" src={navlogo} alt="nav-logo"></img> </Link>

            <ul className="barra_list">
                <Link to={"/productos"}> <li className="barra_list__1"> Productos</li></Link>
                <Link to={"/nosotros"}>   <li className="barra_list__1"> Nosotros</li></Link>
                <Link to={"/contacto"}>    <li className="barra_list__1"> Contacto</li></Link>
                <li> <Carrito /></li>
                {/* <li className= "mobile_menu">  <AiOutlineDown/></li> */}
            </ul>



        </div>
    )
}