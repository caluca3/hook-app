import React, { useEffect,useState } from 'react'

export const Message = () => {

    const [coors, setcoors] = useState({
        x:0,
        y:0
    });

    const {x,y}=coors;

    useEffect(() => {
        //console.log('Componente montado')
        const mouseMove=(e)=>{
         //   console.log(':D')
            const coors = {x:e.x, y:e.y}
            setcoors(coors);
        }
    
        window.addEventListener('mousemove',mouseMove);

      return () => {
        console.log('Componenete desmontado');
      }
    }, [])
    
//Siempre react 18 colocar <> para el fragment
//y que retorne el componente reenderizado
  return (<>
          <div>
        <h3>Message</h3> 
        <p>X:{x} Y:{y}</p>
        </div>
    </>
  )
}
