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
                    <p className='animate__animated animate__flash justify-text' style={{ whiteSpace: "pre-line" }}>
                        Soy <span>Ronaldo Smit Durand Luna</span>, <strong>Desarrollador Full Stack</strong> y Bachiller en <strong>Ingeniería Informática</strong>, con experiencia en el mantenimiento, desarrollo y optimización de sistemas web empresariales, enfocado en garantizar su rendimiento, escalabilidad y correcto funcionamiento.

                        Actualmente participo en la implementación de nuevas funcionalidades, corrección de incidencias y mejora continua de aplicaciones web, trabajando en el desarrollo backend utilizando <strong>PHP (Laravel y PHP nativo)</strong> y en el frontend con <strong>Vue.js</strong>, así como en la creación e integración de <strong>APIs RESTful</strong> para la comunicación entre servicios.

                        Además, cuento con experiencia en la gestión y optimización de bases de datos como <strong>SQL Server y MySQL</strong>, migración de datos, generación de reportes dinámicos en PDF y Excel, y control de versiones mediante <strong>Git y GitLab</strong>. Me desenvuelvo en entornos de trabajo ágiles bajo metodología <strong>Scrum</strong>, utilizando herramientas como <strong>Jira y Azure DevOps</strong> para la gestión de tareas y seguimiento de proyectos.

                        Me caracterizo por ser una persona proactiva, orientada a la resolución de problemas y a la mejora continua, comprometido con el desarrollo de soluciones eficientes que aporten valor real a cada proyecto.
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
                                    <a href='https://rdurandlunadev.online/' target='_blank'>rdurandlunadev.online</a>
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
