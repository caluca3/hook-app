import React, { useState } from 'react'
import { MultipleCustomHook } from '../03-ejemplos/MultipleCustomHook';
import '../03-ejemplos/styles.css';

export const RealExample = () => {


const [show, setShow] = useState(false);
const ocultar = ()=>{
  setShow(!show);
}
  return (<>
  
    <div>RealExample</div>
    <hr/>
{

   show && < MultipleCustomHook/>
}
<button className='btn btn-warning mt-5'
        onClick={ocultar}
 >Show/Hide</button>
     
  </>
  )
}
