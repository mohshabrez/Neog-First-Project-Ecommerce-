// import {categories} from "../backend/db/categories";
// import {products} from "../backend/db/products"

import {UseCommerce} from "../Context/CommerceContext";


export const initialState = {
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


export const ACTIONS = {
    SORTHIGH: "sorthigh",
    SORTLESS:"sortless",
    HIGHCHANGE:"highChange",
    LOWCHANGE:"lowChange",
    RESET:"reset",
    PRICE:"price",
    INSTOCK:"instock",
    DELIVERYTIME:"deliveryTime",
    BESTSELLERS:"bestSellers",
    OLDDATA: "oldData",
    BRANDED: "brandedProducts",
    DESIGNS:"personalizedDesigns",
    SEARCH:"searchBar"
}

export function commerceReducer(state, action){
    console.log(state)
    switch(action.type){
        case ACTIONS.SORTHIGH:{    
            const filteredData = state.ProductsData.sort((a,b) => b.price - a.price)
            return {...state, toSort: action.payLoad,  ProductsData: [...filteredData] }
        }
        case ACTIONS.SORTLESS:{
            const filteredData = state.ProductsData.sort((a,b) => a.price - b.price)
            return {...state, toSort: action.payLoad,  ProductsData: [...filteredData]}
        }
        case ACTIONS.RESET:{
            return {...state,ProductsData: state.ProductsData ,[action.payLoad]: false}
        }
        case ACTIONS.PRICE:{
            const filteredData = state.ProductsData.filter((product) => product.price <= action.payLoad)
            return {...state, ProductsData:[...filteredData] }
        }
        case ACTIONS.INSTOCK:{
            return {...state, inStock: !state.inStock}
        }
        case ACTIONS.DELIVERYTIME:{
            return {...state, DeliveryTime: !state.DeliveryTime}
        }
        case ACTIONS.BESTSELLERS:{
            if(!state.bestSellers){
                const filteredData = state.ProductsData.filter((product) => product.categoryName === action.payLoad)
                return {...state, bestSellers: !state.bestSellers, ProductsData:[...filteredData]}
            }else{
                return{...state, ProductsData: [...state.oldData],bestSellers: !state.bestSellers}
            }
        }
        case ACTIONS.BRANDED:{
            if(!state.brandedProducts){
                const filteredData = state.ProductsData.filter((product) => product.categoryName === action.payLoad)
                return {...state, brandedProducts:!state.brandedProducts, ProductsData:[...filteredData]}
            }
            else{
                return {...state, ProductsData:[...state.oldData], brandedProducts:!state.brandedProducts}
            }
        }
        case ACTIONS.DESIGNS:{
            if(!state.personalizedDesigns){
                const filteredData = state.ProductsData.filter((product) => product.categoryName === action.payLoad)
                return{...state, personalizedDesigns:!state.personalizedDesigns, ProductsData:[...filteredData]}
            }
            else{
                return{...state,ProductsData:[...state.oldData], personalizedDesigns:!state.personalizedDesigns}
            }
        }
        case ACTIONS.SEARCH:{
            const filteredData = state.ProductsData.filter((product) => product.name.toLowerCase().includes(action.payLoad.toLowerCase()))         
            console.log(filteredData)
            return{...state, ProductsData:[...filteredData]}
        }
        default: {
            throw new Error("Unknown action " + action.type);
          }

    }
}