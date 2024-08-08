

import React from "react";
import "./itemDetail.css"
import ItemCount from "../../../ItemCount/ItemCount";

const ItemDetail = ({producto}) =>{


    const {id,image,title,description,category,tating,price} = producto

    return(

        <div className="detalleContainer">
            <div className="detalleContainer-first">

                <div>
                    <div className="conteiner-img">
                        <img src={image} alt={`foto del producto ${title}`} className="prod-img"/>
                    </div>
                </div>
                <div>
                    <p>{description}</p>
                </div>
            </div>

            <div>
                <h2 className="prod-title">{title}</h2>
                <h6>{category}</h6>
                <p>{price}</p>
                <ItemCount></ItemCount>
            </div>
        </div>

    )

}


export default ItemDetail