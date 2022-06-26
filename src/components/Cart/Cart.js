import  Button  from 'react-bootstrap/Button'
import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import "./Cart.css"

export const Cart = () => {

    const { cart, precioTotal, vaciarCarrito, eliminarProducto } = useContext(CartContext)



    return (

        <div>
        {
            cart.length === 0
                ? <>
                    <h2>Tu carrito esta vacío</h2>
                </>

                : <>
               

                    <div className="carrito_container">
                        <h2>Tu compra</h2>
                        {
                            cart.map((item) => (<div key={item.id} className="carrito_list">
                                <h4>{item.producto}</h4>
                                <h5>{item.cantidad}</h5>
                                <p>{item.precio * item.cantidad}</p>
                                <h5><Button className='remove_button' onClick={() => eliminarProducto(item.id)}>  Eliminar un producto</Button></h5>


                            </div>))
                        }

                        <h5>TOTAL: ${precioTotal()}</h5>
                        <h4> <Button className='remove_button' onClick={vaciarCarrito}>  Vaciar el carrito  </Button></h4>
                       


                    </div>
                </>
        }
        </div>


    )
}