import {React, useState, useEffect, useContext} from "react"
import { Row, Col, Container } from "react-bootstrap"
import Cards from "./Cards"
import { ShopContext } from '../../context/ShopContext'

function ItemListContainer() {
    const [listadoProductos, setListadoProductos] = useState([])
    const CONTEXT = useContext(ShopContext)    

   useEffect(() => {    
    setListadoProductos(CONTEXT.fireItems)
    
    /*  async function obtengoProductos() {
            const respuesta = await fetch("https://api.mercadolibre.com/sites/MLA/search?limit=10&q=arreglos")
            const datos = await respuesta.json()
            setListadoProductos(datos.results)           
            }           
            obtengoProductos()     */  

        }, [CONTEXT.fireItems]) 
    
    return (               
            <Container fluid className>
                <Row className="justify-content-center">
                    {listadoProductos.map(producto => {
                       // const imagen = CONTEXT.obtenerURL(producto.imagen)
                        return(    
                            <Col className="col-auto card-min" key={producto.id}>
                                <Cards  producto={producto.id} imagen={producto.imagen} titulo={producto.title} precio={producto.price} stock={producto.stock} inicial={1}/>
                            </Col> 
                                )})
                    }
                </Row>
            </Container>                   
            ) 
   
}

export default ItemListContainer