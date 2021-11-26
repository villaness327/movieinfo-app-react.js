import React from 'react';
import './moviesearch.css';

function Moviesearch(props){



       function onSearch(event) {
 
        props.setSearchValue(event.target.value);
        

     
       }

   


        return(

    
            <section className="searchContainer">

               <input className="inputSearch"
               value={props.searchValue}               
               placeholder="Busque una Pelicula..."         
               onChange={onSearch}/>        
         
            </section>
      
     


        );


}

export {Moviesearch}