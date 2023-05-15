import React from "react"
import { createContext, useContext, useReducer
 } from "react";
import { commerceReducer, initialState
 } from "../Reducer/CommerceReducer";
import { useData} from "../Components/APIcontext";

 const CommerceContext = createContext(null)
 const dispatchContext = createContext(null)



export function CommerceProvider({children}){
    const {categories, products} = useData() 
    const [state, dispatch] = useReducer(commerceReducer, {
        commerceCategoryData: categories,
        ProductsData: products,
        toSort: null,
        inStock:false,
        DeliveryTime: false,
        bestSellers: false,
        oldData: [],
        brandedProducts: false,
        personalizedDesigns: false
    })
    return(
        <CommerceContext.Provider value={{state, categories, products}} >
            <dispatchContext.Provider value={{dispatch}}>
                {children}
            </dispatchContext.Provider>
        </CommerceContext.Provider>
    )
}

export const UseCommerce = () => useContext(CommerceContext);
export const UseDispatch = () => useContext(dispatchContext)