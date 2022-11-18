import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {

    console.log('me estoy mostrando');
  return (
    <button className='btn btn-primary'
            onClick={()=>{
                increment(2);
            }}>
        Incrementar
    </button>
  )
})
