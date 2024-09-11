
import React, { useState } from "react";
import './itemCount.css';
import Boton from "../../Boton";

const ItemCount = ({ fn }) => {
    const [count, setCount] = useState(1);

    const sumar = () => {
        if (count < 10) {
            setCount(count + 1);
        } else {
            alert("Excedió el límite de compra");
        }
    };

    const restar = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <>
            <div className='container-itemCount'>
                <Boton texto="-" fn={restar} />
                <span className="span">{count}</span>
                <Boton texto="+" fn={sumar} />
            </div>
            <button onClick={() => fn(count)}>Añadir al Carrito</button>
        </>
    );
};

export default ItemCount;
