

import React, { useContext } from "react";
import "./itemDetail.css";
import ItemCount from "../../ItemCount/ItemCount";
import { CartContext } from "../../../context/CartContext";
import Swal from 'sweetalert2';

const ItemDetail = ({ producto }) => {
    const { agregarAlCarrito } = useContext(CartContext);


    const handleComprar = (count) => {

        agregarAlCarrito({ ...producto, cantidad: count });

        const Toast = Swal.mixin({
            toast: true,
            color : "#000000",
            position: "top-end",
            showConfirmButton: false,
            background : '#ffafcc',

            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {

              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            iconColor : "#e0efda",
            title: "Añadido",
            width: "15em",


          });

    };
    const { id, image, title, description, category, price } = producto;

    return (
        <div className="detalleContainer">
            <div className="detalleContainer-first">
                <div>
                    <div className="conteiner-img">
                        <img
                            src={image}
                            alt={`foto del producto ${title}`}
                            className="prod-img"
                        />
                    </div>
                </div>
                <div className="divCointainerDescription">
                    <div>
                        <h2 className="prod-title">{title}</h2>
                        <h6>{category}</h6>
                        <p>Precio: ${price}</p>
                    </div>
                    <div className="divCointainerDescription_detail">
                        <h2>Color:</h2>
                        <ul>
                            {description.color.map((el, index) => (
                                <li key={index}>{el}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="divCointainerDescription_detail">
                        <h2>Talles:</h2>
                        <ul>
                            {description.waist.map((el, index) => (
                                <p key={index}>{el}</p>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <ItemCount fn={handleComprar} />
            </div>
        </div>
    );
};

export default ItemDetail;
