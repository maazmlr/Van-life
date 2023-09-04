import React, { useEffect, useState } from "react";
import VansImg from "./VansImg";
import { NavLink } from "react-router-dom";

const Vans=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setData(data.vans))
    },[])
    const elements=data.map((v,i)=>{
        return(
          <NavLink to={`./${v.id}`}>
        <VansImg
        key={v.id}
        imgurl={v.imageUrl} 
            title={v.name}
            price={v.price}
            type={v.type}

        />
        </NavLink>  
     ) })
   const a =data.map((v)=>{
        console.log(v.imageUrl)
   })
   console.log(a)
    return(
        <>
        <div className="vans-container">
            <p className="h-content" style={{color:"black",fontSize:"2rem"}}>
            Explore our van options
            </p>
            <div className="area">
            <div className="btn-area">
                <button className="btn-filter-1">Simple</button>
                <button className="btn-filter-2">Luxury</button>
                <button className="btn-filter-3">Rugged</button>
            </div>
            <p className="btn-filter">
                Clear All filter
            </p>
            </div>
            
            
</div>

<div className="item-container">
{elements}
</div>
        </>
    )
}



export default Vans