import {React, useEffect, useState, useContext } from 'react'
import { Row, Col, Container } from "react-bootstrap"
import { useParams } from 'react-router-dom'
import Cards from "./Cards"
import { ShopContext } from '../../context/ShopContext'

function CategoryContainer() {    
    const [categoria, setCategoria] = useState([])
    const {cat} = useParams() 
    const CONTEXT = useContext(ShopContext)

    useEffect(() => {   
     
    const listadoProductos = CONTEXT.fireItems
      const filtradoCat = listadoProductos.filter(producto => producto.categoria === cat)
      setCategoria(filtradoCat)
      
        /*const item = "https://api.mercadolibre.com/sites/MLA/search?category="+id          
  
        async function obtengoCategoria() {
          const respuesta = await fetch(item)
          const datos = await respuesta.json()
          setCategoria(datos.results)  
      }  
        obtengoCategoria() */
                 
     }, [CONTEXT.fireItems, cat])

    return (
        <Container fluid className>
        <Row className="justify-content-center">
            {categoria.map(producto => {
                return(    
                    <Col className="col-auto card-min" key={producto.id}>
                        <Cards producto={producto.id} imagen={producto.imagen} titulo={producto.title} precio={producto.price} stock={producto.stock} inicial={1}/>
                    </Col> 
                        )})
            }
        </Row>
    </Container>                 
    )
}

export default CategoryContainer
