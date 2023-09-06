import { useOutletContext } from "react-router-dom"

const HostVansPrice=()=>{
    const [vans,setVans]=useOutletContext()

    return(
        <h1 style={{margin:"2rem"}}>Price : {vans.price}$</h1>
    )
}
export default HostVansPrice