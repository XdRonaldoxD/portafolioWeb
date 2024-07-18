import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import 'animate.css';
export const AcercaDeMi = () => {
    return (
        <>
        <Header />
        <section id="sobremi" className="sobremi">
            <div className="contenido-seccion">
                <h2 className='animate__animated animate__backInDown'>Sobre Mí</h2>
                <p className='animate__animated animate__flash' ><span>Hola, soy Ronaldo Smit Durand Luna</span> un desarrollador Full Stack, con Bachiller en Ingeniería Informática. He demostrado mi capacidad
                    para crear soluciones tecnológicas efectivas que generan un impacto positivo en el negocio. Desarrollé diferentes sistemas la cuales un sistema
                    de lo mas grande fue un CRM para una empresa veterinaria en Chile que aumento su eficiencia operativa en un 80%. Mi enfoque
                    se basa en comprender los requisitos comerciales y las necesidades de los usuarios para crear herramientas
                    que satisfagan estas demandas.
                    Me apasiona el aprendizaje continuo y me esfuerzo por estar al tanto de las últimas tecnologías. Mi
                    experiencia incluye el desarrollo backend con Laravel, PHP y JavaScript, así como el frontend utilizando
                    Angular CLI con TypeScript y React. Además, he incorporado sistemas de facturación electrónica para Chile y
                    Perú, incluyendo la implementación de un sistema de Órdenes de Servicio Electrónicas (OSE) para
                    facilitar la emisión de Facturas Electrónicas.
                    Constantemente estoy mejorando tanto mis habilidades técnicas como mis habilidades blandas, lo que me
                    permite enfrentar desafíos complejos con confianza y eficacia.</p>
                <div className="fila">
                    <div className="col animate__animated animate__backInDown">
                        <h3>Datos Personales</h3>
                        <ul>
                            <li>
                                <strong>Cumpleaños</strong>
                                18-02-1997
                            </li>
                            <li>
                                <strong>Celular</strong>
                                +51 931 585 523
                            </li>
                            <li>
                                <strong>Email</strong>
                                smithxd118@gmail.com
                            </li>
                            <li>
                                <strong>Website</strong>
                                www.example.com
                            </li>
                            <li>
                                <strong>Dirección</strong>
                                Pjs. Cruz de Cano 101
                            </li>
                            <li>
                                <strong>Cargo</strong>
                                <span>Full Stack</span>
                            </li>
                        </ul>
                    </div>

                    <div className="col animate__animated animate__backInDown">
                        <h3>Intereses</h3>
                        <div className="contenedor-intereses">
                            <div className="interes">
                                <i className="fa-solid fa-gamepad"></i>
                                <span>JUEGOS</span>
                            </div>
                            <div className="interes">
                                <i className="fa-solid fa-headphones"></i>
                                <span>MUSICA</span>
                            </div>
                            <div className="interes">
                                <i className="fa-solid fa-plane"></i>
                                <span>VIAJAR</span>
                            </div>
                            <div className="interes">
                                <i className="fa-brands fa-apple"></i>
                                <span>MAC OS</span>
                            </div>
                            <div className="interes">
                                <i className="fa-solid fa-person-hiking"></i>
                                <span>DEPORTE</span>
                            </div>
                            <div className="interes">
                                <i className="fa-solid fa-book"></i>
                                <span>LIBROS</span>
                            </div>
                            <div className="interes">
                                <i className="fa-solid fa-motorcycle"></i>
                                <span>MANEJAR</span>
                            </div>

                            <div className="interes">
                                <i className="fa-solid fa-laptop-code"></i>
                                <span>CODEAR</span>
                            </div>


                        </div>
                    </div>
                </div>
                <Link to={'https://api.sistemaboticarosa.com//archivo/cv/CV_ronaldo.pdf'} className="no-underline" target="_blank">
                    <button>  Descargar CV <i className="fa-solid fa-download"></i>
                        <span className="overlay"></span>
                    </button>
                </Link>
            </div>
        </section>
        <Footer />
        </>
    )
}
