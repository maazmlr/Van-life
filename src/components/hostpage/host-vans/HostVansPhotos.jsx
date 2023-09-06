import { useOutletContext } from "react-router-dom"

const HostVansPhotos=()=>{
    const [vans,setVans]=useOutletContext()
    return(
        <img style={{display:"block",height:"20rem",width:"23rem",margin:"2rem auto"}} src={vans.imageUrl} alt="" />

        )
}
export default HostVansPhotos