import { ItemCounter } from "../ItemCounter/ItemCounter"



export const ItemDetail = ({item}) => {

    return (


        <div className="Details_card_container">
            <img src={item.img}></img>
                  <h4>{item.producto}</h4>
                  <p>{item.descripción}</p>
                  <ItemCounter 
                    max={item.cantidad}    />
        </div>

    )


}