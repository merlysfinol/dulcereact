import {React, useEffect, useState, useContext} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

function ItemDetailContainer() {

  const CONTEXT = useContext(ShopContext)

    const [producto, setProducto] = useState([])
    //const [vendedor, setVendedor] = useState([])
    const {id} = useParams()  
   
    useEffect(() => {      


      const listadoProductos = CONTEXT.fireItems
      const unProducto = listadoProductos.filter(producto => producto.id === id)
      
      setProducto(unProducto) 
        
        /*const item = "https://api.mercadolibre.com/items/"+id  
        const seller = producto.seller_id ?  "https://api.mercadolibre.com/users/"+producto.seller_id:null
  
        async function obtengoProducto() {
          const respuesta = await fetch(item)
          const datos = await respuesta.json()
          setProducto(datos) 
        
              async function obtengoSeller() {
                const respuesta2 = await fetch(seller)
                const datos2 = await respuesta2.json()
                setVendedor(datos2)          
              }    
              seller ? obtengoSeller():console.log("No hay vendedor")
      }  
        obtengoProducto() */
                 
     }, [CONTEXT.fireItems, id])
  
     if (producto[0]){
    return (
        <>
            <ItemDetail producto={producto[0]} />
        </>
    )}else{
        return(
          <div>
            <br></br>
            <div>Producto No Existe</div>
            <br></br>
          </div>)
      }
}

export default ItemDetailContainer
