import React from 'react';
import './moviepopularlist.css';

const urlBaseImage="https://image.tmdb.org/t/p/w500/";

function Moviepopularlist(props){   

    return(        
     <div className='popularMoviesListItem'>
         
         <img src={urlBaseImage + props.poster} alt={props.title} className='itemImg'></img>
     </div>

    );    
}

export {Moviepopularlist};