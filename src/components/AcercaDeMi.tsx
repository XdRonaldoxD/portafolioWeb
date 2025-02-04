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
                    <p className='animate__animated animate__flash'>
                        <span>Hola, soy Ronaldo Smit Durand Luna</span>, un desarrollador Full Stack con Bachiller en Ingeniería Informática. Cuento con una sólida experiencia en la creación de soluciones tecnológicas que generan un impacto positivo en los negocios. Un ejemplo destacado es el desarrollo de un CRM para una empresa veterinaria en Chile, el cual incrementó su eficiencia operativa en un 80%. Mi enfoque se basa en comprender a fondo los requisitos comerciales y las necesidades de los usuarios para diseñar herramientas que satisfagan sus demandas de manera efectiva.
                        Me apasiona el aprendizaje continuo y me mantengo actualizado con las últimas tendencias tecnológicas. En el ámbito del desarrollo Backend, tengo experiencia en el uso de <strong>Laravel, PHP y Java</strong>, mientras que en el Frontend he trabajado con frameworks como <strong>Angular, React y Vue CLI</strong>, además de tecnologías como <strong>JavaScript y jQuery</strong>. También he implementado sistemas de facturación electrónica para Chile y Perú, incluyendo la integración de un sistema de Órdenes de Servicio Electrónicas (OSE) que facilita la emisión de facturas en ambos países.
                        En cuanto a bases de datos, tengo experiencia en el diseño, implementación y optimización de bases de datos relacionales utilizando <strong>MySQL, PostgreSQL y SQL Server</strong>. He trabajado en la creación de esquemas eficientes, consultas complejas, optimización de rendimiento y migración de datos, asegurando la integridad y escalabilidad de los sistemas.
                        Además, he participado en la corrección y mejora de proyectos existentes, brindando soporte técnico y realizando mantenimientos para optimizar su funcionamiento y garantizar su continuidad operativa. Mi enfoque proactivo y mi capacidad para resolver problemas me permiten enfrentar desafíos complejos con confianza y eficacia.
                        Constantemente trabajo en mejorar tanto mis habilidades técnicas como mis habilidades blandas, lo que me permite colaborar efectivamente en equipos multidisciplinarios y aportar valor en cada proyecto en el que participo.
                    </p>
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
                    <a
                        href="/archivos/CV_ronaldo.pdf"
                        className="no-underline"
                        target="_blank"
                        download
                    >
                        <button>
                            Descargar CV <i className="fa-solid fa-download"></i>
                            <span className="overlay"></span>
                        </button>
                    </a>
                </div>
            </section>
            <Footer />
        </>
    )
}
