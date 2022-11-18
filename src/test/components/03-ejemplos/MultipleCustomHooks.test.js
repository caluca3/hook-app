import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { MultipleCustomHook } from '../../../components/03-ejemplos/MultipleCustomHook';
import { useFetch } from '../../../hooks/useFetch';

jest.mock( '../../../hooks/useFetch');
describe('pruebas en mnultiples custom hooks', () => { 

    test('Debe mostrarse correctamente', () => { 

        useFetch.mockReturnValue({
            data:null,
            loading:false,
            error:null
        });
        const view = renderHook(()=>MultipleCustomHook())
        expect(view).toMatchSnapshot();
     });
     test('should first', () => { 

        useFetch.mockReturnValue({
            data:[{
                author:'Carlos',
                quote:'Hola mundo'
        }],
            loading:false,
            error:null
        });
        const view = renderHook(()=>MultipleCustomHook());
        console.log(view.rerender());
      })
});
