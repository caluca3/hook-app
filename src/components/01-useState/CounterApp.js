import React,{useState} from 'react'
import './counter.css';

export const CounterApp = () => {
//EL hook useState el state es un obeto el cual se puede desestructurar 
//de lo que se defina en el useState({Lo que se cree aqui})
//const [state,setState] = useState(second)
  const [state, setState] = useState({
      counter1:10,
      counter2:20
  });
  const {counter1,counter2}=state;

  
  return (<>
    <h1>Counter 1 {counter1}</h1>
    <h1>Counter 2 {counter2}</h1>
    <hr/>
    <button 
        className='btn btn-primary' 
        onClick={()=>{
    //Se necesita hacer el spreed del estado actual 
    // del state para mantener los demas 
    //valores del objeto
    //El operador es del estado anterior para crear 
    //una copia de todos los valores anteriores y sean pasados al nuevo estatus.
                setState({
                ...state,
                counter1:counter1 + 1

            });
            
    }}>
    +1
    </button>
  
  </>
  )
}

