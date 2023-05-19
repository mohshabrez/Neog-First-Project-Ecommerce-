import { ProductNavBar } from "./ProductNavBar";

export function ProductCard({_id, name, star, brand, price, originalPrice,percentage, inStock, image, categoryName, deliveryTime}){
    return(
        <>
        <ProductNavBar/>
        <div className="ProductDetailed">
            <div className="productimg">
                <img src={image} alt="productImage"/>
            </div>
            <div className="details">
                <h1 style={{fontSize:"270%"}}>WildCraft's {name}</h1>
                <h3 style={{marginTop:"-20px", color:"rgb(246, 108, 3)", marginLeft:"10px"}}>Brand - {brand}</h3>
                <h3 style={{marginTop:"-25px", marginLeft:"160px"}}>{star}⭐</h3>
                <h3 style={{fontSize:"180%", padding:"5px", marginLeft:"-1px"}}>₹{price}</h3>
                <h3 style={{marginTop:"-41px",marginLeft:"90px", fontSize:"180%", textDecoration:"line-through", color:"grey"}}>₹{originalPrice}</h3>
                <h3 style={{marginTop:"-37px", marginLeft:"170px", color:"green"}}>({percentage}% OFF)</h3>
                <p style={{color:"red", marginLeft:"10px"}}>⚡Hurry up, Only Few Left !</p>
                <div className="checkLine" style={{ width: "104%", marginLeft:"-2.2rem", marginTop:"20px", color:"grey"}}></div>
                <div>
                    <p>🔖Fastest Delivery</p>
                    <p>🔖Inclusive of All Taxes</p>
                    <p>🔖Cash On Delivery Available</p>
                </div>
                <div className="extra">
                    <li>
                        <ul>
                            Dealer:<p>Wildcraft</p>
                        </ul>
                        <ul>
                            Brand:<p>{brand}</p>
                        </ul>
                        <ul>
                            Gender:<p>Unisex</p>
                        </ul>
                    </li>
                </div>
                <div className="BtnsDetails">
                    <button>Buy Now</button>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
        </>
    )
}