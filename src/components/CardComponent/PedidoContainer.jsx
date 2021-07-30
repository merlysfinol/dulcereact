import React, { useContext } from 'react'
import { Card, Table, Button } from "react-bootstrap"
import { ShopContext } from '../../context/ShopContext'
import { Link } from 'react-router-dom'

export const PedidoContainer = () => {

    const CONTEXT = useContext(ShopContext)

    return (
        <div>
           <Card
    bg={'info'}
    text={'white'}
    style={{ width: 'auto' }}
    className="text-center"
  >
    <Card.Header>Este es su Pedido</Card.Header>
    <Card.Body>
      <Card.Title>Su ID: {CONTEXT.pvGenerado.id}</Card.Title>
      <Card.Text>
        Sus articulos son:
      </Card.Text>
      <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>Cantidad</th>
              <th>Nombre</th>
              <th>Precio Unidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          {CONTEXT.cart.map(articulo =>             
          <tbody key={articulo.id}>
            <tr>
              <td><span ></span>{articulo.cantidad}{/*<span onClick={() => CONTEXT.agregaProd(articulo.id, articulo.nombre, 1, articulo.precio)}> +</span>*/}</td>
              <td>{articulo.nombre}</td>
              <td>{articulo.precio}</td>
              <td>{articulo.precio*articulo.cantidad}</td>             
            </tr>          
          </tbody>  )}
          <tbody>
            <tr>
            <td>Total:</td>
                  <td>{CONTEXT.cantidad} articulos</td>
                  <td></td>
                  <td>{CONTEXT.total}</td>                
            </tr> 
        <td></td>         
        <td></td>         
        <td></td>         
          <td>
          <Link to="/"><Button onClick={() => CONTEXT.eliminaTodo()}>Finalizar</Button></Link>
         </td> 
        </tbody>
        </Table>
    </Card.Body>
  </Card>
        </div>
    )
}
