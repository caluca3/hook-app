import { act, renderHook }from "@testing-library/react-hooks";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodo } from '../../fixtures/demotodo';


const handleDelete=jest.fn();
const handleToggle=jest.fn();

describe('Pruebas en todolist', () => { 
    const {result} = renderHook(()=>TodoListItem({
        todo:demoTodo[0],
        i:0,
        handleDelete:{handleDelete},
        handleToggle:{handleToggle}
    }));


        test('should correctly', () => { 
        expect(result).toMatchSnapshot()
    });
    
    test('Debe llamar la funcion borrar', () => { 
        act(()=>{
            handleDelete(1);
        })
        expect(handleDelete).toHaveBeenCalledWith(demoTodo[0].id);
    });
    test('Debe llamar la funcion Toggle', () => { 
        act(()=>{
            handleToggle(1);
        })
        expect(handleToggle).toHaveBeenCalledWith(demoTodo[0].id);
    });
    test('Muestra el texto correctamente', () => {
        const {p} = result.current.props;
      
        const {parr} = result.all.values;
        expect(parr).toEqual(`1.${demoTodo[0].desc}`)
    })
    
})