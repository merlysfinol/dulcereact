import React from "react"
import Cards from "./Cards"

function ItemListContainer({imagen, titulo, descripcion, precio}) {
    return (
    <div className="container mt-4">
       <Cards imagen={imagen} titulo={titulo} descripcion={descripcion} precio={precio}/>
    </div>
    ) 
}

export default ItemListContainer