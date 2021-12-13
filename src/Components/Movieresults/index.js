import React from 'react';
import './movieresults.css';


function Movieresults(props){

    const set= new Set( props.movie.map( JSON.stringify ) )
    const arrayMoviesWithoutDuplications = Array.from(set).map(JSON.parse);
    //En el resultado se eliminan los registros duplicados
    
    return(

     <section className="carouselSearch">            
                <div className='carouselSearchContainer'>
                {props.searchValue!=="" && arrayMoviesWithoutDuplications.map(movies=>props.onRender(movies))}  
                </div>                   
     </section>
    );

}
export { Movieresults };