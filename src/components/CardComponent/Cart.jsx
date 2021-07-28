import React, { useContext } from 'react'
import { Modal, Table } from 'react-bootstrap';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { ShopContext } from '../../context/ShopContext'

function Cart() { 
    const CONTEXT = useContext(ShopContext)
      
    const articulos = CONTEXT.cantidad ? 
    <Modal.Body>
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>Cantidad</th>
              <th>Nombre</th>
              <th>Precio Unidad</th>
              <th>Precio</th>
              <th>Borrar</th>
            </tr>
          </thead>
          {CONTEXT.cart.map(articulo =>             
          <tbody key={articulo.id}>
            <tr>
              <td><span ></span>{articulo.cantidad}{/*<span onClick={() => CONTEXT.agregaProd(articulo.id, articulo.nombre, 1, articulo.precio)}> +</span>*/}</td>
              <td>{articulo.nombre}</td>
              <td>{articulo.precio}</td>
              <td>{articulo.precio*articulo.cantidad}</td>
              <td><Button onClick={() => CONTEXT.eliminaProd(articulo.id)}>Eliminar</Button></td>
            </tr>          
          </tbody>  )}
          <tbody>
            <tr>
            <td>Total:</td>
                  <td>{CONTEXT.cantidad} articulos</td>
                  <td></td>
                  <td>{CONTEXT.total}</td>
                  <td></td>
            </tr>          
          </tbody>
          <tbody>
                <tr>
                  <td></td>
                  <td colSpan="3"><Button variant="danger" onClick={() => CONTEXT.eliminaTodo()}>Eliminar Todo</Button></td>
                  
                  <td></td>
                </tr>
              
              </tbody>
        </Table>
  </Modal.Body> 
    : <Modal.Body>
    No hay elementos
  </Modal.Body> 

  return <Container>
            <Row>
              <Col sm={4}>
              <Form>
              <Form.Group className="mb-3" controlId="formBasicNombre">
                  <Form.Label>Nombre y Apellido</Form.Label>
                  <Form.Control type="text" placeholder="Nombre y Apellido" />
                  <Form.Text className="text-muted">
                    Coloca tu Nombre y Apellido
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Dirección Email</Form.Label>
                  <Form.Control type="email" placeholder="Coloca email" />
                  <Form.Text className="text-muted">
                   Nunca compartiremos tu Email con nadie
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDireccion">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control type="text" placeholder="Coloca Dirección" />
                  <Form.Text className="text-muted">
                    Coloca tu Dirección
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicTelefono">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control type="tel" placeholder="Coloca Teléfono" />
                  <Form.Text className="text-muted">
                  Nunca compartiremos tu Teléfono con nadie
                  </Form.Text>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
               
              </Form>
              </Col>
              <Col sm={8}> {articulos}</Col>
            </Row>  
            <Button bb={5} variant="primary" type="submit">
                  Crear Pedido
                </Button>
                <p></p>
        </Container>
 

}

export default Cart
