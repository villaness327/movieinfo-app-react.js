import React from 'react';

function useFetchMovie(){

    const [searchValue,setSearchValue]=React.useState(''); //Estado de Busqueda
    const [results,setResults]=React.useState(false);
    const [error,setError]=React.useState('');//Estado que guarda el error
    const [movie,setMovie]=React.useState([]); //Estado que guarda los resultados
   

    const fetchAPI=async(searchValue)=>{

        const url = `http://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=74d6303e`;  

            try{                        
                const response=await fetch(url);//Fetch a la API        
                    
                const data=await response.json(); //Se convierte a JSON              

               if (data.Search) {
                    setMovie(data.Search);                   
                    setResults(true);       
                }   
                        
           
            }catch(error){

                    setError(error);

            }
    }
     
    React.useEffect(()=>{//use Effect se ejecuta cada vez que el estado searchValue cambia               
     
              
        fetchAPI(searchValue);   
        console.log(searchValue);
        
          
       
    },[searchValue]);
            
    return{//Este custom hook retorna las propiedades para componente App


        searchValue,
        results,
        error,
        setSearchValue,
        movie,
  
     
   


    }
}

export {useFetchMovie};
