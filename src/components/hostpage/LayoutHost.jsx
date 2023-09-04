import { Link, Outlet } from "react-router-dom"


const LayoutHost=()=>{
    return(
        <>
        <div className="link-container">
        <Link className="linky" to={"/host"}>Dashboard</Link>
        <Link className="linky" to={"/host/income"}>Income</Link>
        <Link className="linky" to={"/host/reviews"}>Reviews</Link>
        </div>
        <Outlet/>
        </>
        
    )
}
export default LayoutHost