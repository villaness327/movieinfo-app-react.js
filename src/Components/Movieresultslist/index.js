import React from 'react';
import './movieresultslist.css';
const urlBaseImage="https://image.tmdb.org/t/p/w500/";

function Movieresultslist(props){  
 

    return(        
     <div className='itemResult'><img src={urlBaseImage + props.poster} alt="movie" className='itemImg'></img></div>

    );    
}

export {Movieresultslist};