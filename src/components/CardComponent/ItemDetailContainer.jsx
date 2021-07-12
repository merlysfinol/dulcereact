import {React, useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {

    const [producto, setProducto] = useState([])
    const [vendedor, setVendedor] = useState([])
    const {id} = useParams()  
   
    useEffect(() => {   
        
        const item = "https://api.mercadolibre.com/items/"+id  
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
        obtengoProducto() 
                 
     }, [id, producto.seller_id])
  
     
     if (producto.attributes && vendedor.seller_reputation){
    return (
        <>
            <ItemDetail producto={producto} vendedor={vendedor}/>
        </>
    )}else{
        return(
          <div className="loading show">
            <div className="spin"></div>
          </div>)
      }
}

export default ItemDetailContainer
