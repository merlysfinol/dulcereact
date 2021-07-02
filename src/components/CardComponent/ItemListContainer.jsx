import {React, useState, useEffect} from "react"
import { Row } from "react-bootstrap"
import Cards from "./Cards"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

function ItemListContainer() {
    const [listadoProductos, setListadoProductos] = useState([])

    useEffect(() => {
       
        async function obtengoProductos() {

            const respuesta = await fetch("https://api.mercadolibre.com/sites/MLA/search?limit=20&q=arreglos")
            const datos = await respuesta.json()
            setListadoProductos(datos.results)
            console.log(datos.results)
            }           
            obtengoProductos()       
        }, [])

    return (
        <Container fluid>
        <Row className="justify-content-center">
        {listadoProductos.map(producto => {
            return(     
            
                <Col className="col-auto">
                    <Cards key={producto.id} imagen={producto.thumbnail} titulo={producto.title} precio={producto.price} stock={producto.available_quantity} inicial={1}/>
                </Col>        
           
        )
        })
}
        </Row>
        </Container>   
  
    ) 
}

export default ItemListContainer