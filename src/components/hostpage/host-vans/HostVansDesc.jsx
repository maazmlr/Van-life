
import { NavLink, useOutletContext } from "react-router-dom";

const HostVansDescription=()=>{
    const [vans,setVans]=useOutletContext()
console.log(vans)
    return(
        <p style={{margin:"2rem"}}><strong>Description:</strong>{vans.description}</p>
        )
}
export default HostVansDescription