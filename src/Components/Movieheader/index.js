import React from 'react';
import './movieheader.css';

function Movieheader({children}){
    return(
        <header>
          {children}
        </header>        
    );
}

export {Movieheader};
