import "./Banner-hero.css" 
import Button from 'react-bootstrap/Button'

export const Banner = () => {


        return (
            <div className="div_hero">
            <img className= "main_banner" src={require("./bannerfix.png")} alt="banner_hero"></img>
            <br></br>
            <a href="#productos_container"> <Button variant="primary" className= "button">Ver todos los productos</Button></a>
            
            </div>
        )
}