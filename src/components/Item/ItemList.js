import { Item } from "../Item/Item"
import "./Item.css"

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
