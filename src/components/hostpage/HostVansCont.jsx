
const HostVansCont=({imgUrl,name})=>{
    return(
        <div className="data">
        <img src={ `${imgUrl}`} alt="" />
        <p className="vans-name" >
        {name}
        </p>

        
    </div>
    )
}
export default HostVansCont