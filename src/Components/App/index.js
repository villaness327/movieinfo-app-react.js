import React from 'react';
import {Movieheader} from '../Movieheader';
import {Movielogo} from '../Movielogo';
import {Moviemenu} from '../Moviemenu';
import {Movielist } from '../Movielist';
import {Movieitemlist } from '../Movieitemlist';
import {Moviesearch} from '../Moviesearch';
import {useFetchMovie} from './useFetchMovie'; 

function App() {

const { 
        searchValue,
        setSearchValue,
        result,
        error,

}=useFetchMovie(); //Llamada a custom hook
  
  return (

    <React.Fragment>

        <Movieheader>
            <Movielogo/>
            <Moviemenu/>
        </Movieheader>
        
        <Moviesearch
        
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        
        />

         



       
        <Movielist>
        
            <Movieitemlist/> 

        </Movielist >
    </React.Fragment>
  
  );
}
export {App};