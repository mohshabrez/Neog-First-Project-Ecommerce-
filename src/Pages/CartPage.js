import { UseCommerce, UseDispatch } from "../Context/CommerceContext";
import { ProductNavBar } from "./ProductNavBar";
import {ACTIONS} from "../Reducer/CommerceReducer"
import {Footer} from "../Pages/Footer"



export function CartPage(){
    const {state} = UseCommerce()
    const{dispatch} = UseDispatch()
    const plus = (cart) =>{
        dispatch({
            type:ACTIONS.PLUSCOUNT,
            payLoad: cart
        })
        dispatch({
            type: ACTIONS.PLUS,
            payLoad: cart
        })
    } 
    const minus = (cart) => {
        dispatch({
            type:ACTIONS.MINUSCOUNT,
            payLoad:cart
        })
        dispatch({
            type:ACTIONS.MINUS,
            payLoad:cart
        })
    }
    const removeFromCart = (cart) => {
        dispatch({
            type:ACTIONS.REMOVEFROMCART,
            payLoad: cart
        })
    }
    const moveCartToWish = (cart) => {
        dispatch({
            type:ACTIONS.ADDWISH,
            payLoad:cart
        })
        dispatch({
            type:ACTIONS.REMOVEFROMCART,
            payLoad:cart
        })
    }


    return(
        <>
        <ProductNavBar/>
        <div className="cartContainer">
        <h1>My Cart ({state.cartItems.length})</h1>
        <div className="cartBox">{
            state.cartItems.length > 0 ? (
            <ul>
                {state.cartItems.map((cart) => {
                    return(
                        <div className="cartDiv">
                            <div className="cartCard">
                                <li>
                                    <img src={cart?.image} alt="cartImage"/>
                                    <div className="cartDetails">
                                        <h4 style={{fontSize:"larger"}}>{cart?.name}</h4>
                                        <p style={{color:"#778899", marginTop:"-15px"}}>Brand - {cart?.brand}</p>
                                        <p style={{fontStyle:"italic", fontWeight:"bold", marginTop:"-10px"}}>₹{cart?.price}</p>
                                        <p style={{fontStyle:"italic", marginTop:"-10px",color:"grey", textDecoration:"line-through"}}>₹{cart?.originalPrice}</p>
                                        <div className="calbtns">
                                        <button disabled={cart?.count === 1}  onClick={()=>minus(cart)}>-</button><span style={{fontWeight:"bolder", padding:"4px"}}>{cart?.count}</span><button onClick={()=>plus(cart)}>+</button>
                                        </div>
                                    </div>
                                    <div className="Cartline"></div>
                                    <div className="cardBtns">
                                    <button className="AtoCart" onClick={()=> removeFromCart(cart)}>REMOVE</button>
                                    <button className="Atowish" onClick={()=> moveCartToWish(cart)}>MOVE TO WISHLIST</button>
                                    </div>
                                </li>
                            </div>
                        </div>
                    )
                })}
            </ul>
            ): (<img src="https://cdni.iconscout.com/illustration/premium/preview/empty-cart-2130356-1800917.png?w=0&h=1400" alt="empty cart" style={{width:"40rem", cursor:"none"}}/>)}
            {state.cartItems.length > 0 ?  (
                <div className="checkoutBox">
                <h2>Price Details</h2>
                <div className="checkLine"></div>
               <div className="checkoutDetails">
                <ul>
                    <li>Price</li>
                    <li>{state.price}</li>
                </ul>
                <ul>
                    <li>Discount</li>
                    <li style={{marginLeft:"-1.6rem"}}>{state.originalPrice}</li>
                </ul>
                <ul>
                    <li>Delivery Charges</li>
                    <li style={{marginLeft:"-1.1rem"}}>FREE</li>
                </ul>
                <div className="checkLine" style={{ width: "130%", marginLeft:"-2.2rem"}}></div>
                <ul>
                    <li><h3>Total Amount</h3></li>
                    <li style={{marginLeft:"-2.3rem"}}><h3>₹{state.price}</h3></li>
                </ul>
                <div className="checkLine" style={{ width: "130%", marginLeft:"-2.2rem"}}></div>
                <p style={{fontWeight:"bold"}}>You will save ₹{state.originalPrice} on this order </p>
                <button className="checkOut">Check Out</button>
            </div>
            </div>

            ) : (
            <h1 style={{fontSize:"500%"}}>Your cart is Empty</h1>)}
            
</div>
</div>
        </>
       
    )
}