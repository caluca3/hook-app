import React from 'react'


export const TodoListItem = ({todo,i,handleDelete,handleToggle}) => {
    
    
return (<>
<li
    key= {todo.id}
    className='list-group-item'
 >
    <p
     onClick={()=>handleToggle(todo.id)}
     className={`${todo.done &&'complete'}`}
    > {i+1} {todo.desc}
    
    </p>

    <button className='btn btn-danger'
    /*Se envia la funcion con un parametro ya que asi fue creada */

       onClick={()=>handleDelete(todo.id)}>
       Borrar

    </button>
</li>
    
    
</>)
}
