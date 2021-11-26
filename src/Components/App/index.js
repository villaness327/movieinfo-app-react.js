import React from 'react';
import {Movieheader} from '../Movieheader';
import {Movielogo} from '../Movielogo';
import {Moviemenu} from '../Moviemenu';
import {Movielist } from '../Movielist';
import {Movieitemlist } from '../Movieitemlist';
import {Moviesearch} from '../Moviesearch';
//import {Error} from '../Error';
import {Movieresults} from '../Movieresults';
import {useFetchMovie} from './useFetchMovie'; 

function App() {

const { 
  searchValue,
  setSearchValue,
  results,
  search,
  setSearch,
  loading,

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
          setSearch={setSearch}
          search={search}
        />

         
        <Movieresults 

          loading={loading}
          results={results}

          onLoading={()=><Loading/>}

         />


       
        <Movielist>
        
            <Movieitemlist/> 

        </Movielist >
    </React.Fragment>
  
  );
}
export {App};