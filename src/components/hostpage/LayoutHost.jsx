import { NavLink, Outlet } from "react-router-dom"


const LayoutHost=()=>{
    return(
        <>
        <div className="link-container">
        <NavLink className={({isActive})=> isActive ?"islinky" :"linky"} end to={"/host"}>Dashboard</NavLink>
        <NavLink  className={({isActive})=> isActive ?"islinky" :"linky"} to={"/host/income"}>Income</NavLink>
        <NavLink className={({isActive})=> isActive ?"islinky" :"linky"} to={"/host/reviews"}>Reviews</NavLink>
        </div>
        <Outlet/>
        </>
        
    )
}
export default LayoutHost