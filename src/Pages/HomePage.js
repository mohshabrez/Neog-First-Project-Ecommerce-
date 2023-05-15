/* eslint-disable jsx-a11y/anchor-is-valid */
import { RootLayout } from "./RootLayout";
import { useState } from "react";
import footware from "../Images/footwear-b_1.webp"
import gear from "../Images/gear-b_1.webp"
import rainwear from "../Images/rainwear-b.webp"
import { UseCommerce } from "../Context/CommerceContext";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";


export function HomePage(){
    const {categories, products} = UseCommerce()
    const slides=[footware, gear, rainwear]
    const[count, setCount] = useState(0);
    const [slide, setSlide] = useState(slides[count]);
    const [gridColumn, setGridSpan] = useState("2/8");

    const nextSlide = () => {
        count < 2 ? setCount((prev) => prev +1 ): setCount(0);
        setSlide(slides[count])
        count === 2 ? setGridSpan("10/16"): setGridSpan("2/8")
    }
    const prevSlide = () => {
        count > 0 ? setCount((prev) => prev - 1) : setCount(2);
        count === 2
          ? setGridSpan("10/16")
          : setGridSpan("2/8");
        setSlide(slides[count]);
      };

    return(
        <div className="HomePage">
        <RootLayout/>
        <div className="main">
            <div className="wrapper" >
            <a className="prev" onClick={prevSlide} >&#10094;</a>
                <div className="image-container" style={{gridColumn}}>
                    <div className="Homeimage">
                        <img src={slide} alt="Home Images"/>
                    </div>   
                </div>
            <a className="next" onClick={nextSlide}>&#10095;</a>
            </div>
            <div className="categorized">
                <h1>Explore our Categories</h1>
                <ul>
                    {categories.map((category) => {
                        return(
                            <li key={category?._id}>
                                <div className="categoryCard">
                                    <h3>{category?.categoryName}</h3>
                                    <img src={category?.image} alt="categorizedData"/>
                                    <Link className="categoryLink" style={{color: "whitesmoke", fontWeight:"bolder", padding:"20px"}}>See More</Link>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <Footer/>
      </div>
        </div>
    
   
    )
}