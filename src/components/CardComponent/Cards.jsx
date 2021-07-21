import React from "react"
import { Card, ListGroup } from "react-bootstrap"
import ItemCount from "./ItemCount"
import '../../App.css';
import { Link } from 'react-router-dom'

function Cards({producto, imagen, titulo, precio, stock, inicial}) {
    return (
        <Card  
        border='primary'
        text='dark'
        style={{ width: '18rem' }}
        className="mb-2 mt-2"               
        >   
            <Link to={"/item/"+producto } >
                <Card.Img variant="top" src={imagen} height="250px" />
            </Link>    
         <ListGroup.Item className="p-1">
            <Link to={"/item/"+producto } >         
                <Card.Header className="p-2">
                    {titulo}
                </Card.Header>
            </Link>                        
                <Card.Text>
                    Precio de: ${precio}
                </Card.Text>
       
              <ItemCount id={producto} product={stock} inicial={inicial} count={false} productoTitulo={titulo} productoPrecio={precio}/>         
            </ListGroup.Item> 
        </Card>
    )
}

export default Cards
