

import React, { useContext } from "react";
import "./itemDetail.css"
import ItemCount from "../../ItemCount/ItemCount";
import { CartContext } from "../../../context/CartContext";



const ItemDetail = ({ producto }) => {


    const { contexto, mostrarMensaje, agregarAlCarrito } = useContext(CartContext)

    const handleComprar = (count) => {
        agregarAlCarrito({ ...producto, cantidad: count })
    }

    const { id, image, title, description, category, tating, price } = producto

    return (

        <div className="detalleContainer">
            <div className="detalleContainer-first">

                <div>
                    <div className="conteiner-img">
                        <img src={image} alt={`foto del producto ${title}`} className="prod-img" />
                    </div>
                </div>
                <div>

                    <p>Color:</p> {description.color.map((el)=>{return(<p>{el}</p>)})}

                    <p>Talles:</p> {description.waist.map((el) =>{return(<p>{el}</p>)})}

                </div>

            </div>

            <div>
                <h2 className="prod-title">{title}</h2>
                <h6>{category}</h6>
                <p>{price}</p>
                <ItemCount fn={handleComprar} />

            </div>
        </div>

    )

}


export default ItemDetail