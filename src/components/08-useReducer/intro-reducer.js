//Se envia un obejto dentro de un arreglo
const initialState =[{
    id:1,
    todo:'Comprar pan',
    done:false
}];

const todoReducer= (state=initialState,action)=>{
    if (action?.type==='agg') {
     return [...state, action.payload];
    }
    return state;
}

let todos=todoReducer();

//NUNCA se usa .push En REACT!!.a menos que sea con
//el useRef ya que el .push muta el objeto

const newTodo={
    id:2,
    todo:'comprar leche',
    done:false
}

const action={ 
    //siempre se usa de manera estandarizada
    //tanto el type(la accion que hace) como el payload
    type:'agg',
    payload: newTodo
}

todos=todoReducer(todos,action);

console.log( todos);