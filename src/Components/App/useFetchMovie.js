import React from 'react';
const key='74d6303e';


function useFetchMovie(){

    const [searchValue,setSearchValue]=React.useState(''); //Estado de Busqueda
    const [result,setResult]=React.useState(''); //Estado que guarda los resultados
   // const [error,setError]=React.useState('');//Estado que guarda el error
    const url=`http://www.omdbapi.com/?apikey=${key}&s=${searchValue}`;    
  
       
    React.useEffect(()=>{//use Effect se ejecuta cada vez que el estado searchValue cambia 
            
        if(searchValue){
            fetchAPI();    

        }
              
   
    },[searchValue]); 
   
   
    async function fetchAPI(){

            try{
             
               
                const data=await fetch(url);//Fetch a API        
                    
                const response=await data.json();//Datos  formato JSON
                setResult(response);  
                console.log(response);           

            }catch(error){

                console.log(error);

            }
        }
     
     
  

    return{ //Este custom hook retorna las propiedades para componente App
        searchValue,
        setSearchValue,
        result,

    }


   
}

export {useFetchMovie};
