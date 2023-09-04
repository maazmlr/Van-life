import React from "react";
import '../App.css' 
import { NavLink, Outlet } from "react-router-dom";

const Nav=()=>{
    return(
        <>
        <nav>
            <NavLink className="logo" to={"/"}>
            #VANLIFE
            </NavLink>
            <div className="NavLinks">
                <NavLink className={({isActive})=> isActive ? "active-link" : "about"} to={"/host"}>
                    Host
                </NavLink>
                <NavLink className={({isActive})=> isActive ? "active-link" : "about"} to={"/about"}>
                    About
                </NavLink>
                <NavLink className={({isActive})=> isActive ? "active-link" : "about"} to={"/vans"}>
                    Vans
                </NavLink>
            </div>
        </nav>
        </>

    )
}
export default Nav