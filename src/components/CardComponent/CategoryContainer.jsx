import {React, useEffect, useState } from 'react'
import { Row, Col, Container } from "react-bootstrap"
import { useParams, Link } from 'react-router-dom'
import Cards from "./Cards"

function CategoryContainer() {
    const [categoria, setCategoria] = useState([])
    const {id} = useParams() 

    useEffect(() => {   
        
        const item = "https://api.mercadolibre.com/sites/MLA/search?category="+id          
  
        async function obtengoCategoria() {
          const respuesta = await fetch(item)
          const datos = await respuesta.json()
          setCategoria(datos.results)  
      }  
        obtengoCategoria() 
                 
     }, [id])
  

    return (
        <Container fluid className>
        <Row className="justify-content-center">
            {categoria.map(producto => {
                return(    
                    <Col className="col-auto card-min" key={producto.id}>
                        <Link to={"/item/"+producto.id } ><Cards imagen={producto.thumbnail} titulo={producto.title} precio={producto.price} stock={producto.available_quantity} inicial={1}/></Link>
                    </Col> 
                        )})
            }
        </Row>
    </Container>                 
    )
}

export default CategoryContainer
