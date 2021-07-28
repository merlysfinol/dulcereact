import { createContext, useState, useEffect } from "react"
import { getFirestore } from "../firebase"
const ShopContext = createContext()

function ShopProvider({children})  {

    const [cart, setCart] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState()
    const [fireItems, setFireItems] = useState([])
  
    const agregaProd = (id, producto, cantidad, precio ) => {
        
            const isInCart =cart.find(product => product.id === id) 
            const prods = cart.filter(product => product.id !== id)
                if (isInCart === undefined){                   
                setCart([...cart, {id:id, nombre:producto, precio:precio, cantidad:cantidad}])
                }else{     
                setCart([...prods, {id:id, nombre:producto, precio:precio, cantidad:isInCart['cantidad']+cantidad}]) 
                }  
          totales()
    }

    const eliminaProd = (id) => {

        const nuevoCart = cart.filter(producto => producto.id !== id)
        setCart(nuevoCart)
        totales()
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
        const cantidadTotalFinal = cantidadTotal.reduce((prev, actual) => prev + actual, 0)
        setCantidad(cantidadTotalFinal)
    }    
       
    useEffect(() => {
    const getProductos = async () => {
                const DB = getFirestore()
                const PRODUCTOS = DB.collection('productos')
                const response = await PRODUCTOS.get()           
                setFireItems(
                    response.docs.map(producto => {
                    return {id:producto.id, ...producto.data()}
                }))            
        }
       getProductos()
    }, [])

    useEffect(() => {totales()})

    return <ShopContext.Provider value={{ cart, cantidad, total, fireItems,  agregaProd, eliminaProd, eliminaTodo }}>
        {children}
    </ShopContext.Provider>
}

export {ShopProvider, ShopContext}