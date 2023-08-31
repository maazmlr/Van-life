import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Vans from "./components/Vans";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import "../server"
    
export default function App (){
    return(
        <BrowserRouter>
  
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/vans' element={<Vans/>}/>
        </Routes>
      </BrowserRouter>
    
    )
} 

