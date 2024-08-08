
import './carrusel.css'
import  Perchero from '../../assets/img/Perchero.jpg'
import  Lentes from '../../assets/img/Lentes.jpg'
import  ChicaPerchas from '../../assets/img/ChicaPerchas.jpg'

    const Carrusel = () => {

        return(

            <div className='carrusel'>

                    <div id="carouselExampleDark" className="carousel carousel-dark slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                            <img src={Perchero} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>En la Tiendita</h5>
                                <p>Encontra Ropa de la mejor Calidad</p>
                            </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                            <img src={Lentes} className=" w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>En la Tiendita</h5>
                                <p>Ponete a la moda con nuestras Prendas</p>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src={ChicaPerchas} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>En la Tiendita</h5>
                                <p>Recibi el mejor producto al mejor precio</p>
                            </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>


            </div>
        )

    }

export default Carrusel
