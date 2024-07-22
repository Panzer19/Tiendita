
import './boton.css'
import Logo from '../assets/img/Logos/logo.png'
const Boton = ({texto , fn}) => {

    return (
        <>
        
        <button  className="btn" onClick={() => fn()} > <img src={Logo} alt="logo" className='logo'/> {texto} </button>
        </>
    )

}

export default Boton