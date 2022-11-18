import React, { useRef } from 'react';
import '../03-ejemplos/styles.css';


export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick=()=>{
    inputRef.current.select();
    console.log(inputRef);
}


  return (<>
  
    <div>FocusScreen</div>
    <hr/>

    <input ref={inputRef}
        className='form-control'
        placeholder='Su nombre'
    />

    <button 
        className='btn btn-outline-warning mt-3'
        onClick={handleClick}
    > 
    Focus
    </button>
    
  </>
  )
}
