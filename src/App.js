import "./App.css";
import { HomePage } from "./Pages/HomePage";
import { ProductPage } from "./Pages/ProductPage";
import { RootLayout } from "./Pages/RootLayout";
import {Routes, Route} from "react-router-dom"
import { SearchBar } from "./Pages/SearchBar";
import {CartPage} from "./Pages/CartPage"
import { Wishlist } from "./Pages/Wishlist";
import { ProductDetails } from "./Pages/ProductDetails";

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<RootLayout/>}/>
        <Route index element={<HomePage />} />
          <Route path="HomePage" element={<HomePage />} />
          <Route path="ProductPage" element={<ProductPage/>}/>
          <Route path="SearchBar" element={<SearchBar/>}/>
          <Route path="CartPage" element={<CartPage/>}/>
          <Route path="Wishlist" element={<Wishlist/>}/>
          <Route path="productDetails/:productId" element={<ProductDetails/>}/>
      </Routes>
    </div>
     
  );
}

export default App;
