import React from 'react';
import './movieheader.css';

function Movieheader({children}){
    return(
        <header className="headerContainer">
          {children}
        </header>        
    );
}

export {Movieheader};
