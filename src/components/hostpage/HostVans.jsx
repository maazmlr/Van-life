import { useEffect, useState } from "react"
import HostVansCont from "./HostVansCont"
import { Link, NavLink } from "react-router-dom"

const HostVans=()=>{

    const [data,setData]=useState(null)
    useEffect(()=>{
        fetch("/api/host/vans")
        .then(res=> res.json())
        .then(res=> setData(res.vans))
    },[])
        const element=data?.map(item=> <NavLink to={`${item.id}`}> <HostVansCont imgUrl={item.imageUrl} name={item.name}/></NavLink>)
 return(
    <div className="hvans-body">
{
    data ? (
    <>
    <p className="head">
        Your listed vans
    </p>
        {element}
    
    </>
    ):
    <h2>loading</h2>
}
</div>

 )
}
export default HostVans