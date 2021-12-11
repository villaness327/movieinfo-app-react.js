import React from 'react';
import './movieresults.css';


function Movieresults(props){

    const set= new Set( props.movie.map( JSON.stringify ) )
    const arrSinDuplicaciones = Array.from(set).map(JSON.parse);
    
    return(

     <section className="container__results">
            <div className="containter__results--item">
                <div className='containerResults'>
                {props.searchValue!=="" && arrSinDuplicaciones.map(movies=>props.onRender(movies))}  
                </div>
            </div>           
     </section>
    );

    }
export { Movieresults };