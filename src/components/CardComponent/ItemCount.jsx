import React, { useState, useContext } from 'react'
import { Button } from "react-bootstrap"
import ItemComponent from './ItemComponent'
import { ShopContext } from '../../context/ShopContext'
import { Link } from 'react-router-dom'

function ItemCount( {id, product, inicial, count, productoTitulo, productoPrecio} ) {
    
    const [isAdd, setIsAdd] = useState(false)

    let [variable, setVariable]  = useState(inicial) 
    
    const unaVariable = (x) => setVariable(variable+x);
   
    variable = variable < 1 ? variable+1 : variable
    
    variable = variable > product ? variable-1 : variable

    const CONTEXT = useContext(ShopContext)

    function addCart(){

        CONTEXT.agregaProd(id, productoTitulo,  variable, productoPrecio)
        setIsAdd(false)

    }
   
    let contador = count ? <div><Button variant="outline-success mr-2" onClick={() => unaVariable(-1)}>-</Button>{variable}<Button variant="outline-success ml-2" onClick={() => unaVariable(+1)}>+</Button><p></p> </div>: <div></div> 
       return (
        <div>
            {contador}
            {isAdd ? <Link to={"/cart"}><Button variant="primary" disabled={product <= 0} >Terminar Compra</Button></Link>:
                <ItemComponent addCart={addCart} />}  
                <p></p><Link to={"/cart"}><Button variant="primary" disabled={product <= 0} >Ir a Pagar</Button></Link>   
       </div>
    )
}

export default ItemCount
