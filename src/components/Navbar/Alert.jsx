import react from "react"
import Boton from "../Boton"
import Swal from 'sweetalert2'


    const Alert = () => {

        const saludo = () => {

            Swal.fire("Hola Bienvenido a nuestra Tienda Online");

        }

        return(
            <>
                <Boton fn={saludo} texto="La Tiendita"/>
                
            </>
        )

    }


export default Alert