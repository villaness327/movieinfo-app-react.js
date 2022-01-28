import React from 'react';
const baseUrl="https://api.themoviedb.org/3/discover/movie?";
const baseUrlSearch="https://api.themoviedb.org/3/search/movie?";
const key='35bb9d253a7992789ec5df571fcc7e46';

function useFetchMovie(){

    const [searchValue,setSearchValue]=React.useState(''); //Estado de Busqueda
    const [loading,setLoading]=React.useState(true);
    const [error,setError]=React.useState('');//Estado que guarda el error
    const [movie,setMovie]=React.useState([]); //Estado que guarda los resultados movie popular
    const [movieSearch, setMovieSearch]=React.useState([]);// Estado que guarda resultado busqueda
   

    const getPopularsMovies=async()=>{ //Se consulta automaticamente por las pelicula + populares a la API

      const url=`${baseUrl}api_key=${key}&language=es&sort_by=popularity.desc&page=1`;
          
            try{                        
                const response=await fetch(url);//Fetch a la API        
                    
                const data=await response.json(); //Se convierte a JSON              

                    if (data.results) {               
                            setMovie(data.results);                                    
                            setLoading(false);                 
                        }   
                        
           
            }catch(error){

                    setError(error);

            }
    }


    const getSearchMovies=async()=>{

        if (!searchValue) { //Valida si existe algo que buscar, para evitar error 422
            return 
         }

        const urlSearch=`${baseUrlSearch}api_key=${key}&query=${searchValue}`;
           
                try{
                const response=await fetch(urlSearch);
                const data=await response.json();            
                   
                            if (data.results){
                                setMovieSearch(data.results);                      
                                setLoading(false);
                             
                            }

                }catch(error){

                    setError(error);
                    
                }
    }
    
     
    React.useEffect(()=>{//use Effect se ejecuta una sola vez     
              
        getPopularsMovies();    
     
               
    },[]);


    React.useEffect(()=>{    //use Effect se ejecuta vada vez que se ingresa algo         
   
        getSearchMovies();
               
    },[searchValue]);
            


    return{//Este custom hook retorna las propiedades para componente App

        searchValue,
        loading,
        error,
        setSearchValue,
        movie,
        movieSearch,
    }
}

export {useFetchMovie};
