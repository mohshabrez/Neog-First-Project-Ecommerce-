import "./App.css";
import { HomePage } from "./Pages/HomePage";
import { ProductPage } from "./Pages/ProductPage";
import { RootLayout } from "./Pages/RootLayout";
import {Routes, Route} from "react-router-dom"
import { SearchBar } from "./Pages/SearchBar";

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<RootLayout/>}/>
        <Route index element={<HomePage />} />
          <Route path="HomePage" element={<HomePage />} />
          <Route path="ProductPage" element={<ProductPage/>}/>
          <Route path="SearchBar" element={<SearchBar/>}/>
      </Routes>
    </div>
     
  );
}

export default App;
