import React from 'react';
const baseUrl="https://api.themoviedb.org/3/discover/movie?";
const key='35bb9d253a7992789ec5df571fcc7e46';

function useFetchMovie(){

    const [searchValue,setSearchValue]=React.useState(''); //Estado de Busqueda
    const [loading,setLoading]=React.useState(true);
    const [error,setError]=React.useState('');//Estado que guarda el error
    const [movie,setMovie]=React.useState([]); //Estado que guarda los resultados
   

    const getPopularsMovies=async()=>{

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
     
    React.useEffect(()=>{//use Effect se ejecuta cada vez que el estado searchValue cambia      
              
        getPopularsMovies();   
  
               
    },[]);
            
    return{//Este custom hook retorna las propiedades para componente App

        searchValue,
        loading,
        error,
        setSearchValue,
        movie,
    }
}

export {useFetchMovie};
