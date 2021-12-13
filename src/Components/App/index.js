import React from 'react';
import {Movieheader} from '../Movieheader';
import {Movielogo} from '../Movielogo';
import {Moviemenu} from '../Moviemenu';
import {Moviesearch} from '../Moviesearch';
import {Moviepopular} from '../Moviepopular';
import {Loading} from '../Loading';
import {Emptysearchresults} from '../Emptysearchresults';
import {Moviepopularlist} from '../Moviepopularlist';
import {Moviefav} from '../Moviefav';
import {Moviefavlist} from '../Moviefavlist';
import {useFetchMovie} from './useFetchMovie'; 
import {Error} from '../Error';

 
function App() {

const { 
  searchValue,
  loading,
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
         
        <Moviepopular          
          movie={movie} //Array de peliculas
          loading={loading} //estado loading
          error={error}    
          onLoading={()=><Loading/>} //funcion asociado al estado loading        
          onError={()=><Error/>}
          onEmptySearchResults={()=><Emptysearchresults/>}

          onRender={movies=>(
              <Moviepopularlist
                 key={movies.id}
                 poster={movies.poster_path}  
                 title={movies.title}            
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