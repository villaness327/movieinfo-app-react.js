import React from 'react';
import './movieheader.css';

function Movieheader({children}){
    return(
        <header classname="headerContainer">
          {children}
        </header>        
    );
}

export {Movieheader};
