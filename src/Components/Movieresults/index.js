import React from 'react';
import './movieresults.css';


function Movieresults(props){
/*
    const set= new Set( props.movie.map( JSON.stringify ) )
    const arrayMoviesWithoutDuplications = Array.from(set).map(JSON.parse);
    //En el resultado se eliminan los registros duplicados*/
    
    return(

     <section className="carouselSearch">  

                <h2 className='popularMoviesTitle'>Peliculas más Populares</h2>          
                <div className='carouselSearchContainer'>

                {!!props.loading && props.onLoading()}    
                {props.searchValue!=="" && props.movie.map(movies=>props.onRender(movies))}  
                </div>                   
     </section>
    );

}
export { Movieresults };