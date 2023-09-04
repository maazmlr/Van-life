import React from "react";
import { NavLink } from "react-router-dom";

const Home= ()=>{
    return(
        <>
        <div className="container">
            <h1 className="h-content">
            You got the travel plans, we got the travel vans.
            </h1>
            <p className="p-content">
            Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
            </p>
            <NavLink className="" to={"/vans"}><button className="button">Find your van</button></NavLink>
        </div>
        </>

    )
}
export default Home