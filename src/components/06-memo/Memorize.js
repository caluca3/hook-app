import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../05-LayoutEffect/styles.css'
import { Small } from './Small';

export const Memorize = () => {

    const {counter,increment}=useCounter(10);

    const [show, setShow] = useState(true);

  return (<>
  
    <div>
        <h1>counter: <Small value={counter}/> </h1>
        <hr/>

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
