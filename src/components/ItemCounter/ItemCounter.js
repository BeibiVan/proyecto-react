import "./ItemCounter.css"
import Button from 'react-bootstrap/Button'
import { useState } from "react"

export const ItemCounter = () => {

    
     const [contador, setContador] = useState (0)

     const Incrementar = () => {
         setContador (contador + 1)
         console.log ("sumaste producto")
     }
     const Decrementar = () => {
         setContador (contador - 1)
         console.log ("restaste producto")
     }
     

    return (

        <div className="itemcounter_container">
            
            <Button variant="primary" className= "resta" onClick={Decrementar}>-</Button>
            <p >{contador}</p>
            <Button variant="primary" className= "suma" onClick={Incrementar}>+</Button>
            
            
        </div>

    )


}

