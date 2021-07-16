import React, { useState } from 'react'
import { Button } from "react-bootstrap"
import ItemComponent from './ItemComponent'

function ItemCount( {product, inicial, count} ) {

    console.log(inicial)
    
    const [cart, setCart] = useState([])
    const [isAdd, setIsAdd] = useState(false)

    let [variable, setVariable]  = useState(inicial) 
    
    const unaVariable = (x) => setVariable(variable+x);
   
    variable = variable < 1 ? variable+1 : variable
    
    variable = variable > product ? variable-1 : variable
    
    let bloqueoBoton = product <= 0 ? true : false

    function addCart(prod){

        setCart([...cart, prod])
        setIsAdd(true)
        console.log(cart)
    }
   
    let contador = count ? <div><Button variant="outline-success mr-2" onClick={() => unaVariable(-1)}>-</Button>{variable}<Button variant="outline-success ml-2" onClick={() => unaVariable(+1)}>+</Button><p></p> </div>: <div></div> 
       return (
        <div>
            {contador}
            {isAdd ? <Button variant="primary" disabled={bloqueoBoton} href="/cart" >Terminar Compra</Button>:
                <ItemComponent addCart={addCart} />}     
       </div>
    )
}

export default ItemCount
