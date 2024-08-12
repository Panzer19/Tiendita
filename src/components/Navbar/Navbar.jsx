import react, { useEffect, useState } from 'react'
import './navbar.css'
import '../Boton.jsx'
import Alert from './Alert/Alert.jsx'
import CartWidget from './CartWidget/CartWidget.jsx'
import {Link} from "react-router-dom"


const Navbar = () => {


    const [categorias , setCategorias] = useState([])


    useEffect(() => {

        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategorias(json))


    },[])




    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">

                <Alert/>


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                        <Link key="home" to={`/`} className="nav-link" aria-current="page">Home</Link>

                        {
                            categorias.length > 0 && categorias.map(e=> <Link key={e} to={`/categoria/${e}`} className="nav-link" aria-current="page">{e}</Link>)
                        }

                        {/* <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">Tienda</a>
                        <a className="nav-link" href="#">Contactos</a>
                        <a className="nav-link" href="#"><CartWidget/></a> */}
                    </div>
                </div>
            </div>

        </nav>
    )

}


export default Navbar