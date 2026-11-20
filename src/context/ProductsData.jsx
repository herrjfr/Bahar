import { createContext, useContext } from "react";
import data from "../assets/data/baharProdData.json"

const ProductsContext = createContext(null);

export function ProductsProvider({ children }) {
  return (
    <ProductsContext.Provider value={{ products: data }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsContext);
}