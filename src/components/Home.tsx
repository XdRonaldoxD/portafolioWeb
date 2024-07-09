import './Home.css';
import Footer from "./Footer";
import Header from "./Header";
export default function Home() {
    return (
        <>
            <Header />
            <section id="inicio" className="inicio">
                <div className="contenido-banner flex flex-col md:flex-row items-center justify-center">
                    <div className="w-full md:w-1/2">
                        <div className="contenedor-img mx-auto sm:w-3/4 md:w-1/2 lg:w-3/4 xl:w-1/2">
                            <img src="/img/hero.png" alt="" className="mx-auto w-full h-auto" />
                        </div>
                        <div className="redes flex justify-center mt-4">
                            <a href="https://www.facebook.com/smith.durandluna/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.linkedin.com/in/ronaldo-smit-durand-luna-1b0753172/" target="_blank" rel="noopener noreferrer" className="ml-4"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://github.com/XdRonaldoxD" target="_blank" rel="noopener noreferrer" className="ml-4"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h1 className="text-center mt-4 md:mt-0">RONALDO SMIT</h1>
                        <h2 className="text-center md:text-justify mt-4">
                            Soy un Ingeniero Informático y Desarrollador Full Stack con 5 años de experiencia en el desarrollo de aplicaciones web. Desde Perú 🇵🇪.
                        </h2>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}