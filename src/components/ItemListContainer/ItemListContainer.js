import "./ItemListContainer.css"
import { Productos } from "../Item/ItemList"
import {useState,  useEffect } from "react"

export const ItemList = () => {

    const [items, setItems] = useState ([])    

       


      const pedirDatos = () => {
         return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(Productos)
        }, 2000)
    })
                        }
    
                        
                        
     useEffect (() => {
                            
                            pedirDatos()
                            .then ((resp) => {
                                 setItems ( resp )
                            }) 
                            .catch ((error) => {
                                 console.log (error)
                            })
        }, [])

    return(
        
        
       
        <div id= "productos_container" className="Item_container">
             
        
        
        {
            items.map ((item)=> 
            <div className="Item_container_items">
            <img src={item.img}></img>
            <h4> {item.producto} </h4>
            <p>{item.precio}</p> 
            </div>
            )
        }

        </div>
        
    
        
    )
}