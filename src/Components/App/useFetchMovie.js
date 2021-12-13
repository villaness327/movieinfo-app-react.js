import React from 'react';

function useFetchMovie(){

    const [searchValue,setSearchValue]=React.useState(''); //Estado de Busqueda
    const [results,setResults]=React.useState(false);
    const [error,setError]=React.useState('');//Estado que guarda el error
    const [movie,setMovie]=React.useState([]); //Estado que guarda los resultados
   

    const getPopularsMovies=async()=>{

    const url=`https://api.themoviedb.org/3/discover/movie?api_key=35bb9d253a7992789ec5df571fcc7e46&language=es&sort_by=popularity.desc&page=1`;
           
              try{                        
                const response=await fetch(url);//Fetch a la API        
                    
                const data=await response.json(); //Se convierte a JSON              

               if (data.results) {
                 console.log(data.results);
                    setMovie(data.results);                   
                    setResults(true);       
                }   
                        
           
            }catch(error){

                    setError(error);

            }
    }
     
    React.useEffect(()=>{//use Effect se ejecuta cada vez que el estado searchValue cambia      
              
        getPopularsMovies();   
  
               
    },[]);
            
    return{//Este custom hook retorna las propiedades para componente App

        searchValue,
        results,
        error,
        setSearchValue,
        movie,
    }
}

export {useFetchMovie};
