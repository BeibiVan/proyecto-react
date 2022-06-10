//import Prdocutos bla bla?
import "./Item.css"
import { Link } from "react-router-dom"

export const Item = ({item}) => {

    return  (

        <div className="Item_card_Container">
            <img src={item.img}></img>
            <h4>{item.producto}</h4>
            <h5>{item.precio}</h5>
            <Link to= {`/item/${item.id}`}> Ver mas</Link>

        </div>


    )

}