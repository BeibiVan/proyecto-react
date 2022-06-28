import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { Productos } from "../ItemListContainer/Productos.js"
import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDocs, collection } from "firebase/firestore"
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

        PedirDetails()

        const detailsReferencia = collection(db, "details")
        getDocs(detailsReferencia)

            .then((resp) => {
                const detailsItemsFirebase = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })

                 setDetail(detailsItemsFirebase) 
            })
    }, [itemId])


    return (


        <div className="Detail_Item_container">

            <ItemDetail item={details} />

        </div>
    )

}