import { Item } from "../Item/Item"
import "./Item.css"
import { Link } from "react-router-dom"


export const ItemList = ({items}) => {

    return (

        <div className="container_card">

        {
            items.map ((item) => (
                <Item item={item} key={item.id}/>
                ))
        }



        </div>


    )

}
