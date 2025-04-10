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
                    <p className='animate__animated animate__flash justify-text'>
                        Soy <span>Ronaldo Smit Durand Luna</span>, un <strong>desarrollador Full Stack</strong> con Bachiller en <strong>Ingeniería Informática</strong> y una sólida trayectoria en la creación, optimización y mantenimiento de sistemas web. Mi enfoque se centra en  <strong>resolver problemas complejos, mejorar el rendimiento y garantizar la escalabilidad</strong> de las aplicaciones que desarrollo, siempre con un compromiso hacia la mejora continua y la entrega de soluciones de calidad.
                        En el <strong>Backend</strong>, tengo experiencia trabajando con <strong>Php y Java</strong>, aprovechando los potentes frameworks <strong>Laravel y Spring Boot</strong> para construir sistemas web con APIs robustas y de alto rendimiento. En el <strong>Frontend</strong>, manejo tecnologías como <strong> Angular, React y Vue CLI</strong>, complementadas con <strong>JavaScript, jQuery, CSS y SCSS,</strong> aplicando principios de diseño responsive y optimización para asegurar una experiencia de usuario fluida y atractiva.
                        Además, tengo experiencia con <strong>Bootstrap y Tailwind CSS</strong>, que me han permitido crear interfaces modernas y eficientes con un enfoque visual intuitivo.
                        En cuanto a bases de datos, tengo un sólido conocimiento en <strong>MySQL, PostgreSQL y SQL Server</strong>, diseñando esquemas eficientes y realizando consultas complejas, así como optimización y migración de datos para garantizar la escalabilidad y el buen rendimiento del sistema.
                        Mi experiencia también incluye la gestión de proyectos y control de versiones, utilizando herramientas como <strong>Git, GitLab, Bitbucket y Jira</strong>, lo que me permite colaborar eficazmente en equipos multidisciplinarios y ágiles.
                        Me considero una persona <strong>proactiva</strong>, con habilidades sólidas para la <strong>resolución de problemas</strong> y una mentalidad orientada a la <strong>mejora constante</strong>.
                        Mi objetivo siempre es aportar valor tangible en cada proyecto, y mi enfoque centrado en el cliente me ha permitido desarrollar soluciones que resuelven necesidades reales y generan un impacto positivo.
                        Un ejemplo destacado de mi trabajo fue el desarrollo de un <strong>CRM para una empresa veterinaria en Chile</strong>, que <strong>incrementó la eficiencia operativa en un 80%</strong>, optimizando procesos internos y mejorando significativamente la atención al cliente.
                        Además, tengo experiencia en la implementación de sistemas de facturación electrónica para <strong>Chile y Perú</strong>, con la integración de un sistema de <strong>Órdenes de Servicio Electrónicas (OSE)</strong> que facilita la emisión de facturas en ambos países, cumpliendo con todos los requisitos legales y técnicos.
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
