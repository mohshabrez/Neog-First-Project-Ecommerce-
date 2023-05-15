import React from "react";
import { UseCommerce, UseDispatch } from "../Context/CommerceContext";
import { NavBar } from "./NavBar";
import {useState} from "react"
import {ACTIONS} from "../Reducer/CommerceReducer"

export function SearchBar(){
    const[searchValue, setSearchValue] = useState("")
    const {dispatch} = UseDispatch();
    const {ProductsData} = UseCommerce()
    const searchBarHandler = (e) => {
        setSearchValue(e.target.value)
    }
    const searchBtn = (searchValue) => {
        if(searchValue){
            dispatch({
                type: ACTIONS.SEARCH,
                payLoad: searchValue
            })
        }else{
            dispatch({
                type:ACTIONS.RESET,
                payLoad: ACTIONS.SEARCH
            })
        }
    }
    return(
        <div className="SearchBarPage">
        <NavBar/>
        <div className="searchElements">        
            <div className="bar">
                <input className="searchpagebar" placeHolder="Search by product Name" onChange={searchBarHandler}/>
                <button className="searchpagebtn" onClick={()=>searchBtn(searchValue)} >Search</button>
            </div>
        <h1>SEARCH RESULT FOR "{searchValue}"</h1>
        <div>
            <ul>
                {}
            </ul>
        </div>
        </div>
        </div>
    )
}