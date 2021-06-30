import React, { useState, useEffect } from 'react'
import { Button } from "react-bootstrap"

function ItemCount({inicial, stock} ) {

    let [variable, setVariable]  = useState(inicial)

    useEffect(() => {        
        return () =>{
          }               
    }, [])

    const unaVariable = (x) => setVariable(variable+x);
   
    variable = variable < 1 ? variable+1 : variable
    
    variable = variable > stock ? variable-1 : variable
    
    let bloqueoBoton = stock <= 0 ? true : false   
    
    return (
        <div>
            <Button variant="outline-success mr-2" onClick={() => unaVariable(-1)}>-</Button>
            {variable}
            <Button variant="outline-success ml-2" onClick={() => unaVariable(+1)}>+</Button>
            <p></p>
            <Button variant="primary" disabled={bloqueoBoton}>Agregar</Button>
       </div>
    )
}

export default ItemCount
