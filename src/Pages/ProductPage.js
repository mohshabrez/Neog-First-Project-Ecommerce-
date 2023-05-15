import { UseCommerce, UseDispatch } from "../Context/CommerceContext";
import { ProductNavBar } from "./ProductNavBar";
import {ACTIONS} from "../Reducer/CommerceReducer"
import { useData } from "../Components/APIcontext";



export function ProductPage(){
    // const {categories, products} = useData()
    const { products,toSort, inStock, DeliveryTime} = UseCommerce()
    const {dispatch} = UseDispatch()


    let filteredData = products

    if(inStock){
        filteredData = products.filter((product) => product.inStock)
    }

    if(DeliveryTime){
        filteredData = products.filter((product) => product.deliveryTime)
    }
    
    const highPrice = (e) => {
        if(e.target.checked){
            dispatch({
                type: ACTIONS.SORTHIGH,
                payLoad:"high-to-low"
            })
        }else{
            dispatch({
                type: ACTIONS.RESET,
                payLoad:ACTIONS.HIGHCHANGE
            })
           

        }
    }

    const lowPrice = (e) => {
        if(e.target.checked){
            dispatch({
                type: ACTIONS.SORTLESS,
                payLoad: "low-to-high"
            })
        }
        else{
            dispatch({
                type:ACTIONS.RESET,
                payLoad:ACTIONS.LOWCHANGE
            })
        }
    }

    const handlePrice = (e) => {
        dispatch({
            type: ACTIONS.PRICE,
            payLoad: e.target.value
        })
    }

    const AvailableStock = (e) =>{
        if(e.target.checked){
            dispatch({
                type: ACTIONS.INSTOCK
            })
        }
        else{
            dispatch({
                type:ACTIONS.RESET,
                payLoad: ACTIONS.INSTOCK
            })
        }
    }

    const handleDelivery = (e) => {
        if(e.target.value){
            dispatch({
                type: ACTIONS.DELIVERYTIME
            })
        }else{
            dispatch({
                type:ACTIONS.RESET,
                payLoad: ACTIONS.DELIVERYTIME
            })
        }
    }

    const bestSellers = (e) => {
        if(e.target.value){
            dispatch({
                type:ACTIONS.BESTSELLERS,
                payLoad: "Best Sellers"
            })
        }
        else{
            dispatch({
                type:ACTIONS.RESET,
                payLoad: ACTIONS.BESTSELLERS
            })
        }
    }

    const brandedProducts = (e) => {
        if(e.target.value){
            dispatch({
                type:ACTIONS.BRANDED,
                payLoad:" Branded Products"
            })
        }else{
            dispatch({
                type:ACTIONS.RESET,
                payLoad: ACTIONS.BRANDED
            })
        }
    }

    const personalizedDesigns = (e) => {
        if(e.target.value){
            dispatch({
                type: ACTIONS.DESIGNS,
                payLoad:" Personalized designs"
            })
        }
        else{
            dispatch({
                type:ACTIONS.RESET,
                payLoad: ACTIONS.DESIGNS
            })
        }
    }


    return(
        <div className="productPage">
        <ProductNavBar/>
        <div className="productsSection">
            <img src="https://wildcraft.com/media/catalog/category/MEN_S-RAIN-JACKET_DESKTOP.jpg" alt="productPageImage"/>
        </div>
        <div className="FiltersSection" style={{backgroundColor:"white"}}>
            <form className="formData">
                <h3 style={{textDecoration:"underline"}}>Filters</h3>
                <button>Clear</button>
                <h3>Sort price</h3>
                <ul>
                    <li>
                        <label htmlFor="HighToLow">
                            <input type="radio" onClick={highPrice} checked={toSort==="high-to-low"} /> High To Low
                         </label>
                    </li>
                    <li>
                        <label htmlFor="LowToHigh">
                             <input type="radio" onClick={lowPrice} checked={toSort==="low-to-high"}/> Low To High
                        </label>
                    </li>
                </ul>
                <h3>Price Range</h3>
                <label>300
                    <input type="range" list="tickmark" min="300" max="3100" step="200" defaultValue="300" onChange={handlePrice}/>
                </label>3100
                <datalist id="tickmark">
                    <option value="300" label="50" />
                    <option value="500" />
                    <option value="700" />
                    <option value="900" />
                    <option value="1100" />
                    <option value="1300" />
                    <option value="1500" />
                    <option value="1700" />
                    <option value="1900" />
                    <option value="2100" />
                    <option value="2300" />
                    <option value="2500" />
                    <option value="2700" />
                    <option value="2900" />
                    <option value="3100" />
                </datalist>
                <h3>Availablity</h3>
                <ul>
                    <li>
                        <label>
                            <input type="checkbox" onChange={AvailableStock}/>Exclude Out of stock
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" onChange={handleDelivery}/>Fast delivery
                        </label>
                    </li>
                </ul>
                <h3>Categories</h3>
                <ul>
                    <li>
                        <label>
                            <input type="checkbox" onChange={bestSellers}/>Best Sellers
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" onChange={brandedProducts} />Branded Products
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" onChange={personalizedDesigns}/> Personalized designs
                        </label>
                    </li>
                </ul>
            </form>
            <div className="ProductListing">
                <h1>Product Cart</h1>
                <ul>
                    <div className="ULProducts">
                    {filteredData.map((product) => {
                        return(
                            <li key={product?._id}>
                                <div className="productCard">
                                    <img src={product?.image} alt="ProductsImages"/>
                                    <div className="productDetails">
                                        <p style={{marginBottom:"-5px", color:"#778899", }}>Brand - {product?.brand}</p>
                                        <h4 style={{fontSize:"larger"}}>{product?.name}</h4>
                                        <p style={{fontStyle:"italic", fontWeight:"bold", marginTop:"-10px"}}>${product?.price}</p>
                                        <p className="material-symbols-outlined">favorite</p>
                                        <button className="buynow">Buy Now</button>
                                        <div className="stocks">
                                             <p style={{color: `${product?.inStock ? "#32cd32": "red"}`}}>{product?.inStock ? "InStock" : "Out Of Stock"}</p>
                                             <p  style={{color: `${product?.deliveryTime ? "red": ""}`, marginTop:"-10px"}}>{product?.deliveryTime ? "Fast Delivery" : ""}</p>
                                        </div>
                                    </div>
                                   
                                </div>
                            </li>
                        )
                    })}
                    </div>
                </ul>
            </div>
        </div>
        </div>
    )
}