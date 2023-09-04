import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Vans from "./components/Vans";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import "../server"
import 'bootstrap/dist/css/bootstrap.min.css';
import VansDetails from "./components/VansDetails";
import Nav from "./components/Nav"
import Dashboard from "./components/hostpage/Dashboard";
import Income from "./components/hostpage/Income";
import Reviews from "./components/hostpage/Reviews";

export default function App (){
    return(
        <BrowserRouter>

        <Routes>
          <Route element={<Nav/>}>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/vans' element={<Vans/>}/>
        <Route path='/vans/:id' element={<VansDetails/>} />
        <Route path='/host' element={<Dashboard />} />
        <Route path='/host/income' element={<Income />} />
        <Route path='/host/reviews' element={<Reviews />} />


        </Route>
        </Routes>
      </BrowserRouter>
    
    )
} 

