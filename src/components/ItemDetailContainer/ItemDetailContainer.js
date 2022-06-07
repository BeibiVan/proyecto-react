import "./ItemDetailContainer.css"
import {useState,  useEffect } from "react"
import { Productos } from "../Item/ItemList"

export const GetItem = () => {

    const [detail, setDetail] = useState ([])
     

    const PedirDetails = () => {

        return new Promise ((resolve,reject) => {

            setTimeout (()=>{
                resolve (Productos)
            }, 2000)

        })
    }

    useEffect (() => {

    PedirDetails ()
        .then ((resp) => {
            setDetail (resp)
        })

    }, [])


return (
    

    <div className="Detail_Item_container"> 

    {
        detail.map((details) => (
             <div className="Details_card_container">
                 <img src={details.img}></img>
                 <h4>{details.producto}</h4>
                 <h5>{details.descripción}</h5>
                 
             </div>
        ))
        
    }
   
    </div>
)

}