
import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {


    const [cart, setCart] = useState([])

    const contexto = "Hola contexto"

    const mostrarCantidad = () => {
        return cart.reduce((acc,curr) => acc + curr.cantidad,0)
    }

    const agregarAlCarrito = (producto) => {
        setCart([...cart, producto])
    }

    const restarProducto = (producto,id) => {


    }

    const agregarProducto = (producto , id) => {



    }

    const borrarDelCarrito = (id) => {
        const newCart = cart.filter(e=>e.id !== id)
        setCart(newCart)
    }

    const vaciarCarrito = () => {
        setCart([])
    }



    console.log("carrito", cart);

    return (

        <CartContext.Provider value={{ contexto,cart, setCart, agregarAlCarrito,vaciarCarrito,borrarDelCarrito, mostrarCantidad,agregarProducto,restarProducto }}>

            {children}

        </CartContext.Provider>

    )

}