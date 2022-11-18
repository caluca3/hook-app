import { act, renderHook } from "@testing-library/react-hooks";
import { MultipleCustomHook } from "../../../components/03-ejemplos/MultipleCustomHook";
import { RealExample } from "../../../components/04-useRef/RealExample";


describe('Pruebas en el componente RealExample',()=>{

    const { result } = renderHook(() =>  RealExample());
   
    test('Debe mostrarse', () => { 

  expect(result).toMatchSnapshot();
    });

    test('Debe ocultarse con la funcion', () => {
        const {customHook} = result.all.find('MultipleCustomHook')
        const {botton} = result.current

        act(()=>{
            botton()
        })
       // expect(customHook.)
        expect(customHook).toBe(true);
    });
});