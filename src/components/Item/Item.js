
import "./Item.css"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'

export const Item = ({ item }) => {

    return (

        <div className="Item_card_Container">
            <img src={item.img}></img>
            <h4>{item.producto}</h4>
            <h5>${item.precio}</h5>
            <Link to={`/item/${item.id}`}> <Button className="item_card_button"> Comprar</Button></Link>

        </div>


    )

}