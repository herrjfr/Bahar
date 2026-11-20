import { createContext, useState } from "react"
import data from "../assets/data/baharProdData.json"

export const ProductsContext = createContext();

export const ProductsProvider = ({children})=>{

    const [cart,setCart] = useState([])
    const [wishlist,setWishlist] = useState([])

    const addCart = (id)=>{
        setCart(arr=>[...arr,id])
    }
    const removeCart = (id)=>{
        setCart(arr=>arr.filter(x=>x!=id))
    }

    const addWishlist = (id)=>{
        setWishlist(x=>[...x,id])
    }
    const removeWishlist = (id)=>{
        setWishlist(arr=>arr.filter(x=>x!=id))
    }

    const [products,setProducts] = useState(data)
    return (
        <ProductsContext.Provider value={{
            products,setProducts,
            cart,wishlist,
            addCart,removeCart,
            addWishlist,removeWishlist,           
            }}>
            {children}
        </ProductsContext.Provider>
    )
}