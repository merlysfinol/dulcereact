import { createContext, useState, useEffect } from "react"

const ShopContext = createContext()

function ShopProvider({children})  {

    const [cart, setCart] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState()

    function agregaProd(id, producto, cantidad, precio ){
      
       const isInCart = cart.find(product => product.id === id) 
       const prods = cart.filter(product => product.id !== id)

       if (isInCart === undefined){
        
        const agregoProd = {id:id, nombre:producto, precio:precio, cantidad:cantidad}
        setCart([...cart, agregoProd])
       
       }else{
            isInCart['cantidad'] = isInCart['cantidad']+cantidad
            const agregoProd = {id:id, nombre:producto, precio:precio, cantidad:isInCart['cantidad']}           

       setCart([...prods, agregoProd])        
     
       }
    }

    const eliminaProd = (id) => {

        const nuevoCart = cart.filter(producto => producto.id !== id)
        setCart(nuevoCart)

    }
    
    function eliminaTodo(){
        setCart([])
        setCantidad(0)
    }

    function totales(){
        
        var totalPrecio = 0
       
        const sumaPrecios = cart.map ( precioUni => precioUni.precio * precioUni.cantidad)
        sumaPrecios.map( precio => totalPrecio = totalPrecio + precio )
        setTotal(totalPrecio)
        
        const cantidadTotal = cart.map( actual => actual.cantidad)
        
        setCantidad(cantidadTotal.reduce((prev, actual) => prev + actual, 0))
      
    }

   
    useEffect(() => {
        totales()
    })

    return <ShopContext.Provider value={{ cart, cantidad, total, agregaProd, eliminaProd, eliminaTodo }}>
        {children}
    </ShopContext.Provider>
}

export {ShopProvider, ShopContext}