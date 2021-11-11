import React from 'react';
import {Movieheader} from '../Movieheader';
import {Movielogo} from '../Movielogo';
import {Moviemenu} from '../Moviemenu';
 

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

        <Moviesearch>

           <Moviesearchbox/>

        </Moviesearch>

        <Moviemainlist>

            <Moviemainitemlist />

</Moviemainlist>









    </React.Fragment>
  
  );
}

export {App};