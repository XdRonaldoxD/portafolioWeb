import { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
export default function Header() {
    const [menuVisible, SetMenuVisible] = useState(false);

    const mostrarOcultarMenu = () => {
        const nav: any = document.getElementById("nav");
        if (menuVisible) {
            nav.classList.remove("responsive");
            SetMenuVisible(false);
        } else {
            nav.classList.add("responsive");
            SetMenuVisible(true);
        }
    };
    return (<div className={styles['contenedor-header']}>
        <header>
            <div className={styles['logo']}>
                <a href="#">RONALDO</a>
            </div>
            <nav id="nav">
                <ul>

                    <li><Link to={"/"}>INICIO</Link></li>
                    <li><Link to={"/AcercaDeMi"}>SOBRE MI</Link></li>
                    <li><Link to={"/Habilidades"}>HABILIDADES</Link></li>
                    <li><Link to={"/Curriculo"}>CURRICULUM</Link></li>
                    <li><Link to={"/Portafolio"}>PORTAFOLIO</Link></li>
                </ul>
            </nav>
            <div className={styles['nav-responsive']} onClick={mostrarOcultarMenu}>
                <i className="fa-solid fa-bars"></i>
            </div>
        </header>
    </div>);
}