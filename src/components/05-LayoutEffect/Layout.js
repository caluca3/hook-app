import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './styles.css';

export const Layout = () => {

  const {counter,increment}=useCounter(1);

  const {data}= useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  //para una condicion logica sencilla  y convetti booleanos
  //se puede realiuzar ejemplo!!data&&data[0]
  // para efectos necesarios

  
  //si la data existe extrae la posicion 0
  //Ya que la data es un objeto llamado de la url
  const {quote} = !!data && data[0];

  const pTag = useRef();
  
  const [boxSize, setBoxSize] = useState({});
  

  useLayoutEffect(() => {
   setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);


  return (
    <>
    <div>
        <h1>Layout</h1>
        <hr/>

        <blockquote className='text-end'> 
            <p ref={pTag} className='mb-0'>{quote}</p>
            <br/>
        </blockquote>

        <pre>
          {JSON.stringify(boxSize,null,3)}
        </pre>
         
     <button id='btn' className="btn btn-primary"onClick={ increment }>
         Siguiente quote
      </button>

    </div>
    </>
  );
}
