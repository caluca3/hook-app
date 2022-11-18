import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const AboutScreen = () => {

    const {setUser} = useContext(UserContext);
    return (
        <>
            <h1>AboutScreen</h1>
            <hr/>
            <button
                className='btn btn-warning'
                onClick={()=>setUser({Name:'Carlos',id:12})}>
                About
            </button>
        </>
        );
}
