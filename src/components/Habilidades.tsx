import { useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import 'animate.css';
const Habilidades = () => {
    const skillsRef = useRef(null);

    useEffect(() => {
        const skillsElement:any = skillsRef.current;
        if (skillsElement) {
            const habilidades = skillsElement.querySelectorAll('.progreso');
            habilidades.forEach((habilidad, index) => {
                setTimeout(() => {
                    habilidad.classList.add(getSkillClass(index));
                }, index * 100); // Ajusta el intervalo de tiempo para la animación de habilidades
            });
        }
    }, []);

    // Función para obtener la clase de habilidad basada en el índice
    const getSkillClass = (index) => {
        const classes = [
            'javascript', 'phplaravel', 'angularcli', 'python', 'htmlcss',
            'bitbucket', 'mysql', 'jiras', 'offices', 'photoshop',
            'comunicacion', 'team', 'creatividad', 'dedicacion', 'proyect'
        ];
        return classes[index] || '';
    };

    // Datos de habilidades técnicas y profesionales
    const habilidades = {
        tecnicas: [
            { nombre: 'Javascript / Jquery', porcentaje: "84%" },
            { nombre: 'Php / Laravel', porcentaje: "85%" },
            { nombre: 'Angular Cli (Typescript) / React (js)', porcentaje: "78%" },
            { nombre: 'Python', porcentaje: "65%" },
            { nombre: 'HTML / CSS / Boostrap', porcentaje: "89%" },
            { nombre: 'GitHub / BitBucket', porcentaje: "91%" },
            { nombre: 'Mysql / Sql', porcentaje: "90%" },
            { nombre: 'Jiras / Postman', porcentaje: "85%" },
            { nombre: 'Offices', porcentaje: "87%" },
            { nombre: 'Photoshop', porcentaje: "81%" }
        ],
        profesionales: [
            { nombre: 'Comunicación', porcentaje: "80%" },
            { nombre: 'Trabajo en Equipo', porcentaje: "85%" },
            { nombre: 'Creatividad', porcentaje: "90%" },
            { nombre: 'Dedicación', porcentaje: "99%" },
            { nombre: 'Gestión De Proyectos', porcentaje: "84%" }
        ]
    };

    return (
        <>
            <Header />
            <section className="skills" id="skills">
                <div className="contenido-seccion" ref={skillsRef}>
                    <h2 className='animate__animated animate__backInDown'>Habilidades</h2>
                    <div className="fila">
                        <div className="col ">
                            <h3 className='animate__animated animate__backInDown'>Habilidades Tecnicas</h3>
                            {habilidades.tecnicas.map((item, i) => (
                                <div key={i} className="skill">
                                    <span>{item.nombre}</span>
                                    <div className="barra-skill">
                                        <div className="progreso">
                                            <span>{item.porcentaje}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col">
                            <h3 className='animate__animated animate__backInDown'>Habilidades Profesionales</h3>
                            {habilidades.profesionales.map((item, i) => (
                                <div key={i} className="skill">
                                    <span>{item.nombre}</span>
                                    <div className="barra-skill">
                                        <div className="progreso">
                                            <span>{item.porcentaje}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Habilidades;
