import React from 'react';
import './moviesearchresults.css';


function Moviesearchresults(props){

    if(!props.searchValue){//Si no existe nada que buscar no se muestra nada

        return null;
    }

    return(     

        <div className='searchMoviesResultsContainer'>

            <h2>Resultados de la Busqueda: {props.searchValue}</h2> 

            {!!props.error && props.onError()}
            {!!props.loading && props.onLoading()}
            {!props.moviesearch.length && props.onEmptySearchResults()}

                    <div className='searchMoviesResultsContainer--item'>

                          {props.moviesearch.map(movie=>props.onRender(movie))}
                        
                    </div>

        </div>
    )
}

export {Moviesearchresults};