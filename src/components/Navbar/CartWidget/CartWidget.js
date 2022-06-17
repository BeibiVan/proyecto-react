import { useContext } from "react";
import { AiOutlineShoppingCart, AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext/CartContext";

export const Carrito = () => {

    const {cantidadTotal} = useContext (CartContext)

    return (
        <div className="carrito">
            <Link to="/cart">
        <AiOutlineShoppingCart/>
            <span>{cantidadTotal()}  </span>
        </Link>
        </div>
    )
}
