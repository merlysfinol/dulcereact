import {React, useEffect, useState} from "react"
import { Card, Row, Col, Container, ListGroup } from "react-bootstrap"
import ItemCount from "./ItemCount"
import { useParams } from 'react-router-dom'

function ItemDetail() {
  const [producto, setProducto] = useState([])
  const [vendedor, setVendedor] = useState([])
  const {id} = useParams()  
 
  useEffect(() => {   
      
      const item = "https://api.mercadolibre.com/items/"+id  
      const seller = producto.seller_id ?  "https://api.mercadolibre.com/users/"+producto.seller_id:null

      async function obtengoProducto() {
        const respuesta = await fetch(item)
        const datos = await respuesta.json()
        setProducto(datos) 
      
            async function obtengoSeller() {
              const respuesta2 = await fetch(seller)
              const datos2 = await respuesta2.json()
              setVendedor(datos2)          
            }    
            seller ? obtengoSeller():console.log("No hay vendedor")
    }  
      obtengoProducto() 
               
   }, [id, producto.seller_id])

   if (producto.attributes && vendedor.seller_reputation){

    return (
        <Container  className="p-4">           
         
              <Row>
                  <Col xs={12} md={8}>
            <Card.Img variant="top" src={producto.thumbnail} height="500px" />
            </Col>
            <Col xs={6} md={4}>
            <ListGroup.Item className="p-1">          
                <Card.Header as="h6" className="p-2">
                    {producto.title}
                </Card.Header> 
                <Card.Text>
                    Condición: {producto.condition}
                </Card.Text>     
                <Card.Text>
                    Garantía: {producto.sale_terms[0].value_name}
                </Card.Text>               
                            
                <Card.Text>
                    Precio de: ${producto.price}
                </Card.Text>
              <ItemCount stock={producto.available_quantity} inicial={1} />         
            </ListGroup.Item> 
            </Col>
          </Row>
 
          <Row>
            <Col xs={12} md={8}> 
            <ListGroup.Item className="p-2">     
             <Card.Title> Caracteristicas Principales</Card.Title>
            {producto.attributes.map(atributo => {
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
            }
            </ListGroup.Item>
            </Col>
            <Col xs={12} md={4}>
            <ListGroup.Item>
            <Card.Title>Información del Vendedor</Card.Title>
            <Card.Text>
                    Vendedor: {vendedor.nickname}
                </Card.Text>
                <Card.Text>
                    Reputación: {vendedor.seller_reputation.power_seller_status}
                </Card.Text>      
            </ListGroup.Item>
            </Col>          
          </Row>
          
       
        </Container>       
    )}else{
      return(
        <div className="loading show">
          <div className="spin"></div>
        </div>)
    }
}

export default ItemDetail
