import {React, useState, useEffect} from "react"
import { Row, Col, Container } from "react-bootstrap"
import Cards from "./Cards"
import { Link } from 'react-router-dom'

function ItemListContainer() {
    const [listadoProductos, setListadoProductos] = useState([])
       
    useEffect(() => {       
        async function obtengoProductos() {
            const respuesta = await fetch("https://api.mercadolibre.com/sites/MLA/search?limit=20&q=arreglos")
            const datos = await respuesta.json()
            setListadoProductos(datos.results)           
            }           
            obtengoProductos()       
        }, [])
         
    
    return (               
            <Container fluid className>
                <Row className="justify-content-center">
                    {listadoProductos.map(producto => {
                        return(    
                            <Col className="col-auto" key={producto.id}>
                                <Link to={"/item/"+producto.id } ><Cards  imagen={producto.thumbnail} titulo={producto.title} precio={producto.price} stock={producto.available_quantity} inicial={1}/></Link>
                            </Col> 
                                )})
                    }
                </Row>
            </Container>                   
            ) 
   
    
    

   
}

export default ItemListContainer