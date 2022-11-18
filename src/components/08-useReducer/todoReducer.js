
//si el state no esta inicializado lo iniciamos como un 
//arreglo vacio

export const todoReducer =(state=[],action)=>{
    switch (action.type) {
       case 'add':
            return [...state, action.payload];
        
        case 'delete':
            return state.filter(todo => todo.id !== action.payload);
    
//nueva manera usando el operador ternario 
//ya que siempre se necesitan dos ciondiciones
        case 'toggle':
            return state.map(todo=>
                (todo.id===action.payload)
                ?
                {...todo,done:!todo.done}
                :todo
                )




            //Asi se manejaba antes
        case 'toggle-old':
            return state.map(todo =>{

                if (todo.id===action.payload) {
                    return{
                        ...todo,
                        done:!todo.done
                    }
                    }else{
                        return todo;
                    }
                })
    
        default:
        return state;
    }
}