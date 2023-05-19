import React  from "react"
import Home from "../Images/home.png"
import Product from "../Images/store.png"
import cart from "../Images/trolley.png"
import login from "../Images/profile.png"
import wish from "../Images/wishlist.png"
import { NavLink } from "react-router-dom"
export function NavBar(){
    return(
        <div className="ProductNavBar">
            <nav className="navBar">
            <NavLink className="logoNameNav" to="/HomePage">TrAvLo.Co</NavLink>
            <section className="navIcons">
            <NavLink className="Home" to="/HomePage"><img src={Home} alt="Home"/></NavLink>
            <NavLink to="/ProductPage"><img src={Product} alt="products"/></NavLink>
            <NavLink to="/CartPage"><img src={cart} alt="cart"/></NavLink>
            <NavLink to="/Wishlist"><img src={wish} alt="wish"/></NavLink>
            <NavLink><img src={login} alt="Login"/></NavLink>
            </section>
            </nav>
        </div>
    )
}