import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './styles.css';


export const init = ()=>{ 
    //asi se realiza para no guardar en localstrogae
    //  return [{
    //      id:new Date().getTime(),
    //      desc:'Aprender React',
    //      done:false
    //  }];
    //si exiten los todo traelos y si no hay es null
    //si es null trae un arreglo vacio
    return JSON.parse(localStorage.getItem('todos')) || [];
    }

export const TodoApp= () => {
    
    const [todos,dispatch] = useReducer(todoReducer,[],init);
    



   useEffect(() => {
     localStorage.setItem('todos',JSON.stringify(todos));
   }, [todos]);
   
   
   const handleDelete =(todoId,)=>{
    const action ={
        type:'delete',
        payload:todoId
    }
    dispatch(action);
     }

     const handleToggle =(todoId)=>{
    //Se usa la funcion dispatch para enviar la accion al reducer en talcaso 
    //que esta use dispatch
    //ya que son pasados por referencia
        dispatch({
            type:'toggle',
            payload:todoId
        });
     }

const handleADDTodo =(newTodo)=>{
    
    dispatch({
        type:'add',
        payload:newTodo
    })
}
   

  return (<>
  
    <div>
      <h1>TodoApp ({todos.length})</h1>
    <hr/>

    <div className='row '>
        <div className='col-7'>

                <TodoList
                todos={todos}
                handleToggle={handleToggle}
                handleDelete={handleDelete}
                />

        </div>
    <div className='col-5 '>
            <h4>Agregar TODO</h4>
            <hr/>
           <TodoAdd
           handleADDTodo={handleADDTodo}/>
        </div>
    </div>
  </div>
  </>
  )
}
 