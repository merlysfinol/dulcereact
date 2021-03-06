import {React} from "react"
import { Card, Row, Col, Container, ListGroup } from "react-bootstrap"
import ItemCount from "./ItemCount"

function ItemDetail({producto}) {  

    return (
        <Container  className="p-4">           
         
              <Row>
                  <Col xs={12} md={8}>
            <Card.Img variant="top" src={producto.imagen} height="500px" />
            </Col>
            <Col xs={6} md={4}>
            <ListGroup.Item className="p-1">          
                <Card.Header as="h6" className="p-2">
                    {producto.title}
                </Card.Header> 
                <Card.Text>
                    Categoria: {producto.categoria}
                </Card.Text>     
                <Card.Text>
                    Stock: {producto.stock}
                </Card.Text>    
                <Card.Text>
                    Precio de: ${producto.price}
                </Card.Text>
              <ItemCount id={producto.id} stock={producto.stock} inicial={1} count={true} productoTitulo={producto.title} productoPrecio={producto.price}/>         
            </ListGroup.Item> 
            </Col>
          </Row>
 
          <Row>
            <Col xs={12} md={8}> 
            <ListGroup.Item className="p-2">     
             <Card.Title> Caracteristicas Principales</Card.Title>
            {/*producto.attributes.map(atributo => {
                        return(  
                          <Row key={atributo.id}> 
                            <Col> 
                                <Card.Text>
                                  {atributo.name}  
                                </Card.Text>                                      
                            </Col>
                            <Col>                        
                                <Card.Text>
                                   {atributo.value_name}
                                </Card.Text>                         
                            </Col>
                          </Row> 
                                )})
                        */}
            </ListGroup.Item>
            </Col>
            <Col xs={12} md={4}>
            <ListGroup.Item>
            <Card.Title>Informaci??n del Vendedor</Card.Title>
            <Card.Text>
                    Vendedor: 
                </Card.Text>
                <Card.Text>
                    Reputaci??n: 
                </Card.Text>      
            </ListGroup.Item>
            </Col>          
          </Row>       
        </Container>       
    )
}

export default ItemDetail
