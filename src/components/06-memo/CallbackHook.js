import React, { useCallback, useState } from 'react';
import '../05-LayoutEffect/styles.css';
import {ShowIncrement} from './ShowIncrement';

export const CallbackHook = () => {
  
  const [counter, setCounter] = useState(10);

 // const increment =()=>{
    //  setCounter(counter + 1);
  //}
//   Devuelve un callback memorizado.
//useCallback devolverá una versión memorizada 
//del callback que solo cambia si una de las dependencias cambia  
  const increment = useCallback((num) => {

      setCounter(c => c+ num);        
},[setCounter],
);
  

  return (<>
  
  <div>UseCallbackHook {counter}</div>
  <hr/>
  <ShowIncrement increment={increment}/>
  </>
    )
}
