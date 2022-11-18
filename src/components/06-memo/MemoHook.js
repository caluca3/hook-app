import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'

import '../05-LayoutEffect/styles.css'

export const MemoHook = () => {

    const {counter,increment}=useCounter(500);

    const [show, setShow] = useState(true);

    //use memo recibe un callback y una dependecia la cual es modificada
    //o retorna su valor
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (<>
  
    <div>
        <h1>MemoHook</h1>
        <h3>counter:{counter} </h3>
        <hr/>

    <p>{memoProcesoPesado}</p>

<button className='btn btn-primary mr-5'
 onClick={increment}>
     increment +1
 </button>

 <button 
 className='btn btn-warning ml-15'
 onClick={()=>{setShow(!show)}}
 >
     Shoh/Hide{JSON.stringify(show)}
 </button>
    </div>
  </>
  )
}
