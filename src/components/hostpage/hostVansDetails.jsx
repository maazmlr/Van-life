import { useEffect, useState } from "react"
import { NavLink, Outlet, useParams  } from "react-router-dom"

const HostVansDetails=()=>{
    const params=useParams()
    const [vans,setVans]=useState(null)
    useEffect(()=>{
        fetch(`/api/host/vans/${params.id}`)
        .then(res=> res.json())
        .then(res=>setVans(res.vans[0]))
    },[params.id])
    console.log(vans)
    return(
        <>
{
       vans ?(
            <>
            <NavLink to={".."} relative="path" className="back">back to the vans</NavLink>
            <div className="vans-body" style={{display:"flex",alignItems:"center"}}>
                <img className="van-img" src={ `${vans.imageUrl}`} alt="" style={{height:"7rem",width:"7rem",margin:"0",display:"inline"}} />
                <div className="aside" style={{marginLeft:"4rem"}}>
                <buttton className="type"  >{vans.type}</buttton>
                <p className="name">{vans.name}</p>
                <p className="rate">${vans.price}/day</p>
                </div>
                </div>

                <div className="vans-nav">
                    <NavLink className= {({isActive})=> isActive ?"islinky" :"linky"} end to={"."}>description</NavLink> 
                    <NavLink className= {({isActive})=> isActive ?"islinky" :"linky"} to={"photos"}>photos</NavLink> 
                    <NavLink className= {({isActive})=> isActive ?"islinky" :"linky"} to={"price"}>Price</NavLink> 
                </div>
            <Outlet context={[vans,setVans]}/>
            </>
            ):
            <h2>loadingg ....</h2>
                    }
    
</>
        )
}
export default HostVansDetails