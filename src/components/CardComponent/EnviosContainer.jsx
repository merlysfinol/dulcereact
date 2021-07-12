import React from 'react'
import repartos from '../../img/repartos.png'
import {Card, Table} from 'react-bootstrap'

function EnviosContainer() {
    return (
        <>
        <Card className="bg-white text-black">
        <Card.Img variant="top" src={repartos} alt="Repartos y Envios" />
        <Card.Body>
            <Card.Title>Tabla De Precios Y Zonas De Envios</Card.Title>
            <Card.Text>
                <Table striped bordered hover variant="dark">
                <thead>
                    <tr>                  
                    <th>3000</th>
                    <th>3500</th>
                    <th>4000</th>
                    <th>4500</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Independencia</td>
                    <td>Ñuñoa</td>
                    <td>San Bernardo</td>
                    <td>Lampa</td>
                    </tr>
                    <tr>
                    <td>Quilicura</td>
                    <td>San Miguel</td>
                    <td>Pudahuel</td>
                    <td>Peñalolen</td>
                    </tr>
                    <tr>
                    <td>Conchali</td>
                    <td>Santiago</td>
                    <td>Maipu</td>
                    <td>Lo Espejo</td>
                    </tr>
                    <tr>
                    <td>Renca</td>
                    <td>Macul</td>
                    <td>La Florida</td>
                    <td>La Pintana</td>
                    </tr>
                    <tr>
                    <td>Recoleta</td>
                    <td>Vitacura</td>
                    <td>Cerrilos</td>
                    <td>La Cisterna</td>
                    </tr>
                    <tr>
                    <td>Estación Central</td>
                    <td>Huechuraba</td>
                    <td>La Reina</td>
                    <td>Lo Barnechea</td>
                    </tr>
                    <tr>
                    <td>Quinta Normal</td>
                    <td>Cerro Navia</td>
                    <td>Las Condes</td>
                    <td>El Bosque</td>
                    </tr>
                </tbody>
                </Table>
            </Card.Text>
            <Card bg="warning" >
            NOTA IMPORTANTE: Hacemos envíos de 10am a 6pm sin hora especifica de entrega
            </Card>
        </Card.Body>
        </Card>       
        </> 
    ) 
       
}

export default EnviosContainer
