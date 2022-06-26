import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { Productos } from "../ItemListContainer/Productos.js"
import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../Firebase/config"


export const ItemDetailContainer = () => {

    const [details, setDetail] = useState([])
    const { itemId } = useParams()

    const PedirDetails = () => {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(Productos)
            }, 1000)

        })
    }

    useEffect(() => {

        const docRef = doc (db, "productos", itemId)
        getDoc (docRef)
        .then ((doc)=> {
            setDetail ({id: doc.id, ...doc.data ()})
        })

    }, [])


    return (


        <div className="Detail_Item_container">

            <ItemDetail item={details} />

        </div>
    )

}