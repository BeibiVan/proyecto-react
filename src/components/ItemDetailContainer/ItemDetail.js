import { ItemCounter } from "../ItemCounter/ItemCounter"
import { useNavigate, Link } from "react-router-dom"
import { useContext, useState } from "react"
import { CartContext } from "../CartContext/CartContext"
import Button  from 'react-bootstrap/Button'




export const ItemDetail = ({item}) => {

    const {addItem, isInCart} = useContext (CartContext)
    
   
    const [cantidad, setCantidad] = useState (1)

   

    const handleAgregar = () => {
        const itemToCart = {
            ... item,
            cantidad

        }
        addItem (itemToCart)
    }

    return (


        <div className="Details_card_container">
            <img src={item.img}></img>
                  <h4>{item.producto}</h4>
                  <p>{item.descripción}</p>

                    {
                        isInCart(item.id)
                        ? <Link to= "/cart"> <Button className="finish_button"> Terminar mi compra</Button></Link>
                        :
                    <ItemCounter 
                        max={item.stock} 
                        contador = {cantidad}
                        setContador = {setCantidad}
                        handleAgregar = {handleAgregar}  />
                    }


                    
        </div>

    )


}