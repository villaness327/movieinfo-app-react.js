import React from 'react';
import './moviesearchresults.css';


function Moviesearchresults(props){



    return(

     

        <div className='searchMoviesResultsContainer'>

            <h2>Resultados de la Busqueda: {props.searchValue}</h2> 

            {!!props.loading && props.onLoading()}
            {!props.moviesearch.length && props.onEmptySearchResults()}

                    <div className='searchMoviesResultsContainer--item'>

                          {props.moviesearch.map(movie=>props.onRender(movie))}
                        
                    </div>

        </div>
    )
}

export {Moviesearchresults};