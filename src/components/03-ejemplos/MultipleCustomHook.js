import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './styles.css';

export const MultipleCustomHook = () => {

  const {counter,increment}=useCounter(1);

  const {loading,data}= useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  //para una condicion logica sencilla  y convetti booleanos
  //se puede realiuzar ejemplo!!data&&data[0]
  // para efectos necesarios
console.log(data);
  const {author,quote} = !!data && data[0];//si la data existe extrae la posicion 0
  
  
 
  return (
    <>
    <div>
        <h1>BreakingbBad quotes</h1>
        <hr/>
        
         {
                loading?(
        <div className='alert alert-info text-center'>
            loading...
        </div>

                ):
        <blockquote className='text-end'> 
            <p className='mb-0'>{quote}</p>
            <br/>
            <footer className='blockquote-footer'>{author}</footer>
        </blockquote>
         }

        {
        !loading 
         &&
 
            ( 
                <button id='btn' className="btn btn-primary"onClick={ increment }>
                    Siguiente quote
                </button>
            )
        }

    </div>
    </>
  );
}
