import "./ItemListContainer.css"
import {Productos}  from "../Item/ItemList"
import {useState,  useEffect } from "react"
//import {ItemCounter} from "./components/ItemCounter/ItemCounter.js"

    export const ItemList = () => {

        const [items, setItems] = useState ([])
         

        const PedirDatos = () => {

            return new Promise ((resolve,reject) => {

                setTimeout (()=>{
                    resolve (Productos)
                }, 2000)

            })
        }

        useEffect (() => {

        PedirDatos ()
            .then ((respuesta) => {
                setItems (respuesta)
            })
    
        }, [])
    

    return (
        

        <div id="productos_container" className="Item_container"> 

        {
            items.map((item) => (
                 <div className="Item_card_container">
                     <img src={item.img}></img>
                     <h4>{item.producto}</h4>
                     <h5>{item.precio}</h5>
                     
                 </div>
            ))
            
        }
       
        </div>
    )
    
}