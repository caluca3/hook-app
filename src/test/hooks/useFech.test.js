import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from '../../hooks/useFetch';

describe('puebas en fetch',()=>{

    test('Debe traer por defecto',() => { 
    
       const {result}= renderHook(()=>useFetch('https://www.breakingbadapi.com/api/quotes/'))
     
       const {data,loading,error}=result.current;

       expect(data).toBe(null);
       expect(loading).toBe(true);
       expect(error).toBe(null);

    });

    test('Debe traer la info deseada', async() => {

        const {result,waitForNextUpdate}= renderHook(()=>useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        //Se modifica el tiempo de respuesta de la API por la conexion
        await waitForNextUpdate({timeout:2000});
       
        const {data,loading,error}=result.current;

        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);
    });

    test('Debe manejar el error', async() => { 
        
        const {result,waitForNextUpdate}= renderHook(()=>useFetch('https://reqres.in/apif/users?page=2'));
        //Se modifica el tiempo de respuesta de la API por la conexion
        await waitForNextUpdate({timeout:2000});
       
        const {data,loading,error}=result.current;

        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('Epale para donde vas');
     })

});