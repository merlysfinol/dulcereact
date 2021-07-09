import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartWidget() {
   
        const [show, setShow] = useState(false);      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

    return(
          <>
          <Navbar.Brand onClick={handleShow}><FontAwesomeIcon icon={['fa', 'shopping-cart']}  size="lg"/></Navbar.Brand>
          <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Carrito de Compras</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    No hay elementos
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Cerrar
                    </Button>
                    <Button variant="primary">Pagar</Button>
                  </Modal.Footer>
          </Modal>
          </>
            )
    }

export default CartWidget