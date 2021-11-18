import React from 'react';

function Moviesearch({searchValue,setSearchValue}){

        function onSearch(event){

          setSearchValue(event.target.value);

        }

        return(

            <section className="searchContainer">

               <input className="inputSearch"
               value={searchValue}
               
               placeholder="Busque una Pelicula..." 
         
               onChange={onSearch}
               />

            </section>
        );
}

export {Moviesearch}