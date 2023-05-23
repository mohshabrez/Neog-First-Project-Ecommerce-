import "./App.css";
import { HomePage } from "./Pages/HomePage";
import { ProductPage } from "./Pages/ProductPage";
import { RootLayout } from "./Pages/RootLayout";
import {Routes, Route} from "react-router-dom"
import { SearchBar } from "./Pages/SearchBar";
import {CartPage} from "./Pages/CartPage"
import { Wishlist } from "./Pages/Wishlist";
import { ProductDetails } from "./Pages/ProductDetails";
import { LoginPage } from "./Pages/LoginPage";
import { RequiresAuth } from "./Components/RequiresAuth";
import { SignUp } from "./Pages/SignUp";

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<RootLayout/>}/>
        <Route index element={<HomePage />} />
          <Route path="HomePage" element={<HomePage />} />
          <Route path="ProductPage" element={<ProductPage/>}/>
          <Route path="SearchBar" element={<SearchBar/>}/>
          <Route path="CartPage" element={<RequiresAuth><CartPage/></RequiresAuth>}/>
          <Route path="Wishlist" element={<RequiresAuth><Wishlist/></RequiresAuth>}/>
          <Route path="productDetails/:productId" element={<ProductDetails/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="SignUp" element={<SignUp/>}/>
      </Routes>
    </div>
     
  );
}

export default App;
