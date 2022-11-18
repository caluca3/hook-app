import React from 'react'

//Se puede llamar React.memo para identificar de donde
//se hga llamado la funcion

export const Small = React.memo(({value}) => {
    console.log('hey');
  return (
    <small>{value}</small>
  )
}
)