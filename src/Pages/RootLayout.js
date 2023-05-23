import React  from "react"
import Home from "../Images/home.png"
import Product from "../Images/store.png"
import cart from "../Images/trolley.png"
import login from "../Images/profile.png"
import wish from '../Images/wishlist.png'
import { NavLink, Link, Outlet } from "react-router-dom"

export function RootLayout(){
    return(
        <>
        <header className="header">
            <nav className="nav">
            <NavLink className="logoName" to="/HomePage">TrAvLo.Co</NavLink>
            <NavLink className="Home" to="/HomePage"><img src={Home} alt="Home"/></NavLink>
            <NavLink to="/ProductPage"><img src={Product} alt="products"/></NavLink>
            <NavLink to="/CartPage"><img src={cart} alt="cart"/></NavLink>
            <NavLink to="/Wishlist"><img src={wish} alt="wish"/></NavLink>
            <NavLink to="/login"><img src={login} alt="Login"/></NavLink>
            </nav>
            <section>
                <NavLink to="/SearchBar">
                <input className="searchBar" placeHolder="Search by product Name"/></NavLink>
                <button className="search-btn">Search</button>
            </section>
            <section className="links">
                <Link style={{padding:"30px", color: "rgb(246, 108, 3)"}}>Contact Us</Link>
                <Link style={{padding:"30px", color: "rgb(246, 108, 3)"}}>Support</Link>
            </section>
        </header>
        <main><Outlet/></main>
        </>
    )
}