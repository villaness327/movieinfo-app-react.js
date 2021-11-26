import React from 'react';
import './movieresults.css';



function Movieresults(props){

  const movies=props.results;

 
    return(

     <section className="container__results">
            <div className="containter__results--item">    

           {
           (props.loading && onLoading())

           }


      
            

         
      
        
            </div>           
     </section>
    );

}

export { Movieresults };