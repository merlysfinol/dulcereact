import React from 'react'
import nosotros from '../../img/nosotros.png'
import Card from 'react-bootstrap/Card'

function SomosContainer() {
    return (
        <Card className="bg-white text-black">
        <Card.Img variant="top" src={nosotros} alt="Card image" />
        <Card.Body>
            <Card.Text as="h4">
            Nuestra historia comenzó cuando decidimos emigrar a Chile, un hermoso país que nos recibió con los brazos abiertos, 
            queríamos hacer algo único y poco común, de ahi nacio la idea de Dulce Fusion, donde podiamos ofrecer Ramos de Chocolates, 
            con el tiempo fuimos agregando nuevos productos los cuales promocionamos por nuestras redes sociales, 
            los comentarios que recibimos fueron muy positivos y gracias a los conocimientos que tenemos en diseño creamos dulcefusion.chile, 
            hoy en dia nos sentimos muy orgullosos de poder ofrecer para todo Santiago de manera profesional no solo Ramos de Chocolate, 
            si no también la gran variedad de regalos únicos, con los cuales hemos podido transmitir un sin fin de emociones y alegrías.
            </Card.Text>
            <Card.Text as="h4">
            Estamos obsesionados con los detalles,
            buscamos que todas las personas que reciben un producto de Dulce Fusion sea algo completamente único
            <p>Nuestra Misión: Regalar emociones a miles de personas con nuestros regalos</p>
            </Card.Text>
        </Card.Body>
        </Card>   
    )
}

export default SomosContainer
