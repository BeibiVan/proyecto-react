import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"


export const Cart = () => {

    const {cart, precioTotal, vaciarCarrito, eliminarProducto} = useContext (CartContext)



    return (

        <div className="carrito">
            <h2>Tu compra</h2> 
            {
                cart.map ((item)=> (<div key={item.id} className="carrito_list">
                    <h4>{item.producto}</h4>
                    <h5>{item.cantidad}</h5>
                    <p>{item.precio * item.cantidad}</p>
                    <h4 onClick= {()=> eliminarProducto(item.id)}>Eliminar un producto</h4>

                    
                    </div>))
            }

            <h5>TOTAL: ${precioTotal ()}</h5>
            <h3 onClick= {vaciarCarrito}>  Vaciar el carrito  </h3>


        </div>
        
    )
}