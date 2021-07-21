import React, { useState, useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Modal, Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShopContext } from '../../context/ShopContext'
import { Link } from 'react-router-dom'

function CartWidget() {
   
        const [show, setShow] = useState(false);      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const CONTEXT = useContext(ShopContext)
      
        const articulos = CONTEXT.cantidad ? 
        <Modal.Body>
            <Table striped bordered hover variant="dark">
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
                  <td>{articulo.cantidad}</td>
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
        :  <Modal.Body>
        No hay elementos
      </Modal.Body> 
        
    return(
          <>
          <Navbar.Brand onClick={handleShow}><FontAwesomeIcon icon={['fa', 'shopping-cart']}  size="lg"/><span className='badge badge-warning' id='lblCartCount'>{CONTEXT.cantidad}</span></Navbar.Brand>
          <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Carrito de Compras</Modal.Title>
                  </Modal.Header>
                 

                  {articulos}

                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Cerrar
                    </Button>
                    <Button variant="success" onClick={handleClose}><Link to={"/cart"}>Pagar</Link></Button>
                  </Modal.Footer>
          </Modal>
          </>
            )
    }

export default CartWidget