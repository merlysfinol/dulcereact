import React from "react"
import { Card } from "react-bootstrap"
import ItemCount from "./ItemCount"

function Cards({imagen, titulo, descripcion, precio, stock, inicial}) {
    return (
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body className="text-dark">
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>
                {descripcion}
                </Card.Text>
                <Card.Text>
                {precio}
                </Card.Text>
              <ItemCount stock={stock} inicial={inicial} />
            </Card.Body>
        </Card>
    )
}

export default Cards
