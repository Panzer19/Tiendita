import react, { useEffect, useState } from 'react'
import './navbar.css'
import '../Boton.jsx'
import Alert from './Alert/Alert.jsx'
import CartWidget from './CartWidget/CartWidget.jsx'
import { Link, useParams } from "react-router-dom"
import {getDocs, doc, query, where, collection} from 'firebase/firestore';
import {db} from '../../services/firebaseConfig';


const Navbar = () => {


    const [categorias, setCategorias] = useState([])
    const [cargando , setCargando] = useState(true)

    const {category} = useParams()

    useEffect(() => {



        const categoryRef = collection(db , "productos")



        const fetchCategory = async () => {
            try{


                const res = await getDocs(categoryRef)
                const categoriesSet = new Set()

                res.forEach(doc => {
                    const data = doc.data()
                    if (data.category) {
                        categoriesSet.add(data.category)
                    }
                })


                console.log(categoriesSet);

                const categoryArray = Array.from(categoriesSet);

                setCategorias(categoryArray)

                // const res = await getDocs(categoryRef)
                // const data = res.data()
                // const categoryForm = {id :res.id , ...data}

            }catch (error){

                setError(error)

            }finally{
                setCargando(false)
            }
        }

        fetchCategory()

    }, [])




    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">

                <Alert />


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                        <Link key="home" to={`/`} className="nav-link" aria-current="page">Home</Link>

                        {
                            categorias.length > 0 && categorias.map(e => <Link key={e} to={`/categoria/${e}`} className="nav-link" aria-current="page">{e}</Link>)
                        }

                        <Link rel="stylesheet" className="nav-link" to={`/cart`} key="carrito"><CartWidget></CartWidget></Link>


                    </div>
                </div>
            </div>

        </nav>
    )

}


export default Navbar