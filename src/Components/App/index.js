import React from 'react';
import {Movieheader} from '../Movieheader';
import {Movielogo} from '../Movielogo';
import {Moviemenu} from '../Moviemenu';
import {Moviesearch} from '../Moviesearch';
//import {Error} from '../Error';
import {Movieresults} from '../Movieresults';
import {Loading} from '../Loading';
import{Emptysearchresults} from '../Emptysearchresults';
import{Movieresultslist} from '../Movieresultslist';
import{Moviefav} from '../Moviefav';
import {Moviefavlist} from '../Moviefavlist';


import {useFetchMovie} from './useFetchMovie'; 

 
function App() {

const { 
  searchValue,
  results,
  error,
  setSearchValue,
  movie,

 

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
         
        <Movieresults 
          searchValue={searchValue}
          results={results}
          error={error}
          movie={movie}

          onLoading={()=><Loading/>}
          onEmptySearchResults={()=><Emptysearchresults/>}

          onRender={movie=>(

              <Movieresultslist
              
                 poster={movie.Poster}
              
              
              />



          )}

         />       
        <Moviefav>
        
            <Moviefavlist/> 

        </Moviefav >
    </React.Fragment>
  
  );
}
export {App};