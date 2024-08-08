import react , { useEffect, useState } from 'react';
import "./itemListContainer.css"

import Item from './Item/Item';

import {useParams} from "react-router-dom"


const ItemListContainer = () => {

    const [ productos , setProductos] = useState ([])
    const [ cargando , setCargando] = useState(true)

    const {categoryName} = useParams()

    useEffect( () => {


        if (categoryName) {

            fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
            .then(res=>res.json())
            .then(res =>setProductos(res))
            .finally(() => setCargando(false))

        }else{

            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(res =>setProductos(res))
            .finally(() => setCargando(false))

        }


            // getProductos()
            // .then( (res) => setProductos(res))
            // .catch()
            // .finally(() => setCargando(false))



    },[categoryName])

    if(cargando){

        return(<h2>Cargando.......</h2>)

    }

    return(
        <div className='itemContainer'>
            {productos.map((el) => {

                return(

                    <Item key={el.id} producto={el}/>

                )



            })}
        </div>
    )


}

export default ItemListContainer