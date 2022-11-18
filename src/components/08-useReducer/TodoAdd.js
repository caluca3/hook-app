import React from 'react'
import { useForm } from '../../hooks/useForm';

//Para enviar un parametro creferenciado desde un padre se coloca entre llaves
//luego se define en el componente padre
//<componente 
// funcionenviada={funcionenviada}
// />
export const TodoAdd = ({handleADDTodo}) => {

    const [{description},handleInputChange,reset] = useForm({
        description:'',
    });

    const handleADD=(e)=>{
        e.preventDefault();
        
        if (description.trim().length <=1) {
            return;
        }
        const newTodo ={
            id:new Date().getTime(),
            desc:description,
            done:false
        }
       

        handleADDTodo(newTodo);
        reset();
    }

  return (
    <>
         <form 
            onSubmit={handleADD}className='d-grid gap-2'>
                <input
                className='form-control'
                type='text'
                placeholder='Agregar..'
                name='description'
                autoComplete='off'
                value={description}
                onChange={handleInputChange}/>
                <button 
                type='submit'
                className='btn btn-outline-primary' >
                    Agregar
                </button>
            </form>    
            
    </>
  )
}
