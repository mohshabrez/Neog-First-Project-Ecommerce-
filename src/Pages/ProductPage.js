import { UseCommerce, UseDispatch } from "../Context/CommerceContext";
import { ProductNavBar } from "./ProductNavBar";
import {ACTIONS} from "../Reducer/CommerceReducer"
import { Link } from "react-router-dom";
import { products } from "../backend/db/products";

export function ProductPage(){
 
    const { state} = UseCommerce()
    const {dispatch} = UseDispatch()
    
    let filteredData = state.ProductsData

    if(state.inStock){
        filteredData = state.ProductsData.filter((product) => product.inStock)
    }

    if(state.DeliveryTime){
        filteredData = state.ProductsData.filter((product) => product.deliveryTime)
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

    const AtoCart = (product) => {
        dispatch({
            type:ACTIONS.ADDCART,
            payLoad: product
        })
    }

    // const AtoWish = (product) => {
    //     dispatch({
    //         type:ACTIONS.ADDWISH,
    //         payLoad: product
    //     })
    // }

    const favClick = (product) => {
        dispatch({
            type: ACTIONS.ADDWISH,
            payLoad: product
        })
        dispatch({
            type:ACTIONS.REMOVEFROMFAVWISH,
            payLoad: product
        })
    }

    return(
        <div className="productPage">
        <ProductNavBar/>
        <div className="productsSection">
            <img src="https://th.bing.com/th/id/R.8d20d92e2dd3397076f3a78e9071013d?rik=ZJxxw08aD3pANw&riu=http%3a%2f%2fnotsealed.com%2fwp-content%2fuploads%2f2018%2f04%2ftent-solar-light-696x224.jpg&ehk=14stv0e2wrjZwVUHFJLI%2blmq%2fl2IK0J1Qx%2bBsIsNFQE%3d&risl=&pid=ImgRaw&r=0" alt="productPageImage"/>
        </div>
        <div className="FiltersSection" style={{backgroundColor:"white"}}>
            <form className="formData">
                <h3 style={{textDecoration:"underline"}}>Filters</h3>
                <button>Clear</button>
                <h3>Sort price</h3>
                <ul>
                    <li>
                        <label htmlFor="HighToLow">
                            <input type="radio" onClick={highPrice} checked={state.toSort==="high-to-low"} /> High To Low
                         </label>
                    </li>
                    <li>
                        <label htmlFor="LowToHigh">
                             <input type="radio" onClick={lowPrice} checked={state.toSort==="low-to-high"}/> Low To High
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
                <ul>{filteredData.length > 0 ? (
                    <div className="ULProducts">
                    {filteredData.map((product) => {
                        return(
                            <li key={product?._id}>
                                <div className="productCard">
                                    <Link to={`/productDetails/${product?._id}`}>
                                    <img src={product?.image} alt="ProductsImages"/></Link>
                                    <div className="productDetails">
                                        <p style={{marginBottom:"-5px", color:"#778899", }}>Brand - {product?.brand}</p>
                                        <h4 style={{fontSize:"larger" ,marginBottom:"28px"}}>{product?.name}</h4>
                                        <p style={{fontStyle:"italic", fontWeight:"bold", marginTop:"-6px"}}>₹{product?.price}</p>
                                        <p style={{fontStyle:"italic", marginTop:"-27px", marginLeft:"47px",color:"grey", textDecoration:"line-through"}}>₹{product?.originalPrice}</p>
                                        <p className="material-symbols-outlined" onClick={()=>favClick(product)}><svg  xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill={product?.wish ? "rgb(246, 108, 3)" : "#C0C0C0"}  class="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                        </svg></p>
                                        {/* <Link to=""><p className="material-symbols-outlined" onClick={()=>favClick(product)} style={{backgroundColor: product?.wish ? "#6a5acd": "", borderRadius:"50px"}}>favorite</p></Link> */}
                                        <button className="AtoCart" onClick={()=>AtoCart(product)} style={{backgroundColor:!product.inStock ? "rgb(203, 164, 133)": "rgb(246, 108, 3)" }} disabled={!product.inStock}>Add to Cart</button>
                                        {/* <button className="Atowish" onClick={()=>AtoWish(product)}>Add to Wishlist</button> */}
                                        
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
                    ): <h1 style={{marginTop:"200px"}}>No Such Products with this filter 🤯🤯</h1>}
                </ul>
            </div>
        </div>
        </div>
    )
}