import React from "react"
import {useState, createContext, useEffect, useContext} from "react"
import axios from "axios"

export const getProducts = async () => {
    const res = await axios.get("/api/products");
    const products = await res.data.products;
    return products;
}

export const getCategories = async () => {
    const res = await axios.get("/api/categories");
    const categories = await res.data.categories;
    return categories;
}



const APIcontext = createContext(null)

export function APIprovider({children}){
    const[products, setProducts] = useState([])
    const[categories, setCategories] = useState([])

    const initialState = {
        commerceCategoryData: [],
        ProductsData: [],
        toSort: null,
        inStock:false,
        DeliveryTime: false,
        bestSellers: false,
        oldData: [],
        brandedProducts: false,
        personalizedDesigns: false
    
    }
    useEffect(() => {
        (async () => {
            try {
                setProducts(await getProducts())
            }

            catch (e) {
                console.error(e.message)
            }
        })();

        (async () => {
            try {
                setCategories(await getCategories())
            }

            catch (e) {
                console.error(e.message)
            }
        })();
    },[])

   

    return(
        <APIcontext.Provider value={{products,categories, initialState}}>
            {children}
        </APIcontext.Provider>
    )

}

export const useData = () => useContext(APIcontext)