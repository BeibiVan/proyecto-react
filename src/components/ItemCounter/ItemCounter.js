import "./ItemCounter.css"
import Button from 'react-bootstrap/Button'
import { useState } from "react"

export const ItemCounter = ({max}) => {

    
     const [contador, setContador] = useState (1)

     const Incrementar = () => {
         contador < max && setContador (contador + 1)
         console.log ("sumaste producto")
     }
     const Decrementar = () => {
         
         console.log ("restaste producto")
         contador > 1 && setContador(contador - 1)
     }
     

    return (

        <div className="itemcounter_container">
            
            <Button variant="primary" className= "resta" onClick={Decrementar}>-</Button>
            <p >{contador}</p>
            <Button variant="primary" className= "suma" onClick={Incrementar}>+</Button>
            <Button variant="primary" className= "addtocart" >Agregar al carrito</Button>
            
            
        </div>

    )


}

