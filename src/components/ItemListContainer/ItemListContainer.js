import "./ItemListContainer.css"
import { Productos } from "./Productos"
import { useState, useEffect } from "react"
import { ItemList } from "../Item/ItemList"
import { collection, getDoc, getDocs, } from "firebase/firestore"
import { db } from "../Firebase/config"

//import {ItemCounter} from "./components/ItemCounter/ItemCounter.js"

export const ItemListContainer = () => {

    const [items, setItems] = useState([])

    const PedirDatos = () => {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                resolve(Productos)

            }, 1000)

        })
    }

    useEffect(() => {

        PedirDatos()
        // .then((respuesta) => {
        //     setItems(respuesta)
        // })

        const productosReferencia = collection(db, "productos")
        getDocs(productosReferencia)

            .then((resp) => {
                const newItemsFirebase = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })

                 setItems(newItemsFirebase) 
            })


    }, [])


    return (


        <div id="productos_container" className="Item_container">

            <ItemList items={items} />

        </div>
    )

}