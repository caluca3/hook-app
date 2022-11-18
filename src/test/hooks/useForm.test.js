import { renderHook, act } from '@testing-library/react-hooks';
import { useForm} from '../../hooks/useForm';

const initialState =[{
    name:'carlos',
    id:1
}];

test('Debe setear el value', () => {

    const { result } = renderHook(() => useForm(initialState));
    const [values]=result.current;
    
    expect(values).toEqual(initialState);
});

test('Debe ser una funcion', () => {

    const { result } = renderHook(() => useForm(initialState));
    //Se desestructura como un arreglo en su posicion correcta
    const [,handleInputChange]=result.current;

    act(()=>{
        //se envia el target como un objeto dentro del imputchangue
        handleInputChange({
            target:{
                name:'elvis',
                value:2
            }
        });
    })
    //se espera el tipo de dato
    expect(typeof handleInputChange).toBe('function');
});
test('Debe ser Resetear', () => {

    const { result } = renderHook(() => useForm(initialState));
    //Se desestructura como un arreglo en su posicion correcta
    const [,handleInputChange,reset]=result.current;

    act(()=>{
        //se envia el target como un objeto dentro del imputchangue
        handleInputChange({
            target:{
                name:'elvis',
                id:2
                }
                        },
           // reset()
        );
    reset();
    });
    //Se almacena el resultado lueo del act en un array 
    const [formulario]= result.current;

    //se espera que sea un objeto igual
    expect(formulario).toEqual(initialState);
});




// test('Debe incrementar', () => { 

//     const { result } = renderHook(() => useCounter());
//     const {increment}=result.current;
    
//     act(()=>{
//           increment()
//       });
//     const {counter}=result.current;
//     expect(counter).toBe(11);
//  });