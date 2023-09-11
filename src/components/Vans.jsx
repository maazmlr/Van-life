import React, { useEffect, useState } from "react";
import VansImg from "./VansImg";
import { NavLink, useSearchParams ,useLoaderData } from "react-router-dom";
import { getVans } from "../api";
export function loader(){
  return getVans()
}
const Vans=()=>{

  const dat =useLoaderData()
  console.log(dat)
    const [seacrhParam,SetsearchParam]=useSearchParams()

    let typeFilter=seacrhParam.get("type")

    console.log(typeFilter)


    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setData(data.vans))
    },[])


    const display=typeFilter ? data.filter(item=>item.type.toLowerCase()===typeFilter) : data
    


    const elements=display.map((v,i)=>{
        return(
          <NavLink to={`${v.id}`} state={{search:seacrhParam.toString(),type:typeFilter}}>
        <VansImg
        key={v.id}
        imgurl={v.imageUrl} 
            title={v.name}
            price={v.price}
            type={v.type}

        />
        </NavLink>  
     ) })
 


     function genNewSearchParamString(key, value) {
        const sp = new URLSearchParams(seacrhParam)
        if (value === null) {
          sp.delete(key)
        } else {
          sp.set(key, value)
        }
        return `?${sp.toString()}`
      }
    return(
        <>
        <div className="vans-container">
            <p className="h-content" style={{color:"black",fontSize:"2rem"}}>
            Explore our van options
            </p>
            <div className="area">
            <div className="btn-area">
                <button onClick={()=>SetsearchParam(genNewSearchParamString("type", "simple"))} className={`btn-filter-1 ${typeFilter==="simple"?"click":"btn"}`}>Simple</button>
                <button onClick={()=>SetsearchParam(genNewSearchParamString("type", "luxury"))} className={`btn-filter-2 ${typeFilter==="luxury"?"click":""}`}>Luxury</button>
                <button onClick={()=>SetsearchParam(genNewSearchParamString("type", "rugged"))} className={`btn-filter-3 ${typeFilter==="rugged"?"click":""}`}>Rugged</button>
            </div>
           { typeFilter && <p className="btn-filter">
                <NavLink to={"."}>Clear All filter </NavLink>
            </p>}
            </div>
            
            
</div>

<div className="item-container">
{elements}
</div>
        </>
    )
}



export default Vans