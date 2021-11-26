import React from 'react';
const key='74d6303e';


function useFetchMovie(){

    const [searchValue,setSearchValue]=React.useState(''); //Estado de Busqueda
    const [loading,setLoading]=React.useState(false);
    const [error,setError]=React.useState('');//Estado que guarda el error
    const [results,setResults]=React.useState([]); //Estado que guarda los resultados
  
  
   


    const url=`http://www.omdbapi.com/?apikey=${key}&s=${searchValue}`;    

       
    React.useEffect(()=>{//use Effect se ejecuta cada vez que el estado searchValue cambia 
         
        setLoading(true);
      
            fetchAPI();  
              
   
    },[searchValue]); 
   
   
    async function fetchAPI(){

            try{
             
               
                const response=await fetch(url);//Fetch a API        
                    
                const data=await response.json();
                setResults([data.Search]);
    
                         

            }catch(error){

                console.log(error);

            }
        }
     
      

    return{ //Este custom hook retorna las propiedades para componente App
        searchValue,
        setSearchValue,
        results,
        search,
        setSearch,
        loading,

    }


   
}

export {useFetchMovie};
