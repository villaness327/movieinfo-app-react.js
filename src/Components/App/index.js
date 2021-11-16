import React from 'react';
import {Movieheader} from '../Movieheader';
import {Movielogo} from '../Movielogo';
import {Moviemenu} from '../Moviemenu';
import {Movielist } from '../Movielist';
import {Movieitemlist } from '../Movieitemlist';
import {Moviesearch} from '../Moviesearch';

 

function App() {






  
  return (

    <React.Fragment>

        <Movieheader>
            <Movielogo/>
            <Moviemenu/>
        </Movieheader>
        
        <Moviesearch/>

    
       
        <Movielist>
        
            <Movieitemlist/>        
        
        </Movielist >


    </React.Fragment>
  
  );
}

export {App};