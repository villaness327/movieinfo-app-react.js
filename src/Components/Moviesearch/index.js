import React from 'react';
import './moviesearch.css';

function Moviesearch(props){

      
        return(

    
            <section className="searchContainer">

               <input className="inputSearch"
               value={props.searchValue}               
               placeholder="Busque una Pelicula..."         
               onChange={(event) => props.setSearchValue(event.target.value)}            
             ></input>
             </section>

        )


}

export {Moviesearch}