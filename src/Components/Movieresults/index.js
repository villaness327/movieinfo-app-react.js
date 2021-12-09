import React from 'react';
import './movieresults.css';


function Movieresults(props){

    const set= new Set( props.movie.map( JSON.stringify ) )
    const arrSinDuplicaciones = Array.from(set).map(JSON.parse);
    
    return(

     <section className="container__results">
            <div className="containter__results--item">
                <ul>  
                {props.searchValue!=="" && arrSinDuplicaciones.map(movies=>props.onRender(movies))}  
                </ul>
            </div>           
     </section>
    );

    }
export { Movieresults };