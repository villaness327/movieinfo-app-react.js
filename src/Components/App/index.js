import React from 'react';

import {Movieheader} from '../Movieheader';
import {Movielogo} from '../Movielogo';
import {Moviemenu} from '../Moviemenu';
import {Moviesearch} from '../Moviesearch';
import {Moviesearchresults} from '../Moviesearchresults';
import {Moviesearchresultslist} from '../Moviesearchresultslist';
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
  movieSearch,

}=useFetchMovie(); //Llamada a custom hook
  
  return (

    <React.Fragment>

        <Movieheader>
            <Movielogo/>
        </Movieheader>
    
        <Moviesearch                
            searchValue={searchValue} //estado 
            setSearchValue={setSearchValue} //modificador del estado 
        />

       <Moviesearchresults
            loading={loading}
            error={error}
            onLoading={()=><Loading/>} //funcion asociado al estado loading 
            onError={()=><Error error={error}/>}       
            searchValue={searchValue} //estado            
            onEmptySearchResults={()=><Emptysearchresults/>} //Componente en el caso de no resultados 
            moviesearch={movieSearch} //Array de resultados


            onRender={moviesearched=>( //Render props

                <Moviesearchresultslist
                      key={moviesearched.id}
                      poster={moviesearched.poster_path}
                      title={moviesearched.title}
                />
            )}
          
        />    
      
         
        <Moviepopular    
            loading={loading} //estado loading
            error={error}    
            onLoading={()=><Loading/>} //funcion asociado al estado loading        
            onError={()=><Error error={error}/>}

            movie={movie} //Array de peliculas
            onRender={movies=>( //Render props
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

        <Moviemenu>
         
        </Moviemenu> 


    </React.Fragment>  
  );
}


export {App};