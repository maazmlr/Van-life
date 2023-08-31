import React from "react";
import '../App.css' 
import { Link } from "react-router-dom";

const Nav=()=>{
    return(

        <nav>
            <Link className="logo" to={"/"}>
            #VANLIFE
            </Link>
            <div className="links">
                <Link className="about" to={"/about"}>
                    About
                </Link>
                <Link className="vans" to={"/vans"}>
                    Vans
                </Link>
            </div>
        </nav>

    )
}
export default Nav