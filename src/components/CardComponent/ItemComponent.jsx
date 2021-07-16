import React from 'react'
import { Button } from "react-bootstrap"

const ItemComponent = ({addCart}) => {
    return (
        <div>
            <Button variant="primary" onClick={() => {addCart({id:1, precio:2000, cantidad:2})}} >Agregar al Carrito</Button>
        </div>
    )
}

export default ItemComponent
