import React from 'react';
import './movieresultslist.css';




function Movieresultslist(props){  


    return(        

        <li className='liMovie' key={props.id}><img src={props.poster} alt="movie"></img></li>

    );
    
}

export {Movieresultslist};