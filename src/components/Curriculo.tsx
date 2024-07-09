import Footer from "./Footer"
import Header from "./Header"

export const Curriculo = () => {

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
            <Footer />
        </>
    )
}
