import React from 'react';
key='74d6303e';


function useMovie(){


    const[search,searchValue]=React.useState(''); //Estado de Busqueda

    const url=`http://www.omdbapi.com/?apikey=${key}&s=${search}`;


    const fetchAPI=async()=>{

       const response=await fetch(url);

       console.log(response.status);   


       React.useEffect(()=>{

           fetchAPI();

       },[])

    }

    return{

    search,
    searchValue,
    }

}

export {useMovie};
