import React from 'react';
import './movieresults.css';


function Movieresults(props){
 
    return(

     <section className="container__results">
            <div className="containter__results--item">
                <ul>  
                {props.searchValue!=="" && props.movie.map((movies,index)=>props.onRender(movies,index))}  
                </ul>
            </div>           
     </section>
    );
}

export { Movieresults };