import { useEffect } from "react";
import './Home.css';
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
export default function Home() {
    useEffect(() => {
        window.addEventListener('scroll', handleScrool);
        return () => {
            window.removeEventListener('scroll', handleScrool);
        }
    }, [])

    const handleScrool = () => {
        const skills = document.getElementById("skills");
        if (skills) {
            const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
            if (distancia_skills >= 300) {
                const habilidades = document.getElementsByClassName("progreso");
                if (habilidades.length > 0) {
                    habilidades[0].classList.add("javascript");
                    habilidades[1].classList.add("phplaravel");
                    habilidades[2].classList.add("angularcli");
                    habilidades[3].classList.add("python");
                    habilidades[4].classList.add("htmlcss");
                    habilidades[5].classList.add("bitbucket");
                    habilidades[6].classList.add("mysql");
                    habilidades[7].classList.add("jiras");
                    habilidades[8].classList.add("offices");
                    habilidades[9].classList.add("photoshop");
                    habilidades[10].classList.add("comunicacion");
                    habilidades[11].classList.add("team");
                    habilidades[12].classList.add("creatividad");
                    habilidades[13].classList.add("dedicacion");
                    habilidades[14].classList.add("proyect");
                }
            }
        }
    }
    // DATOS DEL PORTAFOLIO----------------
    const portafolioWeb = [
        {
            img: "img/sistemaBoticaRosa.png",
            url: "https://sistemaboticarosa.com",
            titulo: "PUNTO VENTA CON FACTURACION ELECTRONICO",
            subtitulo: "SISTEMA WEB"
        },
        {
            img: "img/carritocompras.png",
            url: "https://boticarosa.com",
            titulo: "CARRITO COMPRAS BOTICA",
            subtitulo: "ECOMMERCE"
        },
        {
            img: "img/okarepuesto.png",
            url: "https://www.okarepuestos.cl",
            titulo: "CARRITO COMPRAS REPUESTOS",
            subtitulo: "ECOMMERCE"
        },
        {
            img: "img/msvstore.png",
            url: "https://www.msvstore.cl",
            titulo: "CARRITO COMPRAS ROPA",
            subtitulo: "ECOMMERCE"
        },

        {
            img: "img/escalafon.png",
            titulo: "GESTIÓN REGISTRO ACADEMICOS",
            url: "https://escalafon.sistemaboticarosa.com/login",
            subtitulo: "SISTEMA WEB"
        },
        {
            img: "img/desarrolloimg.png",
            titulo: "CRM VETERINARIO",
            url: "https://desarrollo.enlacevet.com",
            subtitulo: "SISTEMA WEB"
        },
        {
            img: "img/reserva_online.png",
            url: "https://vetlaspircas.crmveterinario.com/reserva_online",
            titulo: "RESERVAS DE HORAS",
            subtitulo: "SISTEMA WEB"
        },
        {
            img: "img/livet_center.png",
            titulo: "CENTRO MEDICO LIVET",
            url: "https://livetpetcenter.cl",
            subtitulo: "PAGINA WEB"
        },
        {
            img: "img/cardioImagen.png",
            titulo: "CENTRO MEDICO CARDIO IMAGEN",
            url: "https://cardioimagen.cl",
            subtitulo: "PAGINA WEB"
        },
        {
            img: "img/sanmartin.png",
            titulo: "VET SAN MARTIN",
            url: "https://vetsanmartin.cl",
            subtitulo: "PAGINA WEB"
        },
        {
            img: "img/pequenios_animales.png",
            titulo: "PEQUEÑOS ANIMALES",
            url: "https://pequenosanimales.cl",
            subtitulo: "PAGINA WEB"
        },
        {
            img: "img/hvo.png",
            titulo: "HOSPITAL VETERINARIA ORIENTE",
            url: "https://www.hospitalveterinariooriente.cl",
            subtitulo: "PAGINA WEB"
        },
        {
            img: "img/csf.png",
            titulo: "ESPECIALIDADES VETERINARIA",
            url: "https://www.csfespecialidadesvet.cl",
            subtitulo: "PAGINA WEB"
        },
        {
            img: "img/crmveterinario.png",
            titulo: "SISTEMA CRM VETERINARIO",
            url: "https://crmveterinario.com",
            subtitulo: "PAGINA WEB"
        },
        {
            img: "img/carritoreactcompras.png",
            titulo: "ACCESORIO DE PRODUCTOS",
            url: "https://carritoaccesorio.com.sistemaboticarosa.com",
            subtitulo: "PAGINA WEB"
        }
    ]
    //-------------------------------------

    //HABILIDADES TECNICAS-----------------
    const habilidades = {
        tecnicas: [
            {
                nombre: 'Javascript / Jquery',
                porcentaje: "84%"
            },
            {
                nombre: 'Php / Laravel',
                porcentaje: "85%"
            },
            {
                nombre: 'Angular Cli (Typescript) / React (js)',
                porcentaje: "78%"
            },
            {
                nombre: 'Python',
                porcentaje: "65%"
            },
            {
                nombre: 'HTML / CSS / Boostrap',
                porcentaje: "89%"
            },
            {
                nombre: 'GitHub / BitBucket',
                porcentaje: "91%"
            },
            {
                nombre: 'Mysql / Sql',
                porcentaje: "90%"
            },
            {
                nombre: 'Jiras / Postman',
                porcentaje: "85%"
            },
            {
                nombre: 'Offices',
                porcentaje: "87%"
            },
            {
                nombre: 'Photoshop',
                porcentaje: "81%"
            }
        ],
        profesionales: [
            {
                nombre: 'Comunicación',
                porcentaje: "80%"
            },
            {
                nombre: 'Trabajo en Equipo',
                porcentaje: "85%"
            },
            {
                nombre: 'Creatividad',
                porcentaje: "90%"
            },
            {
                nombre: 'Dedicación',
                porcentaje: "99%"
            },
            {
                nombre: 'Gestión De Proyectos',
                porcentaje: "84%"
            }
        ]
    }
    //-------------------------------------

    //HOJA DE VIDA--------------------------
    const hojaVida = {
        educaion: [
            {
                titulo: 'Ingles Basico I',
                instituto: 'Instituto De Idiomas',
                fecha: '09/2022 - 09/2023',
                descripcion: `Durante este curso, adquirí las habilidades básicas del idioma inglés. Aprendí las primeras oraciones formadas con el verbo "to be" y los pronombres personales. 
                          También aprendí a formar oraciones afirmativas, interrogativas y negativas correctamente. Además, estudiamos la pronunciación de algunas palabras, 
                          lo que me permite entender y comunicarme de manera más efectiva en inglés.`
            },
            {
                titulo: 'Facturación Electrónica con PHP',
                instituto: 'Ceti Chiclayo',
                fecha: '07/2023 - 09/2023',
                descripcion: `Durante este curso, adquirí habilidades para desarrollar un sistema OSE (Operador de Servicios Electrónicos) utilizando PHP, 
                          que permite la emisión automática de comprobantes electrónicos a la SUNAT. Aprendí a manejar la estructura XML de los documentos electrónicos 
                          y a registrar certificados digitales necesarios para la firma electrónica, optimizando así el proceso de facturación y reduciendo la necesidad 
                          de registro manual de cada comprobante.`
            },
            {
                titulo: 'Ingeniero Informatico',
                instituto: 'Universidad Nacional José Faustino Sánchez Carrión',
                fecha: '08/2014 - 08/2019',
                descripcion: `Durante mi formación universitaria, adquirí conocimientos tanto teóricos como prácticos en diversas áreas de la informática. 
                          Descubrí mi pasión por el desarrollo de sistemas web y profundicé en bases de datos, aplicaciones móviles, aplicaciones de escritorio 
                          y arquitectura de software. Estas experiencias fortalecieron mis habilidades y me integraron más en el mundo de la programación, 
                          permitiéndome desarrollar soluciones innovadoras y eficientes.`
            },
            {
                titulo: 'Algoritmos y Fundamentos de Programación',
                instituto: 'DevMaster',
                fecha: '01/2019 - 02/2019',
                descripcion: `En este curso, adquirí una comprensión sólida de los principios básicos de la programación y los algoritmos. 
                          Aprendí a mejorar mi lógica de programación y a aplicar conceptos teóricos fundamentales, lo que ha fortalecido 
                          significativamente mis habilidades como programador.`
            },
            {
                titulo: 'Especialista en Microsoft Office Excel 2016',
                instituto: 'ENVI COMPANY S.R.L',
                fecha: '08/2018 - 11/2019',
                descripcion: `Durante este curso, aprendí los fundamentos teóricos y prácticos del uso de Excel y sus herramientas avanzadas. 
                              Desarrollé un alto nivel de competencia en la utilización de macros y en la codificación con Visual Basic para Aplicaciones (VBA), 
                              lo que me permitió automatizar procesos y mejorar significativamente la eficiencia del manejo de datos en Excel.`
            }
        ],
        experiencia: [
            {
                titulo: 'Full Stack Developer',
                instituto: 'Wilsoft Asesorías y Sistemas',
                fecha: '05/2019 - Actualmente',
                descripcion: `En esta empresa, he adquirido experiencia en programación, encriptación de información, y optimización de código. 
                          He trabajado con bases de datos MySQL, optimizando consultas y mejorando procesos para asegurar que el servidor funcione sin problemas durante la compilación. 
                          Desarrollé un sistema CRM multifuncional para diversas empresas veterinarias en Chile, así como una plataforma de comercio electrónico utilizando WooCommerce para la venta en línea de productos. 
                          Implementé tecnologías web como HTML, CSS, JavaScript, jQuery, y consumí APIs REST en el sistema CRM desarrollado con Laravel/PHP.
                          También desarrollé páginas en PHP para clientes, utilizando Bitbucket para la gestión de repositorios y Jira para el manejo de incidencias y soporte diario del sistema.
                          Documentamos exhaustivamente el código del sistema y realizamos pruebas unitarias. 
                          Además, he utilizado encriptación con Python para el manejo de reportes de grandes volúmenes de datos y la optimización del proceso, asegurando la seguridad y eficiencia en el manejo de la información.
                          Brindo soporte remoto a los clientes para mejorar sus módulos según sus requerimientos, asegurando su satisfacción con el mantenimiento continuo del sistema. 
                          Mi enfoque en la optimización del código y la eficiencia del servidor garantiza una visualización y rendimiento óptimos de los sistemas implementados.`
            },
            {
                titulo: 'Programador BackEnd',
                instituto: 'Oficina de la Unidad Funcional de Desarrollo Tecnológico (DIRESA LIMA)',
                fecha: '09/2019 - 01/2020',
                descripcion: `Durante mi pasantía en esta empresa, adquirí experiencia como programador backend. 
                              Trabajé con la tecnología Laravel junto con el framework Angular para desarrollar un sistema de gestión de inventario de documentos. 
                              Durante este tiempo, obtuve un entendimiento profundo de estas tecnologías, incluyendo el manejo de bases de datos MySQL, 
                              el uso de Eloquent en Laravel y la gestión de sesiones con Angular CLI utilizando JWT de Laravel.`
            },
            {
                titulo: 'Soporte y Desarrollo de Software',
                instituto: 'Oficina de Servicios Informáticos de la Universidad Nacional José Faustino',
                fecha: '02/2019 - 05/2020',
                descripcion: `Durante mi pasantía en esta institución, adquirí conocimientos en el flujo del sistema, lo que me permitió trabajar en la asistencia del personal y manejar incidencias del software. 
                              Desarrollé habilidades para identificar y resolver conflictos relacionados con el sistema, así como para brindar apoyo a los diferentes institutos con problemas del sistema.
                              Además, aprendí a proporcionar soporte técnico a las PC, lo que amplió mis habilidades en el área de tecnología informática.`
            }
        ]
    }
    //--------------------------------------
    return (
        <>
            <Header />
            <section id="inicio" className="inicio">
                <div className="contenido-banner">
                    <div className="contenedor-img">
                        <img src="/img/hero.png" alt="" />
                    </div>
                    <h1>RONALDO SMIT</h1>
                    <h2>Ingeniero de Informatico - Desarrollador Web</h2>
                    <div className="redes">
                        <Link to={'https://www.facebook.com/smith.durandluna/'} target="_blank"><i className="fa-brands fa-facebook-f"></i></Link>
                        <Link to={'https://www.linkedin.com/in/ronaldo-smit-durand-luna-1b0753172/'} target="_blank"><i className="fa-brands fa-linkedin-in"></i></Link>
                        <Link to={'https://github.com/XdRonaldoxD'} target="_blank"><i className="fa-brands fa-git"></i></Link>
                        <Link to={'/'}><i className="fa-brands fa-twitter"></i></Link>
                        <Link to={'/'}><i className="fa-brands fa-skype"></i></Link>
                    </div>
                </div>
            </section>

            <section id="sobremi" className="sobremi">
                <div className="contenido-seccion">
                    <h2>Sobre Mí</h2>
                    <p><span>Hola, soy Ronaldo Smit Durand Luna</span> un desarrollador Full Stack, con Bachiller en Ingeniería Informática. He demostrado mi capacidad
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
                        <div className="col">
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

                        <div className="col">
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
                                    <i className="fa-solid fa-camera"></i>
                                    <span>FOTOS</span>
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

            <section className="skills" id="skills">
                <div className="contenido-seccion">
                    <h2>Habilidades</h2>
                    <div className="fila">
                        <div className="col">
                            <h3>Habilidades Tecnicas</h3>
                            {
                                habilidades.tecnicas.map((item, i) =>
                                    <div key={i} className="skill">
                                        <span>{item.nombre}</span>
                                        <div className="barra-skill">
                                            <div className="progreso">
                                                <span>{item.porcentaje}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                        <div className="col">
                            <h3>Habilidades Profesionales</h3>
                            {
                                habilidades.profesionales.map((item, i) =>
                                    <div key={i} className="skill">
                                        <span>{item.nombre}</span>
                                        <div className="barra-skill">
                                            <div className="progreso">
                                                <span>{item.porcentaje}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                </div>
            </section>

            <section id="curriculum" className="curriculum">
                <div className="contenido-seccion">
                    <h2>Hoja De Vida</h2>
                    <div className="fila">
                        <div className="col izquierda">
                            <h3>Educación</h3>
                            {
                                hojaVida.educaion.map((item, i) =>
                                    <div key={i} className="item izq">
                                        <h4>{item.titulo}</h4>
                                        <span className="casa">{item.instituto}</span>
                                        <span className="fecha">{item.fecha}</span>
                                        <p>{item.descripcion}</p>
                                        <div className="conectori">
                                            <div className="circuloi"></div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className="col derecha">
                            <h3>Experiencia de trabajo</h3>
                            {
                                hojaVida.experiencia.map((item, i) =>
                                    <div key={i} className="item der">
                                        <h4>{item.titulo}</h4>
                                        <span className="casa">{item.instituto}</span>
                                        <span className="fecha">{item.fecha}</span>
                                        <p>{item.descripcion}</p>
                                        <div className="conectord">
                                            <div className="circulod"></div>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                </div>
            </section>


            <section id="portfolio" className="portfolio">
                <div className="contenido-seccion">
                    <h2>PORTAFOLIO</h2>
                    <div className="galeria">
                        {portafolioWeb.map((item, i) =>
                            <Link key={i} to={item.url} target="_blank">
                                <div className="proyecto">
                                    <img src={item.img} alt={item.titulo} />
                                    <div className="overlay">
                                        <h3>{item.titulo}</h3>
                                        <p>{item.subtitulo}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}