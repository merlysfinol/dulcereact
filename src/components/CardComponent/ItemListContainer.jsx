import {React, useEffect} from "react"
import Cards from "./Cards"
import imagen from '../../img/arreglo1.jpg'

function ItemListContainer() {

    useEffect(() => {
       
        return () => {
           
        }
    }, [])

    return (
    <div className="container mt-4">
       <Cards imagen={imagen} titulo={"Arreglo1"} descripcion={"Texto Descripción"} precio={"15000"} stock={"5"} inicial={"1"}/>
    </div>
    ) 
}

export default ItemListContainer