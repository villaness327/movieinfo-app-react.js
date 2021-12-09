import React from 'react';
import './movieresultslist.css';


function Movieresultslist(props){
 

    return(

        <li key={props.poster}><img src={props.poster} alt="movie"></img></li>

     

    );
    
}

export {Movieresultslist};