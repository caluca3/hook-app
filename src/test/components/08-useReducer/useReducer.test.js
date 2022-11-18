import { renderHook, act } from '@testing-library/react-hooks';
import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodo } from '../../fixtures/demotodo';

// const demoTodo =[{
//     id:1,
//     desc:'Aprender',
//     done:false
// },
//     {
//         id:2,
//         desc:'rapido',
//         done:false
//     }
// ]

describe('Pruebas en todoReducer',()=>{

    test('Debe retornar el state', () => { 
        // const action ={
        //     type:'add'
        // }
        const { result } = renderHook(() => todoReducer(demoTodo,{}));
        expect(result.current).toEqual(demoTodo)
    });
   
    test('Debe agregar en todo', () => { 
        const todo ={
            id:3,
            desc:'Aprendiendo',
            done:false
        };
        
        const action ={
            type:'add',
            payload:todo
        };
        const { result } = renderHook(() => todoReducer(demoTodo,action));
        
        
         expect(result.current.length).toEqual(3);
         expect(result.current).toEqual([...demoTodo,todo])
    });

    test('Debe borrar en todo', () => { 
      
        
        const action ={
            type:'delete',
            payload:1
        };
        const { result } = renderHook(() => todoReducer(demoTodo,action));
        
        
         expect(result.current.length).toBe(1);
         expect(result.current).toEqual([demoTodo[1]]);
    });
    test('Debe hacer el toggle', () => { 
      
        
        const action ={
            type:'toggle',
            payload:1
        };
        const { result } = renderHook(() => todoReducer(demoTodo,action));
        
        
         expect(result.current[0].done).toBe(true);
         //Se espera un arreglo y lo evaluo contra tal
         expect(result.current[1]).toEqual(demoTodo[1]);
    });
})