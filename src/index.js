import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter  } from "react-router-dom";
import App from "./App";
import { CommerceProvider } from "./Context/CommerceContext";
import { makeServer } from "./server";
import { APIprovider } from "./Components/APIcontext";



// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <APIprovider>
      <CommerceProvider>
      <App />
      </CommerceProvider>
      </APIprovider>
      </BrowserRouter>
  
    
  </React.StrictMode>,
  document.getElementById("root")
);
