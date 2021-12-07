import React from 'react';
import './movieresultslist.css';
import { uuid } from 'uuidv4';

function Movieresultslist(props){
    console.log(props.id)

    return(

        <li key={uuid()}><img src={props.poster} alt="movie"></img></li>

     

    );
    
}

export {Movieresultslist};