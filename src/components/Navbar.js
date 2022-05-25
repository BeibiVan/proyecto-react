import "./Styles-navbar.css"
import {Carrito} from "./CartWidget"



export const Navbar = () =>    {


    
    return (
            <div className= "navbar" >  
            <a href=""><img className = "nav-logo" src={require("./mainlogo.png")} alt="nav-logo"></img></a>
     
        <ul className="navbar_list">
            <a href=""><li className= "navbar_list__1"> Productos</li></a>
            <a href=""><li className= "navbar_list__1"> Nosotros</li></a>
            <a href=""><li className= "navbar_list__1"> Contacto</li></a>
            <li className= "navbar_list__1"> <Carrito/></li>
            {/* <li className= "mobile_menu">  <AiOutlineDown/></li> */}
            </ul> 

            
               
        </div>
                        )}