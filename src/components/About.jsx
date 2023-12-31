import React from "react";
import { NavLink } from "react-router-dom";

const About =()=>{
    return(
        <>
        <div className="container-about">
        <div className="img"></div>
        <p className="h-content" style={{color:"black" , fontSize:"2rem", textAlign:"center"}}>
        Don’t squeeze in a sedan when you could relax in a van.
        </p>
        <p className="p-content" style={{color:"black"}}>
        Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
(Hitch costs extra 😉)

Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>
        <div className="box">
            <p className="h-content"  style={{color:"black" , fontSize:"2rem", textAlign:"center"}}>
            Your destination is waiting.
            </p>

            <p className="h-content"  style={{color:"black" , fontSize:"2rem", textAlign:"center",margin:"0"}}>
            Your van is ready.         </p>
            <NavLink to={"/vans"} ><button className="abc">Exploe your vans</button></NavLink>

        </div>
        </div>

        </>
    )
}
export default About