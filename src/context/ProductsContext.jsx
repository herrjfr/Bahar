import { createContext, useState } from "react"
import data from "../assets/data/baharProdData.json"

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [wishlist, setWishlist] = useState([])

    const addCart = (id) => {
        setCart(arr => [...arr, { id: id, count: 1 }])
    }

    const removeCart = (id) => {
        setCart(arr => arr.filter(x => x.id != id))
    }

    const CountPlus = (id) => {
        setCart(arr => arr.map(element =>
            element.id == id
                ? { ...element, count: element.count + 1 }
                : element
        ))
    }

    const CountMinus = (id) => {
        setCart(arr => arr.map(element =>
            element.id == id
                ? { ...element, count: Math.max(1, element.count - 1) }
                : element
        ))
    }

    const addWishlist = (id) => {
        setWishlist(x => [...x, id])
    }

    const removeWishlist = (id) => {
        setWishlist(arr => arr.filter(x => x != id))
    }

    const [products, setProducts] = useState(data)

    const [topThree,setTopThree] = useState(2)

    return (
        <ProductsContext.Provider value={{
            products, setProducts,
            cart, wishlist,
            addCart, removeCart,
            CountPlus, CountMinus,
            addWishlist, removeWishlist
        }}>
            {children}
        </ProductsContext.Provider>
    )
}