import "./ItemListContainer.css"
import { Productos } from "./Productos"
import {useState,  useEffect } from "react"
import { ItemList } from "../Item/ItemList"

//import {ItemCounter} from "./components/ItemCounter/ItemCounter.js"

    export const ItemListContainer = () => {
    
        const [items, setItems] = useState([])

        const PedirDatos = () => {

        return new Promise((resolve, reject) => {

        setTimeout(() => {

        resolve(Productos)

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

       <ItemList items= {items}/>
       
        </div>
    )
    
}