import React from 'react';
import './moviepopular.css';


function Moviepopular(props){
/*
    const set= new Set( props.movie.map( JSON.stringify ) )
    const arrayMoviesWithoutDuplications = Array.from(set).map(JSON.parse);
    //En el resultado se eliminan los registros duplicados*/
    
    return(

     <section className="popularMoviesContainer">  

                <h2 className='popularMoviesTitle'>Películas más Populares</h2>           

                {!!props.loading && props.onLoading()}   
                {!!props.error && props.onError()} 

                <div className='popularMoviesContainer--item'>
                        {props.movie.map(movies=>props.onRender(movies))}  
                 </div>
                                 
     </section>
    );

}
export { Moviepopular };