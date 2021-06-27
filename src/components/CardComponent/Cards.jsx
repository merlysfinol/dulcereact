import React from "react"
import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap"

function Cards({imagen, titulo, descripcion, precio}) {
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
                <Button variant="primary mr-2">Agregar</Button>
                <Button variant="primary ml-2">Comprar</Button>
            </Card.Body>
        </Card>
    )
}

export default Cards
