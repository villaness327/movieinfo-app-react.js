import React from 'react';

import './moviesearchresultslist.css';

const urlBaseImage="https://image.tmdb.org/t/p/w500/";



function Moviesearchresultslist(props){

   return(
      
      <div className='searchresultslist--item'>
          
           <img src={urlBaseImage + props.poster } alt={props.title} className='itemImg'></img>
      </div>


   );



}


export {Moviesearchresultslist};