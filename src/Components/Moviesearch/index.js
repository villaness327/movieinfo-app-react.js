import React from 'react';

function Moviesearch(){

        function onSearch(event){


          console.log(event);





        }





        return(

            <section className="searchContainer">

               <input className="inputSearch"

               
               placeholder="Busque una Pelicula..." 
               autofocus
               onChange={onSearch}
               />

            </section>
        );
}

export {Moviesearch}