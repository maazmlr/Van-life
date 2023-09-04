import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const VansDetails=()=>{
    const params=useParams()
    const [vans,setVans]=useState(null)
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
            <Link to={"/vans"} className="back">back to the vans</Link>
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