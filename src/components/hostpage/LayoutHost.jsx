import { NavLink, Outlet } from "react-router-dom"


const LayoutHost=()=>{
    return(
        <>
        <div className="link-container">
        <NavLink className={({isActive})=> isActive ?"islinky" :"linky"} end to={"."}>Dashboard</NavLink>
        <NavLink className={({isActive})=> isActive ?"islinky" :"linky"} to={"vans"}>Vans</NavLink>
        <NavLink  className={({isActive})=> isActive ?"islinky" :"linky"} to={"income"}>Income</NavLink>
        <NavLink className={({isActive})=> isActive ?"islinky" :"linky"} to={"reviews"}>Reviews</NavLink>
        </div>
        <Outlet/>
        </>
        
    )
}
export default LayoutHost