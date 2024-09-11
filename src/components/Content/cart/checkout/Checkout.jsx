
import React, { useContext, useState } from "react";
import "./checkout.css"
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../services/firebaseConfig";
import Swal from "sweetalert2";

const Checkout = () => {


    const [nombre,setNombre] = useState("")
    const [ mail , setMail] = useState("")
    const [direccion , setDireccion] = useState("")
    const [ order , setOrder] = useState("")
    const [orderSuccess, setOrderSuccess] = useState(false);

    const {cart,setCart} = useContext(CartContext)



    const mostrarAlerta = (title, text, icon) => {


        Swal.fire({
            icon,
            title,
            text,
            customClass: {
                popup: 'custom-popup'
            }
          });

    };

    const handleSubmit = async(e) => {

        e.preventDefault();


        if (cart.length === 0) {
            mostrarAlerta("Ouch Problem!", "El carrito no puede estar vacío", "error");
            return
        }


        const usuario = {nombre,mail,direccion}

        const orden = { cart , usuario }

        try {

                const ordenRef = collection(db, "ordenes");
                const orderDoc = await addDoc(ordenRef, orden);
                const orderId = orderDoc.id;

                setOrder(orderId);
                setDireccion("");
                setMail("");
                setNombre("");
                setCart([]);


                Swal.fire({
                    title: "Cargando Compra",
                    html: "Espere un momento",
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                    },
                    customClass: {
                        popup: 'my-popup-class'
                    }
                }).then(() => {
                    // Mostrar el mensaje de éxito
                    return Swal.fire({
                        title: "Good job!",
                        text: "Ya realizaste tu pedido",
                        icon: "success",
                        confirmButtonText: "Ok"
                    });
                }).then((result) => {
                    if (result.isConfirmed) {
                        setOrderSuccess(true); // Actualizar el estado para mostrar el mensaje de agradecimiento
                    }
                });



        } catch (error) {
            console.error("Error al realizar el pedido: ", error);
            mostrarAlerta("Ouch Problem!", "Hubo un problema. Vuelve a intentarlo", "error");
        }


    };

    return(

        <>
                {!orderSuccess ? (
                    <div>
                        <h3>Ingresa los datos para terminar tu Compra</h3>
                        <form className="checkout-form" onSubmit={handleSubmit}>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" name="nombre" required onChange={(e) => setNombre(e.target.value)} />
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" required onChange={(e) => setMail(e.target.value)} />
                            <label htmlFor="direccion">Direccion</label>
                            <input type="text" name="direccion" required onChange={(e) => setDireccion(e.target.value)} />
                            <button type="submit">Enviar</button>
                        </form>
                    </div>

                ) : (

                    <h3>Gracias por su compra</h3>

                )}

        </>

    )

}


export default Checkout