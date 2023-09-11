import { useEffect, useState } from "react"
import {  useLocation, useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"

const VansDetails=()=>{
    const params=useParams()
    const [vans,setVans]=useState(null)

    const location=useLocation()
    console.log(location)
    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(res=> res.json())
        .then(data=> setVans(data.vans))
    },[params.id])
    return (
        
        <div>
        {
            vans ?(
            <>
            <NavLink relative="path" to={`..?${location.state.search}`} className="back">{`Back to ${location.state.type ? location.state.type+" vans" :"all vans"}`}</NavLink>
            <div className="vans-body">
                <img className="van-img" src={ `${vans.imageUrl}`} alt="" />
                <buttton className="type">{vans.type}</buttton>
                <p className="name">{vans.name}</p>
                <p className="rate">${vans.price}/day</p>
                <p className="detail">
                    ${vans.description}
                </p>
                <button style={{width:"100%",color:"white",backgroundColor:"#E17654",height:"4rem",border:"none",textAlign:"center"}}>Detail about this vans</button>
            </div>
            </>
            ):
            <h2>loadingg ....</h2>
                    }
        </div>

    )
}
export default VansDetails