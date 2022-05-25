import "./ItemListContainer.css"

export const Item_List = ({productos}) => {


    return(
        <div className="Item_container">
        <h1> ¡LO NUEVO! </h1>
        <p>{productos}</p>
        </div>
    )
}