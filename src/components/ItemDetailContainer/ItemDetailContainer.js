 import "./ItemDetailContainer.css"
 import {useState,  useEffect } from "react"
 import { Productos } from "../ItemListContainer/Productos.js"
 import { ItemDetail } from "./ItemDetail"

 export const ItemDetailContainer = () => {

     const [details, setDetail] = useState ([])
     

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
            setDetail(resp.find(item => item.id == 1))
         })

     }, [])


 return (
    

     <div className="Detail_Item_container"> 

      <ItemDetail  item={details}/>
   
     </div>
 )

 }