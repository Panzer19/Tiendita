import { useContext, useEffect, useState } from 'react';
import "./itemListContainer.css"

import {db} from "../../services/firebaseConfig";
import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import Item from './Item/Item';


import { useParams } from "react-router-dom"

import Swal from 'sweetalert2'
import { CartContext } from '../context/CartContext';
import { productosasync } from '../../asyncMock';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    const { contexto } = useContext(CartContext)

    const { categoryName } = useParams()




    async function cargarProductos(productos) {
        try {
          const productosCollection = collection(db, 'productos'); // Cambia 'productos' si tu colección tiene otro nombre

          for (const [index, producto] of productos.entries()) {
            console.log(`Procesando producto ${index + 1} de ${productos.length}...`);

            // Verificar si el producto ya existe en la colección
            const q = query(productosCollection, where("title", "==", producto.title));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
              // Cambiar las propiedades según el formato que has especificado
              const productoData = {
                title: producto.title,
                description: producto.description,
                price: producto.price,
                image: producto.image,
                category: producto.category,
                sexo: producto.sexo,
                stock: producto.stock,
              };

              // Añadir el producto a Firestore
              await addDoc(productosCollection, productoData);
              console.log(`Producto ${index + 1} cargado con éxito.`);
            } else {
              console.log(`Producto "${producto.title}" ya existe. Saltando...`);
            }
          }

          console.log('Todos los productos han sido procesados.');
        } catch (error) {
          console.error('Error al cargar productos:', error);
        }
      }
      // Llamar a la función en useEffect
      useEffect(() => {
        cargarProductos(productosasync);
      }, []);







    useEffect(() => {

        const productosRef = collection(db , "productos")

        if(categoryName){

            const prodsPorCat = query(productosRef, where("category", "==",categoryName))
            getDocs(prodsPorCat).then(snapshot => {

                const prods = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return {id : doc.id , ...data}
                })
                setProductos(prods);
            }).finally(setCargando(false))

        }else{

            getDocs(productosRef).then(snapshot =>{

                const prods = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return {id : doc.id , ...data}
                })
                setProductos(prods);

            }).finally(setCargando(false))

        }

    }, [categoryName])

    if (cargando) {

        return (<h2>Cargando.......</h2>)

    }

    return (

        <div className='itemContainer'>

            {productos.map((el) => {

                return (

                    <Item key={el.id} producto={el} />

                )

            })}



        </div>
    )


}

export default ItemListContainer