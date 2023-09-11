import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Vans ,{loader} from "./components/Vans";
import { BrowserRouter,Routes,Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom";
import "../server"
import 'bootstrap/dist/css/bootstrap.min.css';
import VansDetails from "./components/VansDetails";
import Dashboard from "./components/hostpage/Dashboard";
import Income from "./components/hostpage/Income";
import Reviews from "./components/hostpage/Reviews";
import LayoutHost from "./components/hostpage/LayoutHost";
import Layout from "./components/Layout";
import HostVans from "./components/hostpage/HostVans";
import HostVansDetails from "./components/hostpage/hostVansDetails";
import HostVansDescription from "./components/hostpage/host-vans/HostVansDesc";
import HostVansPhotos from "./components/hostpage/host-vans/HostVansPhotos";
import HostVansPrice from "./components/hostpage/host-vans/HostVansPrice";
import ErrorPage from "./components/ErrorPage";
export default function App (){

  const router=createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
    <Route path='/' element={<Home/>} />
    <Route path='about' element={<About/>} />
    <Route path='vans' element={<Vans/>} loader={loader}/>
    <Route path='vans/:id' element={<VansDetails/>} />
    <Route path="host" element={<LayoutHost/>}>
    <Route index element={<Dashboard />} />

      <Route path='income' element={<Income />} />
      <Route path='reviews' element={<Reviews />} />
      <Route path='vans' element={<HostVans />} />
      <Route path='vans/:id' element={<HostVansDetails />}>

        <Route index element={<HostVansDescription/>}/>
        <Route path="photos" element={<HostVansPhotos/>}/>
        <Route path="price" element={<HostVansPrice/>}/>
      </Route>
    </Route>
      <Route path="*" element={<ErrorPage/>}/>
    </Route>

  ))
    return(
    <RouterProvider router={router}/>
    
    )
} 

