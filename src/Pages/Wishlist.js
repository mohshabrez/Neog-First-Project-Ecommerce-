import { UseCommerce, UseDispatch } from "../Context/CommerceContext";
import { ProductNavBar } from "./ProductNavBar";
import { ACTIONS } from "../Reducer/CommerceReducer";

export function Wishlist(){
    const {state} = UseCommerce()
    const {dispatch} = UseDispatch()
    const removeFromWish = (wishproduct) => {
        dispatch({
            type:ACTIONS.REMOVEFROMWISH,
            payLoad: wishproduct
        })
    }
    const Addtocart = (wishproduct) => {
        dispatch({
            type:ACTIONS.ADDCART,
            payLoad: wishproduct
        })
        dispatch({
            type: ACTIONS.REMOVEFROMWISH,
            payLoad: wishproduct
        })
    }
    return(
        <>
        <ProductNavBar/>
        <div className="WishList">
            
            <div className="WishlistItems">
                {state.wishList && (
                    <>
                    <h1>My WishList</h1>
                    {state.wishList.length > 0 ?(
                    <ul>
                        {state.wishList.map((wishproduct) => {
                            return(
                                <div className="wishCard">
                                <img className="wishImg" src={wishproduct?.image} alt="wishlist images"/>
                                <div className="wishDetails">
                                    <h3>{wishproduct?.name}</h3>
                                    <p style={{marginTop:"-20px"}}>{wishproduct?.brand}</p>
                                    <p>₹{wishproduct?.price}</p>
                                    <p style={{marginTop:"-35px", marginLeft:"50px",textDecoration:"line-through"}}>(₹{wishproduct?.originalPrice})</p>
                                    <span className="material-symbols-outlined" style={{marginTop:"-120px", marginRight:"-5px"}} onClick={() => removeFromWish(wishproduct)}>close</span>
                                    <button className="wishBtn" onClick={()=> Addtocart(wishproduct)}>Add to Cart</button>
                                </div>
                                </div>)
                        })}
                    </ul>
                    ) : <img src="https://th.bing.com/th/id/OIP.gn99fIyj918A9IUVwOiCagAAAA?pid=ImgDet&rs=1" alt="wishlist empty" style={{cursor:"none"}}/>}
                    </>
                )}
            </div>
        </div>
        </>
    )
}