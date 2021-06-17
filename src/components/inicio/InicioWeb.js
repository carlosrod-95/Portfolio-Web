import React from 'react';

export const InicioWeb = () => {
    return (
        <div className="container">

            <div className="inicio-top">
                <img className="inicio-top_img" src="images/computer.png"></img>
                <h1 className="inicio-top_titulo">Carlos Rodríguez Pérez</h1>
                <h3 className="inicio-top_subtitulo">Frontend Developer</h3>
                <button className="inicio-top_button btn btn-outline">
                    <a className="inicio-top_button_link" href="images/cv.pdf">Ver CV</a>
                </button>
            </div>

            <div className="inicio-middle">
                <div className="inicio-middle_about">
                    <div className="inicio-middle_about_es">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    </div>
                    <div className="inicio-middle_about_eng">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    </div>
                </div>

                <div className="inicio-middle_conocimientos">
                <div className="inicio-middle_conocimientos_es">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    </div>
                    <div className="inicio-middle_conocimientos_eng">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    </div>
                </div>
            </div>

            <div className="inicio-bottom">
                <div className="inicio-bottom_title">
                    <h2>Proyectos</h2>
                </div>
                <div className="inicio-bottom_images">
                    <a href="" className="inicio-bottom_images_uno">
                        <img className="images" src="images/heroes.png"></img>
                    </a>
                    <a href="" className="inicio-bottom_images_dos">
                        <img className="images" src="images/gif.png"></img>
                    </a>
                    <a href="" className="inicio-bottom_images_tres">
                        <img className="images" src="images/peliculas.png"></img>
                    </a>
                    <a href="" className="inicio-bottom_images_cuatro">
                        <img className="images" src="images/youtube.png"></img>
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