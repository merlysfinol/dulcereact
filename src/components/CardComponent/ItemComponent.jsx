import React from 'react'
import { Button } from "react-bootstrap"

const ItemComponent = ({addCart}) => {
    
    return (
        <div>
            <Button variant="primary" onClick={() => {addCart()}} >Agregar al Carrito</Button>
        </div>
    )
}

export default ItemComponent
