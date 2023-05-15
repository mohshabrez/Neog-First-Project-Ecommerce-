import React  from "react"
import Home from "../Images/home.png"
import Product from "../Images/store.png"
import cart from "../Images/trolley.png"
import login from "../Images/profile.png"
import { NavLink } from "react-router-dom"


export function ProductNavBar(){
    return(
        <div className="ProductNavBar">
            <nav className="navBar">
            <NavLink className="logoNameNav" to="/HomePage">TrAvLo.Co</NavLink>
            <section className="navIcons">
            <NavLink className="Home" to="/HomePage"><img src={Home} alt="Home"/></NavLink>
            <NavLink to="/ProductPage"><img src={Product} alt="products"/></NavLink>
            <NavLink><img src={cart} alt="cart"/></NavLink>
            <NavLink><img src={login} alt="Login"/></NavLink>
            </section>
            </nav>
            <section>
                <NavLink to="/SearchBar">
                <input className="searchBar" placeHolder="Search by product Name"/></NavLink>
                <button className="search-btn" >Search</button>
            </section>
        </div>
    )
}