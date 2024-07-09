import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export const Portafolio = () => {
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
    return (
        <>
        <Header />
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
