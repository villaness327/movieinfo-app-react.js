import React from 'react';
import {Movieheader} from '../Movieheader';
import {Movielogo} from '../Movielogo';
import {Moviemenu} from '../Moviemenu';
import {Movielist } from '../Movielist';
import {Movieitemlist } from '../Movieitemlist';
import {Moviesearch} from '../Moviesearch';
import {Moviemainlist} from '../Moviemainlist';
import {Moviemainitemlist} from '../Moviemainitemlist';
 

function App() {
  return (

    <React.Fragment>

        <Movieheader>
            <Movielogo/>
            <Moviemenu/>
        </Movieheader>

        <Movielist>
        
            <Movieitemlist/>        
        
        </Movielist >

        <Moviesearch/>

       

        <Moviemainlist>

            <Moviemainitemlist />

        </Moviemainlist>









    </React.Fragment>
  
  );
}

export {App};