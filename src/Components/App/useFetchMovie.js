import React from 'react';
const key='74d6303e';


function useFetchMovie(){

    const [searchValue,setSearchValue]=React.useState(''); //Estado de Busqueda
    const [result,setResult]=React.useState(''); //Estado que guarda los resultados
    const [error,setError]=React.useState('');//Estado que guarda el error
     
    React.useEffect(()=>{//use Effect se ejecuta cada vez que el estado searchValue cambia  

        try{
            
            const url=`http://www.omdbapi.com/?apikey=${key}&s=${searchValue}`;          

            async function fetchAPI(){
    
                    const response=await fetch(url);//Fetch a API        
                    
                    const responseJSON=await response.json();//Datos  formato JSON
                    setResult(responseJSON);
                    console.log(responseJSON);           
                
            }
                fetchAPI();

        }catch(error){

           setError(error);

        }

    },[searchValue]) 

    return{ //Este custom hook retorna las propiedades para componente App
        searchValue,
        setSearchValue,
        result,
        error,
    }
}

export {useFetchMovie};
