import { renderHook, act } from '@testing-library/react-hooks';
import {useCounter} from '../../hooks/useCounter';


test('should increment counter', () => {

    const { result } = renderHook(() => useCounter());
    
    expect(typeof result.current.reset).toBe('function');
});


test('Debe incrementar', () => { 

    const { result } = renderHook(() => useCounter());
    const {increment}=result.current;
    
    act(()=>{
          increment()
      });
    const {counter}=result.current;
    expect(counter).toBe(11);
 });


 test('Debe restar', () => { 

    const { result } = renderHook(() => useCounter());
    const {decrement}=result.current;
    
    act(()=>{
          decrement()
      });
    const {counter}=result.current;
    expect(counter).toBe(9);
 });


 test('Debe resetear', () => { 

  const { result } = renderHook(() => useCounter());
  const {reset}=result.current;
  const {increment }=result.current;
  act(()=>{
        increment();
        reset();
    });

    const {counter}=result.current;  
  expect(counter).toBe(10);
});