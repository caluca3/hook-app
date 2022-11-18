import { useState } from "react"
//si mandan counter tomara el counter mandado, si no mandan counter tomara el counter 10 por default
export const useCounter = (initialState=10) => {
    
   const [counter, setCounter] = useState(initialState)
   //No se acostumbra a enviar el factor de las condiciones
    const increment=()=>{
        setCounter(counter+1);
    }
    const decrement=()=>{
        setCounter(counter-1);
    }   
    const reset =()=>{
        setCounter(initialState);
    }
    return {
        counter,
        increment,
        decrement,
        reset
};

}
