import React, { useContext } from 'react'
import { Modal, Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ShopContext } from '../../context/ShopContext'

function Cart() { 
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
              <td><span ></span>{articulo.cantidad}<span onClick={() => CONTEXT.agregaProd(articulo.id, articulo.nombre, 1, articulo.precio)}> +</span></td>
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

  return articulos    

}

export default Cart
