import React, { useContext, useState } from 'react'
import { Button, Container, Row, Col, Form, Modal, Table } from 'react-bootstrap';
import { ShopContext } from '../../context/ShopContext'
import { Link } from 'react-router-dom'

function Cart() { 
    const CONTEXT = useContext(ShopContext)
    const [form, setForm] = useState({nombre:'', email:'', telefono:'', direccion:''})
    const [email2, setEmail2] = useState('')

    const verifEmailyCant = () => {

    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (emailRegex.test(form.email)) {

      if (CONTEXT.total===0 || email2 !== form.email){return true}else{return false}

    } 

     return true  

    }
       
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
              <Form.Group className="mb-3" controlId="formBasicNombre" onInput={(event) => {
                setForm({...form, nombre : event.target.value})
              }}>
                  <Form.Label>Nombre y Apellido</Form.Label>
                  <Form.Control type="text" placeholder="Nombre y Apellido" />
                  <Form.Text className="text-muted">
                    Coloca tu Nombre y Apellido
                  </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail" onInput={(event) => {
                setForm({...form, email : event.target.value})
              }}>
                  <Form.Label>Direcci??n Email</Form.Label>
                  <Form.Control type="email" placeholder="Coloca email" />
                  <Form.Text className="text-muted">
                   Nunca compartiremos tu Email con nadie
                  </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDireccion" onInput={(event) => {
                 setEmail2(event.target.value)
              }}>
                 <Form.Label>Repite Email</Form.Label>
                  <Form.Control type="email" placeholder="Emails deben coincidir" />                  
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDireccion" onInput={(event) => {
                 setForm({...form, direccion : event.target.value})
              }}>
                  <Form.Label>Direcci??n</Form.Label>
                  <Form.Control type="text" placeholder="Coloca Direcci??n" />
                  <Form.Text className="text-muted">
                    Coloca tu Direcci??n
                  </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicTelefono" onInput={(event) => {              
                setForm({...form, telefono : event.target.value})          
               
              }} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
                  <Form.Label>Tel??fono</Form.Label>
                  <Form.Control type="tel" placeholder="Coloca Tel??fono" />
                  <Form.Text className="text-muted">
                  Nunca compartiremos tu Tel??fono con nadie
                  </Form.Text>
              </Form.Group>

              </Form>
              </Col>
              <Col sm={8}> {articulos}</Col>
            </Row> 
            <Link to={"/pedido"}>
            <Button bb={5} variant="primary" disabled={verifEmailyCant()} onClick={() => {
              const pedido = { buyer: { ...form}, items: CONTEXT.cart, total: CONTEXT.total, fecha:CONTEXT.obtenerFecha('/')}
              //console.log(pedido)
              CONTEXT.subirPedido(pedido)
              localStorage.removeItem('userCart');
              //CONTEXT.eliminaTodo()            
            }}>Crear Pedido
            </Button></Link> 
            <p></p>
        </Container>
}

export default Cart
