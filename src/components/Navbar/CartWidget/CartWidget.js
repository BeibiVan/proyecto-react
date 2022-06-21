import { useContext } from "react";
import "./CartWidget.css"
import { AiOutlineShoppingCart, AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext/CartContext";

export const Carrito = () => {

    const { cantidadTotal } = useContext(CartContext)

    return (
        <div className="carrito_icon" >
            <span><Link to="/cart">
                <AiOutlineShoppingCart />
                {cantidadTotal()}  
            </Link></span>
        </div>
    )
}
