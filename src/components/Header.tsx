import { useState } from "react";
import styles from "./Header.module.css";
export default function Header() {
    const [menuVisible, SetMenuVisible] = useState(false);
    const seleccionar = () => {
        //oculto el menu una vez que selecciono una opcion
        const nav = document.getElementById("nav");
        if (nav) {
            nav.classList.remove("responsive");
        }
        SetMenuVisible(false);
    };
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
                    <li><a href="#inicio" onClick={seleccionar}>INICIO</a></li>
                    <li><a href="#sobremi" onClick={seleccionar}>SOBRE MI</a></li>
                    <li><a href="#skills" onClick={seleccionar}>SKILLS</a></li>
                    <li><a href="#curriculum" onClick={seleccionar}>CURRICULUM</a></li>
                    <li><a href="#portfolio" onClick={seleccionar}>PORTFOLIO</a></li>
                    <li><a href="#contacto" onClick={seleccionar}>CONTACTO</a></li>
                </ul>
            </nav>
            <div className={styles['nav-responsive']} onClick={mostrarOcultarMenu}>
                <i className="fa-solid fa-bars"></i>
            </div>
        </header>
    </div>);
}