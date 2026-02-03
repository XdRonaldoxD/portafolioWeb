import './Home.css';
import Footer from "./Footer";
import Header from "./Header";
import 'animate.css';
import { Link } from 'react-router-dom';
export default function Home() {
    return (
        <>
            <Header />
            <section id="inicio" className="inicio">
                <div className="contenido-banner flex flex-col md:flex-row items-center justify-center">
                    <div className="w-full md:w-1/2 animate__animated animate__bounceIn">
                        <div className="contenedor-img mx-auto sm:w-3/4 md:w-1/2 lg:w-3/4 xl:w-1/2">
                            <img src="/img/hero.png" alt="Imagen de presentación" loading="lazy" className="mx-auto w-full h-auto" />
                        </div>
                        <div className="redes flex justify-center mt-4 ">
                            <Link to={'https://www.facebook.com/smith.durandluna/'} target="_blank" className="ml-4"><i className="fa-brands fa-facebook-f"></i></Link>
                            <Link to={'https://www.linkedin.com/in/ronaldo-smit-durand-luna-1b0753172/'} target="_blank" className="ml-4"><i className="fa-brands fa-linkedin-in"></i></Link>
                            <Link to={'https://github.com/XdRonaldoxD'} target="_blank" className="ml-4"><i className="fa-brands fa-git"></i></Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h1 className="text-center mt-4 md:mt-0 animate__animated animate__backInDown">RONALDO SMIT</h1>
                        <h2 className="text-center md:text-justify mt-4 animate__animated animate__pulse">
                            Soy Ingeniero Informático y Desarrollador Full Stack con experiencia en el desarrollo de aplicaciones web. Desde Perú 🇵🇪.
                        </h2>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}