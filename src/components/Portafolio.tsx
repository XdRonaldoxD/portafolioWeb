import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { IconoReact } from '../iconos/IconoReact';
import { IconoJquery } from '../iconos/IconoJquery';
import { IconoHtml5 } from '../iconos/IconoHtml5';
import { IconoJavacript } from '../iconos/IconoJavacript';
import { IconoAngular } from '../iconos/IconoAngular';
import { IconoCss } from '../iconos/IconoCss';
import { IconoBoostrap } from '../iconos/IconoBoostrap';
import { IconoAngularMaterial } from '../iconos/IconoAngularMaterial';
import { IconoTailwind } from '../iconos/IconoTailwind';
import { IconoVue } from '../iconos/IconoVue';
import { IconoScss } from '../iconos/IconoScss';
export const Portafolio = () => {
    // DATOS DEL PORTAFOLIO----------------
    const portafolioWeb = [
        {
            img: "img/cistcorfact.png",
            url: "https://demo.devcistcor.cloud",
            titulo: "SISTEMA FACTURACIÓN ELECTRONICO",
            descripcion: "Sitio web donde emita comprobantes electrónicos tanto como Boletas, Facturas y Notas de Ventas",
            subtitulo: "SISTEMA WEB",
            tecnologia: [
                { icon: <i className="fab fa-laravel p-[0.2rem] rounded  bg-orange-500 text-white"></i>, name: 'Laravel' },
                { icon: <IconoVue />, name: 'Vue' },
                { icon: <IconoCss />, name: 'Css' },
                { icon: <IconoScss />, name: 'Scss' },
                { icon: <IconoBoostrap />, name: 'Boostrap' },
                { icon: <IconoHtml5 />, name: 'Html5' }
            ]
        },
        {
            img: "img/sistemaBoticaRosa.png",
            url: "https://sistemaboticarosa.com",
            titulo: "PUNTO VENTA CON FACTURACION ELECTRONICO",
            descripcion: "Sitio web donde emita comprobantes electrónicos tanto como Boletas, Facturas y Notas de Ventas",
            subtitulo: "SISTEMA WEB",
            tecnologia: [
                { icon: <i className="fab fa-php p-[0.2rem] rounded bg-purple-500 text-white"></i>, name: 'Php' },
                { icon: <IconoAngular />, name: 'Angular' },
                { icon: <IconoCss />, name: 'Css' },
                { icon: <IconoBoostrap />, name: 'Boostrap' },
                { icon: <IconoHtml5 />, name: 'Html5' }
            ]
        },
        {
            img: "img/carritocompras.png",
            url: "https://boticarosa.com",
            titulo: "CARRITO COMPRAS BOTICA",
            descripcion: "Sitio web donde compras de forma online y realizar pedidos farmaceuticos.",
            subtitulo: "ECOMMERCE",
            tecnologia: [
                { icon: <i className="fab fa-php p-[0.2rem] rounded bg-purple-500 text-white"></i>, name: 'Php' },
                { icon: <IconoAngular />, name: 'Angular' },
                { icon: <IconoCss />, name: 'Css' },
                { icon: <IconoBoostrap />, name: 'Boostrap' },
                { icon: <IconoHtml5 />, name: 'Html5' }
            ]
        },
        {
            img: "img/okarepuesto.png",
            url: "https://www.okarepuestos.cl",
            titulo: "CARRITO COMPRAS REPUESTOS",
            descripcion: "Sitio web donde compras de forma online y realizar pedidos de repuesto automovilistico.",
            subtitulo: "ECOMMERCE",
            tecnologia: [
                { icon: <i className="fab fa-laravel p-[0.2rem] rounded  bg-orange-500 text-white"></i>, name: 'Laravel' },
                { icon: <IconoAngular />, name: 'Angular' },
                { icon: <IconoCss />, name: 'Css' },
                { icon: <IconoBoostrap />, name: 'Boostrap' },
                { icon: <IconoHtml5 />, name: 'Html5' }
            ]
        },
        {
            img: "img/msvstore.png",
            url: "https://www.msvstore.cl",
            titulo: "CARRITO COMPRAS ROPA",
            descripcion: "Sitio web donde compras de forma online y realizar pedidos de ropa.",
            subtitulo: "ECOMMERCE",
            tecnologia: [
                { icon: <i className="fab fa-laravel p-[0.2rem] rounded  bg-orange-500 text-white"></i>, name: 'Laravel' },
                { icon: <IconoAngular />, name: 'Angular' },
                { icon: <IconoCss />, name: 'Css' },
                { icon: <IconoBoostrap />, name: 'Boostrap' },
                { icon: <IconoHtml5 />, name: 'Html5' }
            ]
        },

        {
            img: "img/escalafon.png",
            titulo: "GESTIÓN REGISTRO ACADEMICOS",
            url: "https://escalafon.sistemaboticarosa.com/login",
            descripcion: "Sitio web de profesores donde registran las notas academicas de los alumnos y registro de docentes.",
            subtitulo: "SISTEMA WEB",
            tecnologia: [
                { icon: <i className="fab fa-php p-[0.2rem] rounded bg-purple-500 text-white"></i>, name: 'Php' },
                { icon: <IconoAngular />, name: 'Angular' },
                { icon: <IconoCss />, name: 'Css' },
                { icon: <IconoJavacript />, name: 'Javascript' },
                { icon: <IconoHtml5 />, name: 'Html5' },
                { icon: <IconoAngularMaterial />, name: 'Angular Material' }
            ]
        },
        {
            img: "img/desarrolloimg.png",
            titulo: "CRM VETERINARIO",
            url: "https://desarrollo.enlacevet.com",
            descripcion: "CRM multifuncional con diferente modelos de servicios como Factura Electronica,P.O.S,Telemedicina,Reserva Online,Fichas,Reporteria,Usuario,Medicos entre otros mas servicios.",
            subtitulo: "SISTEMA WEB",
            tecnologia: [
                { icon: <i className="fab fa-laravel p-[0.2rem] rounded  bg-orange-500 text-white"></i>, name: 'Laravel' },
                { icon: <IconoCss />, name: 'Css' },
                { icon: <IconoJavacript />, name: 'Javascript' },
                { icon: <IconoJquery />, name: 'Jquery' },
                { icon: <IconoBoostrap />, name: 'Boostrap' },
                { icon: <IconoHtml5 />, name: 'Html5' }
            ]
        },
        {
            img: "img/reserva_online.png",
            url: "https://vetlaspircas.crmveterinario.com/reserva_online",
            titulo: "RESERVAS DE HORAS",
            descripcion: "Sitio web donde puede realizar tus reservas en linea con el medico y la hora especifica para tu mascota.",
            subtitulo: "SISTEMA WEB",
            tecnologia: [
                { icon: <i className="fab fa-laravel p-[0.2rem] rounded  bg-orange-500 text-white"></i>, name: 'Laravel' },
                { icon: <IconoCss />, name: 'Css' },
                { icon: <IconoJavacript />, name: 'Javascript' },
                { icon: <IconoJquery />, name: 'Jquery' },
                { icon: <IconoBoostrap />, name: 'Boostrap' },
                { icon: <IconoHtml5 />, name: 'Html5' }
            ]
        },
        {
            img: "img/livet_center.png",
            titulo: "CENTRO MEDICO LIVET",
            url: "https://livetpetcenter.cl",
            descripcion: "Pagina web e Informativo del sitio CENTRO MEDICO LIVET.",
            subtitulo: "PAGINA WEB",
            tecnologia: [
                { icon: <i data-tooltip-id="Php" data-tooltip-content="PHP" className="fab fa-php p-[0.2rem] rounded bg-purple-500 text-white"></i>, name: 'Php' },
                { icon: <IconoCss />, name: 'Css' },
                { icon: <IconoJavacript />, name: 'Javascript' },
                { icon: <IconoJquery />, name: 'Jquery' },
                { icon: <IconoBoostrap />, name: 'Boostrap' },
                { icon: <IconoHtml5 />, name: 'Html5' }
            ]
        },
        {
            img: "img/cardioImagen.png",
            titulo: "CENTRO MEDICO CARDIO IMAGEN",
            descripcion: "Pagina web e Informativo del sitio CENTRO MEDICO CARDIO IMAGEN.",
            url: "https://cardioimagen.cl",
            subtitulo: "PAGINA WEB",
            tecnologia: [
                { icon: <i data-tooltip-id="Php" data-tooltip-content="PHP" className="fab fa-php p-[0.2rem] rounded bg-purple-500 text-white"></i>, name: 'Php' },
                { icon: <IconoCss />, name: 'Css' },
                { icon: <IconoJavacript />, name: 'Javascript' },
                { icon: <IconoJquery />, name: 'Jquery' },
                { icon: <IconoBoostrap />, name: 'Boostrap' },
                { icon: <IconoHtml5 />, name: 'Html5' }

            ]
        },
        {
            img: "img/sanmartin.png",
            titulo: "VET SAN MARTIN",
            url: "https://vetsanmartin.cl",
            descripcion: "Pagina web e Informativo del sitio VET SAN MARTIN.",
            subtitulo: "PAGINA WEB",
            tecnologia: [
                { icon: <i data-tooltip-id="Php" data-tooltip-content="PHP" className="fab fa-php p-[0.2rem] rounded bg-purple-500 text-white"></i>, name: 'Php' },
                { icon: <IconoCss />, name: 'Css' },
                { icon: <IconoJavacript />, name: 'Javascript' },
                { icon: <IconoJquery />, name: 'Jquery' },
                { icon: <IconoBoostrap />, name: 'Boostrap' },
                { icon: <IconoHtml5 />, name: 'Html5' }
            ]
        },
        {
            img: "img/pequenios_animales.png",
            titulo: "PEQUEÑOS ANIMALES",
            url: "https://pequenosanimales.cl",
            descripcion: "Pagina web e Informativo del sitio PEQUEÑOS ANIMALES.",
            subtitulo: "PAGINA WEB",
            tecnologia: [
                { icon: <i data-tooltip-id="Php" data-tooltip-content="PHP" className="fab fa-php p-[0.2rem] rounded bg-purple-500 text-white"></i>, name: 'Php' },
                { icon: <IconoCss />, name: 'Css' },
                { icon: <IconoJavacript />, name: 'Javascript' },
                { icon: <IconoJquery />, name: 'Jquery' },
                { icon: <IconoBoostrap />, name: 'Boostrap' },
                { icon: <IconoHtml5 />, name: 'Html5' }
            ]
        },
        {
            img: "img/hvo.png",
            titulo: "HOSPITAL VETERINARIA ORIENTE",
            url: "https://www.hospitalveterinariooriente.cl",
            descripcion: "Pagina web e Informativo del sitio HOSPITAL VETERINARIA ORIENTE.",
            subtitulo: "PAGINA WEB",
            tecnologia: [
                { icon: <i data-tooltip-id="Php" data-tooltip-content="PHP" className="fab fa-php p-[0.2rem] rounded bg-purple-500 text-white"></i>, name: 'Php' },
                { icon: <IconoCss />, name: 'Css' },
                { icon: <IconoJavacript />, name: 'Javascript' },
                { icon: <IconoJquery />, name: 'Jquery' },
                { icon: <IconoBoostrap />, name: 'Boostrap' },
                { icon: <IconoHtml5 />, name: 'Html5' }
            ]
        },
        {
            img: "img/csf.png",
            titulo: "ESPECIALIDADES VETERINARIA",
            url: "https://www.csfespecialidadesvet.cl",
            descripcion: "Pagina web e Informativo del sitio HOSPITAL ESPECIALIDADES VETERINARIA.",
            subtitulo: "PAGINA WEB",
            tecnologia: [
                { icon: <i data-tooltip-id="Php" data-tooltip-content="PHP" className="fab fa-php p-[0.2rem] rounded bg-purple-500 text-white"></i>, name: 'Php' },
                { icon: <IconoCss />, name: 'Css' },
                { icon: <IconoJavacript />, name: 'Javascript' },
                { icon: <IconoJquery />, name: 'Jquery' },
                { icon: <IconoBoostrap />, name: 'Boostrap' },
                { icon: <IconoHtml5 />, name: 'Html5' }
            ]
        },
        {
            img: "img/crmveterinario.png",
            titulo: "SISTEMA CRM VETERINARIO",
            url: "https://crmveterinario.com",
            descripcion: "Pagina web Veterinario e Informativo para vista al publico con informacion real del sistema CRM.",
            subtitulo: "PAGINA WEB",
            tecnologia: [
                { icon: <i data-tooltip-id="Php" data-tooltip-content="PHP" className="fab fa-php p-[0.2rem] rounded bg-purple-500 text-white"></i>, name: 'Php' },
                { icon: <IconoCss />, name: 'Css' },
                { icon: <IconoJavacript />, name: 'Javascript' },
                { icon: <IconoJquery />, name: 'Jquery' },
                { icon: <IconoBoostrap />, name: 'Boostrap' },
                { icon: <IconoHtml5 />, name: 'Html5' }
            ]
        },
        {
            img: "img/carritoreactcompras.png",
            titulo: "ACCESORIO DE PRODUCTOS",
            url: "https://carritoaccesorio.com.sistemaboticarosa.com",
            descripcion: "Pagina web estatico del carrito de compras.",
            subtitulo: "PAGINA WEB",
            tecnologia: [
                { icon: <IconoReact />, name: 'React' },
                { icon: <IconoTailwind />, name: 'Tailwind' }
            ]
        }
    ]
    //-------------------------------------
    const handleItemClick = (item) => {
        // Aquí puedes abrir un modal, mostrar detalles, etc.
        console.log("Elemento clickeado:", item);
        // Por ejemplo, abrir un modal:
        // setSelectedItem(item);
        // setIsModalOpen(true);
    };
    return (
        <>
            <Header />
            <section id="portfolio" className="portfolio">
                <div className="contenido-seccion">
                    <h2>PORTAFOLIO</h2>
                    <div className='flex flex-wrap'>
                        {portafolioWeb.map((item, i) => (
                            <div key={i} className='w-full sm:w-1/2 lg:w-1/3 p-2 flex justify-center'>
                                <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    {/* Eliminamos el Link y agregamos onClick */}
                                    <div onClick={() => handleItemClick(item)} style={{ cursor: 'pointer' }}>
                                        <img className="rounded-t-lg" src={item.img} alt="" />
                                    </div>
                                    <div className="p-5">
                                        {/* Eliminamos el Link y agregamos onClick */}
                                        <div onClick={() => handleItemClick(item)} style={{ cursor: 'pointer' }}>
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{item.titulo}</h5>
                                        </div>
                                        <p className="mb-3 font-normal text-gray-100 dark:text-gray-400">{item.descripcion}</p>
                                        <ul className="flex-wrap w-full flex gap-2 pt-5 p-1">
                                            {item.tecnologia.map((tec, index) => (
                                                <li key={index} className="capitalize font-medium text-xs shadow-sm rounded flex justify-center items-center gap-2 px-2.5 py-1 bg-quat">
                                                    {tec.icon}
                                                    {tec.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
