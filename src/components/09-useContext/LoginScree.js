import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScree = () => {

    const {user,setUser} =useContext(UserContext);
    
    
    return (
        <>
            <h1>LoginScreen</h1>
            <hr/>
            <button
                className='btn btn-primary'
                onClick={()=>setUser({  
                                     id:123,
                                     name:'Carlos'  }
                                    )
                        }
            >
                Login
            </button>
        </>
        );
}
