import React from 'react';
import './movieresultslist.css';
import { v4 as uuidv4 } from 'uuid';

function Movieresultslist(props){
    console.log(props.id)

    return(

        <li key={uuidv4()}><img src={props.poster} alt="movie"></img></li>

     

    );
    
}

export {Movieresultslist};