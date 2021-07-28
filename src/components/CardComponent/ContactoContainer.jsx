import React from 'react'
import contacto from '../../img/contacto.png'
import {Card} from 'react-bootstrap'


function ContactoContainer() {
    return (
            <Card className="bg-white text-black">
            <Card.Img variant="top" src={contacto} alt="Card image" />
            <Card.Body>
                <Card.Text as="h4">
                
                </Card.Text>
                <Card.Text as="h4">
              
                </Card.Text>
            </Card.Body>
            </Card>  
    )
}

export default ContactoContainer
