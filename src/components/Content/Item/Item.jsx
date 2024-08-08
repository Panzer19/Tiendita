
import react from "react";
import './item.css'
import { Link } from "react-router-dom";


const Item = ({producto}) => {

    const {id,image,title,description,category,tating,price} = producto

    return(


            <Link to={`/detalle/${id}`} className="prod-card-container">
                <div className="prod-card">

                    <img src={image} alt={`foto del producto ${title}`} className="foto-del-producto"/>
                    <p>{price}</p>
                    <h2 className="nombre-de-producto">{title}</h2>
                    <h6>{category}</h6>

                </div>
            </Link>





    )

}

export default Item