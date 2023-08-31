import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";

    
export default function App (){
    return(
        <BrowserRouter>
  
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
    
    )
} 

