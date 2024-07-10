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
    const iconoTailwind = `
    <svg viewBox="0 0 248 31" class="text-slate-900 dark:text-white w-auto h-5">
    <path fill-rule="evenodd" clip-rule="evenodd" 
    d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 
    8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 
    3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701
     18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 
     0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" 
     fill="#38bdf8"></path>
     </svg>
     `;
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
                                <div className='proyecto  flex justify-between'>
                                    <i className="fab fa-laravel p-[0.2rem] rounded  bg-orange-500 text-white"></i>
                                    <i className="fab fa-php p-[0.2rem] rounded bg-purple-500 text-white"></i>
                                    <i className="fab fa-angular p-[0.2rem] rounded bg-red-500 text-white"></i>
                                    <i className="fab fa-html5 p-[0.2rem] rounded bg-orange-400 text-white"></i>
                                    <i className="fab fa-js p-[0.2rem] rounded bg-yellow-400 text-white"></i>
                                    <i className="fab fa-bootstrap p-[0.2rem] rounded bg-purple-400  text-white"></i>
                                    <i className="fab fa-react p-[0.2rem] rounded bg-cyan-500 text-white"></i>
                                    <i className="fab fa-css3-alt p-[0.2rem] rounded  bg-blue-400 text-white"></i>
                                    <svg viewBox="0 0 48 31" className="p-[0.2rem] rounded w-6 h-6 bg-white">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 
                                                8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 
                                                3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701
                                                18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 
                                                0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
                                            fill="#38bdf8"
                                        />
                                    </svg>
                                    <img className="p-[0.2rem] rounded w-6 h-6 bg-white" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACSElEQVR4AcXXA6wdQRSA4VPbtm3btm3bthXWtm3btm3bbk//JA+bzV7vS5N8a5zxjKjqfyWJu6y0S0SEg3jCmx+FhJgkQguEDOoAkiMJxGQKRkOCMoCkGIOwEJM3GGBXAJEhFg5gsoMiUSyxI4D6iA0xSQFFJYhJMHz141MA4zADYmEoFPkc3F8LxRBvA8gCRTGIhU1QVHVwvzDUTzlvArgNddKMjkIxEuLACqiflhAXEiOUsMkFxQOIAwehuAZx4gDUzx5URniIQTqMQ2EEEzaToLgEcWAZ1Hkx+fH7nsktnMMjvENnYxGchOIpQkEsdIX6uQpxITsm4Ay+Q/EWK5HWXAdeQPEXSSEW4kMNxkHcFAZhnVXCL1A/1SEOLIEatIb4Sti8h/qZD3EgJv5ADXpDvBQeZYXNTaifr86yCzWhJmuRCOKBJNiHosJmM9SgP8SJLlCT75iALBAnQqOt8T/il41q8A2RIU40wC+ohTOYjHaoh4boiuWGIhxkrAPJoCZbIC6kxlaoB96jolVXvAfqZQUriiV4C7XwA3vRAcEcjQV5oRaaQtwUAdlQHjVQFfkQ3d3heB3UQgdIEAiN8MYLkfARamEyxEYp0NEcgKAA1IGrKAfxUWncR26I487Gsa2oAvFQbEyEopmrWXEF/IQ6cR8TUQtpEM00T4yJzGiDlVA/7dydlqfFSaibPuA+buI+vkBN6nizLuiF91Af7EI6XxYmMdAPV6Ee2I2qdq8NC2EglmEvzuMyzmIrZqEpUkJcEVX9r/4B0dpZHaS3GLUAAAAASUVORK5CYII=" alt="" data-csiid="FNCNZsmDK8Cr5OUP-4G9kA4_9" data-atf="1"></img>
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
