import React from 'react';

export const InicioWeb = () => {
    return (
        <div className="container">

            <div className="inicio-top">
                <img className="inicio-top_img" src="images/computer.png" alt="logo"></img>
                <h1 className="inicio-top_titulo">Carlos Rodríguez Pérez</h1>
                <h3 className="inicio-top_subtitulo">Frontend Developer</h3>
                <button className="inicio-top_button btn btn-outline">
                    <a className="inicio-top_button_link" href="images/CV_Carlos_Rodriguez.pdf" download>Descargar CV</a>
                </button>
            </div>

            <div className="inicio-middle">
                <div className="inicio-middle_about">
                    <div className="inicio-middle_about_es">
                        <p>Soy Carlos Rodríguez Pérez, de Madrid, un estudiante de programación y desarrollo web. Empecé a interesarme por este sector a principios del año 2020, cuando decidí hacer unos cursos para adquirir una base teórica y práctica. Al acabar estos cursos decidí ampliar mis conocimientos e intentar, de forma definitiva, dedicarme al desarrollo web. Siempre me he visto muy interesado por el diseño y la sensación que te proporciona el empezar a construir algo desde cero y ver el resultado final como lo había imaginado en mi cabeza, y considero que el desarrollo web y la programación me proporciona todo eso que me fascina.</p>
                    </div>
                    <div className="inicio-middle_about_eng">
                        <p>I'm Carlos Rodríguez Pérez, from Madrid, a student of programming and web development. I started to get interested in this sector at the beginning of the year 2020, when I decided to do some courses to acquire a theoretical and practical basis. At the end of these courses I decided to expand my knowledge and try, definitively, to dedicate myself to web development. I have always been very interested in design and the feeling it gives you to start building something from scratch and see the final result as I had imagined it in my head, and I consider that web development and programming gives me all that fascinates me.</p>
                    </div>
                </div>

                <div className="inicio-middle_conocimientos">
                <div className="inicio-middle_conocimientos_es">
                        <p>Durante este año he ido adquiriendo conocimiento de varias tecnologías, tanto de maquetación como de programación frontend. Empecé con HTML5 y CSS3 para más adelante complementarlo con Bootsrap y SASS. A continuación comenzé a aprender más sobre Javascript (ES6) y algunos frameworks como Angular 10+ y React. También poseo experiencia en desarrollos de web responsive, así como en Firebase y Git. </p>
                    </div>
                    <div className="inicio-middle_conocimientos_eng">
                        <p>During this year I have been acquiring knowledge of various technologies, both layout and frontend programming. I started with HTML5 and CSS3 to later complement it with Bootsrap and SASS. Then I started to learn more about Javascript (ES6) and some frameworks like Angular 10+ and React. I also have experience in responsive web development, as well as Firebase and Git.</p>
                    </div>
                </div>
            </div>

            <div className="inicio-bottom">
                <div className="inicio-bottom_title">
                    <h2>Proyectos</h2>
                </div>
                <div className="inicio-bottom_images">
                    <a href="https://heroes-react-app.web.app/login" className="inicio-bottom_images_uno">
                        <img className="images" src="images/heroes.png" alt="heroes"></img>
                    </a>
                    <a href="https://gif-react-app.web.app/" className="inicio-bottom_images_dos">
                        <img className="images" src="images/gif.png" alt="gif"></img>
                    </a>
                    <a href="https://peliculasapp-crod.web.app/home" className="inicio-bottom_images_tres">
                        <img className="images" src="images/peliculas.png" alt="peliculas"></img>
                    </a>
                    <a href="https://you-tube-crod.web.app" className="inicio-bottom_images_cuatro">
                        <img className="images" src="images/youtube.png" alt="youtube"></img>
                    </a>
                </div>
            </div>

            <div className="info">
                <div className="info_izq">
                    <h4>Contacto:</h4>
                    <ul>
                        <li>
                            <a href="mailto: crodriguezperez95@gmail.com">crodriguezperez95@gmail.com</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/carlos-rodr%C3%ADguez-p%C3%A9rez-071748178/">https://www.linkedin.com/in/carlos-rodríguez-pérez-071748178/</a>
                        </li>
                        <li>
                            <p>+34 652457110</p>
                        </li>
                    </ul>
                </div>
                <div className="info_drcha">
                    <h4>GitHub</h4>
                    <ul>
                        <li>
                            <a href="https://github.com/carlosrod-95">https://github.com/carlosrod-95</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        
        
    )
}