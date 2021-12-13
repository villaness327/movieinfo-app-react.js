import React from 'react';
import './movieresultslist.css';




function Movieresultslist(props){  


    return(        

     <div className='itemResult'><img src={props.poster} alt="movie" className='itemImg'></img></div>

    );
    
}

export {Movieresultslist};