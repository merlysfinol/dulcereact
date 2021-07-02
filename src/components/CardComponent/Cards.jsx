import React from "react"
import { Card } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
import ItemCount from "./ItemCount"
import '../../App.css';

function Cards({imagen, titulo, precio, stock, inicial}) {
    return (
        <Card  
        border='primary'
        key='1'
        text='dark'
        style={{ width: '18rem' }}
        className="mb-2 mt-2"               
        >
            <Card.Img variant="top" src={imagen} height="250px" />
            <ListGroup.Item className="p-1">          
                <Card.Header as="h6" className="p-2">
                    {titulo}
                </Card.Header>                
                <Card.Text>
                    Precio de: ${precio}
                </Card.Text>
              <ItemCount stock={stock} inicial={inicial} />         
            </ListGroup.Item> 
        </Card>
    )
}

export default Cards
