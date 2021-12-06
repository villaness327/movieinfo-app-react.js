import React from 'react';
import './movieresults.css';


function Movieresults(props){
 
    return(

     <section className="container__results">
            <div className="containter__results--item">
                <ul>  
                {props.searchValue!="" && props.movie.map(movies=>props.onRender(movies))}  
                </ul>
            </div>           
     </section>
    );
}

export { Movieresults };