import { createContext, useState, useEffect } from "react"
import { getFirestore } from "../firebase"
const ShopContext = createContext()

function ShopProvider({children})  {
    const cat = JSON.parse(localStorage.getItem('userCart'))  
    const localStore = cat ? cat : []
    const [cart, setCart] = useState(localStore)
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState()
    const [fireItems, setFireItems] = useState([])
    const [pvGenerado, setPvGenerado] = useState([])
    //const [obtenerPedido, setObtenerPedido] = useState([])
  
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
    
    const eliminaTodo = () => {
        setCart([])
        setCantidad(0)
    }

    const totales = () => {
        
        var totalPrecio = 0
        const sumaPrecios = cart.map ( precioUni => precioUni.precio * precioUni.cantidad)
        sumaPrecios.map( precio => totalPrecio = totalPrecio + precio )
        setTotal(totalPrecio)
        const cantidadTotal = cart.map( actual => actual.cantidad)
        const cantidadTotalFinal = cantidadTotal.reduce((prev, actual) => prev + actual, 0)
        setCantidad(cantidadTotalFinal)
    }    
    
    const subirPedido = async (pedido) => {
        const DB = getFirestore()
        const PEDIDO = DB.collection('pedidos')
        const pedidoSubido = await PEDIDO.add(pedido)
        setPvGenerado(pedidoSubido)                 
    }
   
    const obtenerFecha = (separador) => {

        let nuevafecha = new Date()
        let dia = nuevafecha.getDate();
        let mes = nuevafecha.getMonth() + 1;
        let ano = nuevafecha.getFullYear();
        let hora = nuevafecha.getHours()
        let min = nuevafecha.getMinutes()
        
        return `${dia}${separador}${mes<10?`0${mes}`:`${mes}`}${separador}${ano} ${hora}:${min}`
    }

   
    const getPedido = async (campo, valor) => {
        if (valor){

            const DB = getFirestore()
            const PEDIDOS = DB.collection('pedidos').where(campo,'==',valor)
            const response = await PEDIDOS.get()
            return response
        }
                  
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

    useEffect(() => {      
        
        localStorage.setItem( 'userCart' , JSON.stringify(cart))
        totales()
    })

    

    return <ShopContext.Provider value={{ cart, cantidad, total, fireItems, pvGenerado, getPedido, obtenerFecha, subirPedido, agregaProd, eliminaProd, eliminaTodo }}>
        {children}
    </ShopContext.Provider>
}

export {ShopProvider, ShopContext}