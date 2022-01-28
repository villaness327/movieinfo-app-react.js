import React from 'react';

import './moviemenu.css';


    function Moviemenu(){

        return (

         <section className="menuContainer">

             <section className="menu">

                    <div className="menuButton">                           
                      <a href="#">Inicio</a>
                    </div>

                    <div className="menuButton">                           
                      <a href="#">Peliculas</a>
                    </div>

                    <div className="menuButton">                           
                      <a href="#">Series</a>
                    </div>

                    <div className="menuButton">                           
                      <a href="#">Explorar</a>
                    </div>

                    <div className="menuButton">                           
                      <a href="#">Favoritas</a>
                    </div>

             </section>


         </section>


        )
    }

export {Moviemenu};